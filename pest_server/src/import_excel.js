//生成sql‘

//读取word
const mysqlx = require("@mysql/xdevapi");
const path = "E:\\微信文档\\WeChat Files\\mxds123456\\FileStorage\\File\\2020-03\\101-200";
var mammoth = require("mammoth");

async function execute_mysql(name, report)
{
  console.log(name, report);

  const mysqlx = require("@mysql/xdevapi");
  const session = await mysqlx.getSession({
    user: 'root',
    password: '123456',
    // host: '10.68.137.135',
    host: 'localhost',
    port: '33060'
  });

  const sql = `insert into pest.patient_report(name, report) values( "${name}", "${ report }" )`;
  console.log(sql);

  await session.sql(sql).execute( r=> console.log(r) );

  await session.close();
}


const pathContent = "E:\\document\\微信聊天记录\\WeChat Files\\mxds123456\\FileStorage\\File\\2020-03\\101-200\\101-200\\101.docx";
console.log(pathContent);

mammoth.extractRawText({path: pathContent})   //读取docx文件
    .then(function(result)
    {
      console.log(result.value);
      execute_mysql( 122, result.value);
    })
    .catch(e => console.log(e))
    .done();

/*
const fs = require("fs");
const iconv = require("iconv-lite");
fs.readFile('G:\\data\\102.txt', (err, data) => {
  if (err) throw err;
  console.log(iconv.decode(data, 'utf-8'));
});*/


/*var path = require("path");
var pathName = "G:/data";
fs.readdir(pathName, function(err, files){
  var dirs = [];
  (function iterator(i){
    if(i == files.length) {
      console.log(dirs);
      return ;
    }
    fs.stat(path.join(pathName, files[i]), function(err, data){
      if(data.isFile()){
        dirs.push(files[i]);
      }
      iterator(i+1);
    });
  })(0);
});*/
