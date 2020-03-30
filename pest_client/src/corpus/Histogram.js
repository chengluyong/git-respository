import React, { Component } from 'react';

import ReactEcharts from 'echarts-for-react';


class Histogram extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {}
  }

  render()
  {
    //x轴字体倾斜度
    let x_show = {
      rotate: 40
    };

    if(this.props.data.id === 2)
    {
      x_show =
        {
          formatter: function(value)
          {
            value = value.replace(/(.{2})/g,'$1 ');

            return value.split(" ").join("\n");
          }
        }
    }

    const option =
      {
        title:
        {
          text: this.props.data.title,
          textStyle:
            {
              color: '#17a2b8'
            },
          x: 'center',
        },
        tooltip: {},
        xAxis: {
          data: this.props.data.property,
          axisLabel:
            x_show

        },
        yAxis: {},
        series: [{
          name: this.props.data.title,
          type: 'bar',
          barWidth: 20,
          itemStyle: {
            normal:{
              color: '#17a2b8',
              label: {
                show: true,
                position: 'top'
              }
            }
          },
          data: this.props.data.data
        }],
        grid: {
          bottom: '30%'
        }
      };

    const _tr = (d, i)=>
    {
        return  <tr key={ i }>
          <th style={ {'textOverflow': 'ellipsis', 'whiteSpace': 'nowrap', 'padding': '0.15rem 0.5rem', color: '#6c757d'} } scope="row">{ d.name }</th>
          <td style={ {'textOverflow': 'ellipsis', 'whiteSpace': 'nowrap', 'padding': '0.15rem 0.5rem'} }>{ d.count }</td>
          <td style={ {'textOverflow': 'ellipsis', 'whiteSpace': 'nowrap', 'padding': '0.15rem 0.5rem'} }>{ d.rate }</td>
        </tr>
    };

    const ele = <div className={ 'container' } style={ { margin: "0" } }>
      <div className={ 'row' }>
        <div className={ 'col-6' }>

          <table className="table table-striped">
            <thead className="thead" style={ { color: "white"} }>
            <tr style={ { background: '#17a2b8' } }>
              <th style={ {'textOverflow': 'ellipsis', 'whiteSpace': 'nowrap', 'padding': '0.15rem 0.5rem'} } scope="col"> { this.props.data.type } </th>
              <th style={ {'textOverflow': 'ellipsis', 'whiteSpace': 'nowrap', 'padding': '0.15rem 0.5rem'} } scope="col">人数</th>
              <th style={ {'textOverflow': 'ellipsis', 'whiteSpace': 'nowrap', 'padding': '0.15rem 0.5rem'} } scope="col">比例</th>
            </tr>
            </thead>
            <tbody>
              { arr_to_object(this.props.data.property, this.props.data.data).map((o, i) => _tr(o, i)) }
            </tbody>
          </table>

        </div>
        <div className={ 'col-6' }>
          <ReactEcharts style={ { height: "80%", width: '90%'} } option = {option} />
        </div>
      </div>
  </div>;

    return ele;
  }
}

//数据数组转化成object
function arr_to_object(arr1, arr2)
{
  let result = [], sum = 0;

  arr2.map(n => { sum += n; return 0; });

  if(arr1.length === arr2.length)
  {
    for( let i = 0; i <= arr1.length-1; i++ )
    {
      result.push({ name: arr1[i], count: arr2[i], rate: (arr2[i]/sum*100).toFixed(2)+"%" })
    }
  }
  result.push({ name: '总人数', count: sum, rate: '100%' });

  return result;
}


export default Histogram;
