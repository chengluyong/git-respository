import React, { Component } from 'react';

import ReactEcharts from 'echarts-for-react';



class Pie extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {}
  }

  render()
  {
    console.log(this.props.data);

    const option = {
        title: {
          text: this.props.data.title,
          textStyle:
            {
              color: '#17a2b8'
            },
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
          {
            name: this.props.data.title,
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data:  this.props.data.data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

    return <div><ReactEcharts option = {option}/></div>;
  }
}


export default Pie;
