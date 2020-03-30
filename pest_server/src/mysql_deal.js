import mysqlx   from "@mysql/xdevapi";

import configure from "./configure";


function  to_object(arr_name, arr_value)
{
  console.log(arr_value);

  let obj = {};

  if(arr_name.length === arr_value.length)
  {
    for(let i=0; i<arr_name.length; i++)
    {
      obj[arr_name[i]] = arr_value[i];
    }
  }
  return obj;
}

//数据库操作

class  mysql_deal
{
  //时间格式转换
  static change_data(object)
  {
    console.log(object);

    let o = object;

    if(o.hasOwnProperty('disease_time'))
    {
      if(o.disease_time)
      {
        o.disease_time = formatDate( o.disease_time, '-' )
      }
    }
    if(o.hasOwnProperty('diagnosis_time'))
    {
      if(o.diagnosis_time)
      {
        o.diagnosis_time = formatDate( o.diagnosis_time, '-' )
      }
    }
    if(o.hasOwnProperty('visit_time'))
    {
      if(o.visit_time)
      {
        o.visit_time = formatDate(o.visit_time, '-')
      }
    }
    if(o.hasOwnProperty('checkout_date'))
    {
      if(o.checkout_date)
      {
        o.checkout_date = formatDate(o.checkout_date, '-')
      }
    }
    return o;
  }

  /**
   * cly 2020-3-4
   * 获取30条数据
   * @param index 查询页数
   * @returns {Promise<Array>}
   */
  static async get_information(index ,rows)
  {
    let data = [];

    const session = await mysqlx.getSession(configure.connection);

    const sql = build_sql.get_information(configure.database_field.names_all, (index-1)*rows, rows);

    await session.sql(sql).execute(r => data.push(mysql_deal.change_data(to_object(configure.database_field.names_all, r))));

    session.close();

    return data;
  }

  /**
   * cly 2020-3-4
   * 获取30条数据
   * @param index 查询页数
   * @returns {Promise<Array>}
   */
  static async get_information_group_by_name()
  {
    let data = [];

    const session = await mysqlx.getSession(configure.connection);

    const sql = build_sql.get_information_group_by_name(configure.database_field.names_all);

    await session.sql(sql).execute(r => data.push(to_object(configure.database_field.names_all, r))).catch(e => console.log(e));

    session.close();

    return data;
  }

  /**
   * cly 2020-3-5
   * 查询条数
   */
  static async get_count(type)
  {
    let number = 0, obj = {}, sql = '';
    const session = await mysqlx.getSession(configure.connection);

    if( type === "normal" )
      sql = build_sql.get_count();

    if( type === "severe" )
    sql = build_sql.get_severe_count();

    await session.sql(sql).execute(r => {
      number = r[0]
    });

    session.close();

    obj.count= number;

    return obj;
  }

  /**
   * cly 2020-3-10
   * @param name 患者id
   * 查询患者病历报告
   */
  static async get_report( name )
  {
    let obj = {};
    const session = await mysqlx.getSession(configure.connection);

    const sql = build_sql.get_report_by_name(name);

    await session.sql(sql).execute(r => {
      obj = to_object( ['name', 'report' ], r);
    });

    session.close();

    return obj;
  }

  /**
   * 将该url页面保存为pdf
   * @param path
   * @param directory
   * @returns {Promise<number>}
   */
  static async build_pdf(url, save_path)
  {
    console.log(url, save_path);
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto( "http://localhost:3000", { waitUntil: 'networkidle2' });
    await page.pdf({ path: "F:\\pdf\\e.pdf", format: 'A4'});
    await browser.close();
    return 1;
  }


  /**
   *
   * @param index
   * @param rows
   * @returns {Promise<void>}
   */
  static async get_severe_patient(index ,rows)
  {
    let data = [];

    const session = await mysqlx.getSession(configure.connection);

    const sql = build_sql.get_severe_patient(configure.database_field.sever_patient, (index-1)*rows, rows);

    console.log(sql);

    await session.sql(sql).execute(r => data.push(mysql_deal.change_data(to_object(configure.database_field.sever_patient, r))));

    session.close();

    return data;
  }
}


class build_sql
{
  static get_information(field, startRows, rows)
  {
    const parameter = field.join(',');

    return `select ${ parameter } from ${ configure.database.name }.${ configure.database.table } limit ${ startRows }, ${ rows }`;
  }
  static  get_information_group_by_name(field)
  {
    const parameter = field.join(',');

    return `select ${ parameter } from ${ configure.database.name }.${ configure.database.table } group by name`;
  }
  static get_count(type)
  {
    return `select count(id) from ${ configure.database.name }.${ configure.database.table }`;
  }
  static get_severe_count()
  {
    return `select count(id) from ${ configure.database_severe.name }.${ configure.database_severe.table }`;
  }
  static get_report_by_name( name )
  {
    return `select name, report from ${ configure.database_report.name }.${ configure.database_report.table } where name = ${ name }`
  }
  static get_severe_patient(field, startRows, rows)
  {
    const parameter = field.join(',');

    return `select ${ parameter } from ${ configure.database_severe.name }.${ configure.database_severe.table } order by name limit ${ startRows }, ${ rows }`;
  }
}

function formatDate(numb, format)
{
  console.log(numb, format);

  const time = new Date((numb - 1) * 24 * 3600000 + 1);
  time.setYear(time.getFullYear() - 70);
  const year = time.getFullYear() + '';
  const month = time.getMonth() + 1 + '';
  const date = time.getDate() - 1 + '';

  if (format && format.length === 1)
  {
    return year + format + month + format + date;
  }

  return year + (month < 10 ? '0' + month : month) + (date < 10 ? '0' + date : date);
}



export default mysql_deal;
