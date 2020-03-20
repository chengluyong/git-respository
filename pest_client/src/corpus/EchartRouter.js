import React, { Component } from 'react';
import Histogram from "./Histogram"
import PieMultiple from "./PieMultiple"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



class EchartRouter extends Component
{
  constructor(props)
  {
    super(props);

    this.state =
        {
          numPages: null,
          pageNumber: 1,
        };
    this.properties =
        {
          symptoms: ['fever','cough','expectoration', 'pharyngalgia', 'dry_pharynx', 'myalgia', 'tired', 'weak', 'chest', 'short_of_breath','diarrhea','dyspnea','headache'],
          _symptoms: ['发热','咳嗽','咳痰','咽痛','咽干','肌痛','疲劳','乏力','胸闷','气短','腹泻','呼吸困难','头痛'],
          contactHistory: [ 'wuhan_live_history', 'patient_community_live_history','wuhan_people_contach_history','patient_community_respiratory_symptoms','cluster_onset','virus_patient_contact_history','no_contact_history'],
          _contactHistory: ['武汉及周边居住史', '病例报告社区居旅史' , '武汉及周边人群接触史', '病例报告社区发热或有呼吸道症状患者接触史', '聚集性发病', '新型冠状病毒感染者接触史', '无任何接触史'],
          iconography: ['mutiple', 'photo_logging', 'class_milling', 'shadow_of_infiltration', 'cable_shadow', 'spot_like_shadow', 'real_change', 'pleural_effussion'],
          _iconography: ['多发', '单发', '磨玻璃影','浸润影', '条索状影', '斑片状影', '实变影', '胸腔积液'],
        };
    this.pies =
        {
          severity_of_disease:  ['轻症', '一般', '重症', '危重', '普通'] ,
          sex: ['男', '女'] ,
        };

    this.savePDF = this.savePDF.bind(this);
  }

  savePDF()
   {
     html2canvas(document.getElementById("_container")).then(function (canvas) {
       const contentWidth = canvas.width;
       const contentHeight = canvas.height;
       const pageData = canvas.toDataURL('image/jpeg', 1.0);
       const pdfX = (contentWidth + 10) / 2 * 0.75;
       const pdfY = (contentHeight + 500) / 2 * 0.75 ;// 500为底部留白

       const imgX = pdfX;
       const imgY = (contentHeight / 2 * 0.75); //内容图片这里不需要留白的距离

       const PDF = new jsPDF('', 'pt', [pdfX, pdfY]);

       PDF.addImage(pageData, 'jpeg', 0, 0, imgX, imgY);
       PDF.save('download.pdf');
     });
   };

