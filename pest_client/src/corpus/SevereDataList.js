//显示所有患者数据
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SevereDataList extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {};
    this.headerLine =
      ['姓名', '性别', '年龄(岁)', '主诉', '发病时间', '就诊时间', '间隔天数', '确诊时间', '血压', '发热', '体温', '咳嗽', '咳痰', '肌痛', '乏力', '呼吸困难', '腹泻', '鼻塞', '流涕', '咽痛', '糖尿病', '冠心病', '高血压', '慢阻肺', '肝病史', '肾病史', '恶性肿瘤', '风湿免疫病', '间质性肺病', '免疫抑制治疗', '肥胖', '结核病史', '吸烟', '饮酒', '武汉及周边人群接触史', '病例报告社区发热或有呼吸道症状患者接触史', '聚集性发病', '新型冠状病毒感染者接触史', '无任何接触史','潜伏期', '双肺累及', '单肺累及', '病灶肺叶定位', 'CT未见异常', '胸腔积液', '实变影', '斑片状影', '磨玻璃影', '浸润影', '条索状影', '检验日期', '白细胞计数(WBC)', '红细胞计数(RBC)', '血红蛋白(Hb或HGB)', '血小板计数(PLT)', '中性粒细胞计数(NEUT或N)', '中性粒占比率(NEUT%或N%)', '淋巴细胞计数(LY)', '淋巴细胞占比率(LY%)', '单核细胞计数(M/MONO)', '单核细胞比例(M%或MONO%)', '嗜酸性粒细胞计数E','嗜碱性粒细胞计数(B)', 'CRP(C反应蛋白)', '血沉(ESR)', 'PCT(降钙素原)', '肌酸激酶( CK-MB)', '吸氧的浓度(%)', '吸氧的流量(L/min)', '酸碱度(pH)', '氧分压(PaO2)', '血饱和度(SaO2)', '二氧化碳分压(PCO2)(单位mmHg)', '血乳酸(Lac)', '谷丙转氨酶(GPT 或ALT)', '谷草转氨酶(GOT或AST)', '病情严重程度', '备注', '']
  }

  render()
  {

    const _th = (h, i)=>
    {
      return <th scope="col" key={ i } style={ { textAlign: 'center', 'textOverflow': 'ellipsis', 'whiteSpace': 'nowrap', 'padding': '0.4rem'} }> { h } </th>;
    };

    //对象取属性值
    const _tr = (o, i)=>
    {
      //提取属性值到数组
      let values = [];
      for(let p in o)
      {
        values.push(o[p]);
      }

      const _property =(v, i)=>
      {
        // 最后一列添加详情按钮
        if(i === 0)
        {
          const path = { pathname: '/report', state: { name: o.name  } };

          return <td
              style={ { textAlign: 'center', 'textOverflow': 'ellipsis', 'whiteSpace': 'nowrap', 'padding': '0 0.5rem'} } key={ i }>
            <Link to={ path } onClick={ ()=> this.props.history.push(path) } replace style={ { padding: '0.15rem 0.5rem', color: '#17a2b8' } } >
              { v }
            </Link>
          </td>
        }

        if(i === 78)
        {
          const path = { pathname: '/report', state: { name: o.name  } };

          return <td
          style={ { textAlign: 'center', 'textOverflow': 'ellipsis', 'whiteSpace': 'nowrap', 'padding': '0 0.5rem'} } key={ i }>
            <Link to={ path } onClick={ ()=> this.props.history.push(path) } replace>
              <span style={ { padding: '0.15rem 0.5rem', color: '#17a2b8' } } >详情</span>
            </Link>
            </td>
        }
        return <td
            style={ { textAlign: 'center', 'textOverflow': 'ellipsis', 'whiteSpace': 'nowrap', 'padding': '0.15rem 0.5rem'} } key={ i }>
            { v }
        </td>

      };

    //  console.log(values.length);

      let ele = values.map( (v, i)=> _property(v, i) );

      return  <tr key={ i }>{ ele }</tr>;
    };

    const ele = <div className={ '' } style={ {padding: '0px', margin: '0px', overflow: 'scroll', width: '100%', height: '100%'} }>
      <div className={ 'row' }  style={ { margin: '0px'} } >
        <div className={ 'col-12' } style={ {padding: '0px', margin: '0px'} }>

          <table className="table table-striped">
            <thead  style={ { background: "#17a2b8", color: "white"} }>
              <tr>
                { this.headerLine.map((h, i)=> _th(h, i)) }
              </tr>
            </thead>
            <tbody  style={ { 'height': '5rem' } }>
              { this.props.data.get_severe_patient.map( (o, i)=> _tr(o, i) )}
            </tbody>
          </table>

        </div>
      </div>

    </div>;

    return ele;
  }
}


export default SevereDataList;