  render()
  {
    //柱状图
    const symptoms_data = extract_data_by_name(this.properties.symptoms, this.props.data.get_information_group_by_name);
    const symptom_obj = {
      id: 1,
      type: '症状',
      title: '症状人数',
      property: this.properties._symptoms,
      data: symptoms_data
    };

    const contactHistory_data = extract_data_by_name(this.properties.contactHistory, this.props.data.get_information_group_by_name);
    const contactHistory_obj = {
      id: 2,
      type: '途径',
      title: '居旅史',
      property: this.properties._contactHistory,
      data: contactHistory_data
    };

    let iconography_data = extract_data_by_name(this.properties.iconography, this.props.data.get_information_group_by_name);

    //有影像记录（下标1）-多发个数（下标0）= 单发个数
    let iconography_data_deal = iconography_data.concat();
    iconography_data_deal[1] = iconography_data[1]-iconography_data[0];

    const iconography_obj = {
      id: 3,
      type: '影像检查',
      title: '影像检查结果分布',
      property: this.properties._iconography,
      data: iconography_data_deal
    };

    //饼图
    const sex_data = extract_data_by_property( 'sex', this.pies.sex, this.props.data.get_information_group_by_name );

    console.log(sex_data);

    const sex_obj = {
      title: '性别比重',
      type: '性别比重',
      data: sex_data
    };

    let severity_of_disease_data = extract_data_by_property( 'severity_of_disease', this.pies.severity_of_disease, this.props.data.get_information_group_by_name );

    let normal_empty = 0;

    severity_of_disease_data.map(o=>
    {
      if(o.name === "未填写")
      {
        normal_empty += o.value;
      }
      if(o.name === "普通")
      {
        normal_empty += o.value;
      }
      return null;
    });

    severity_of_disease_data.push({name: '普通及未填写', value: normal_empty});
    for(let i = severity_of_disease_data.length-1; i >= 0; i--)
    {
      if(severity_of_disease_data[i].name === "未填写" || severity_of_disease_data[i].name === "普通")
      {
        severity_of_disease_data.splice(i, 1)
      }
    }

    console.log(severity_of_disease_data);

    const severity_of_disease_obj = {
      title: '病情程度',
      type: '病情严重程度',
      data: severity_of_disease_data
    };

    const element =
        <div id={ '_container' } className={ '' } style={ {padding: '1rem', margin: '0px'} }>

          <nav  style={ { textAlign: 'right'} } >
            <button className={ 'btn btn-info' } onClick = { this.savePDF }>生成PDF</button>
          </nav>

          <div className={ 'row' } style={ {padding: '0px', margin: '0px'} }>
            <div className={ 'col-12' }>
              <Histogram key= {0} data={ symptom_obj } />
            </div>
          </div>
          <hr/>
          <div className={ 'row' } style={ {padding: '0px', margin: '0px'} }>
            <div className={ 'col-12' }>
              <Histogram key= {1} data={ contactHistory_obj } />
            </div>
          </div>
          <hr/>
          <div className={ 'row' } style={ {padding: '0px', margin: '0px'} }>
            <div className={ 'col-12' }>
              <Histogram key= {2} data={ iconography_obj  } />
            </div>
          </div>
          <hr/>
          <div className={ 'row' } style={ {padding: '0px', margin: '0px'} }>
            <div className={ 'col-12' }>
              <PieMultiple data_sex={ sex_obj } data_severity = { severity_of_disease_obj } />
            </div>
          </div>

        </div>
    ;

    return element;
  }
}

export default EchartRouter;

/**
 * @param  属性数组  对象数组
 * @return 每个属性对应的数量
 **/
function extract_data_by_name(names, objects)
{
  let data = [];
  let getNumberObject = (names)=>
  {
    let o = {};

    if(names.length > 0)
    {
      names.map( p => o[p] = 0 )
    }

    return o;
  };

  let countObj = getNumberObject(names);

  if(names.length>0 && objects.length > 0)
  {
    for(let i = 0; i < objects.length; i++)
    {
      for(let j = 0; j < names.length; j++)
      {
        // console.log(objects[i]);

        if(objects[i][names[j]])       //对象的该属性值不为0
        {
          countObj[names[j]]++;
        }
      }
    }

    for(let p in countObj)
    {
      data.push(countObj[p]);
    }

    return data;
  }
}

/**
 * 饼图
 * @param  属性（单个）  属性所有可能值  患者数组
 * @return [{属性值：数量}]
 **/
function extract_data_by_property(property, values, objects)
{
  //提取该属性的所有值
  let props_array = [];
  if(objects.length > 0)
  {
    objects.map(o =>
    {
      props_array.push(o[property]);
      return 0;
    });
  }

  // 获取空值对象
  let empty_obj = { name: '未填写', value: props_array.filter(c => c==='').length };

  let result = [empty_obj];

  if(values.length > 0)
  {
    values.map( v=>
    {
      result.push({ name: v, value: props_array.filter(c => c===v).length });
      return 0;
    });
  }

  return get_rate(result);
}

function get_rate(array)
{
  let sum = 0, arr = [];

  if(array.length > 0)
  {
    array.map(a =>
    {
      sum += a.value;
    });

    for(let i = 0; i < array.length; i++)
    {
      let o = { name: array[i].name, value: array[i].value };
      arr.push(o);
    }
  }

  return arr;
}