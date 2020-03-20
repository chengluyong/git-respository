import React, { Component } from 'react';
import Pie from './Pie'


//综合
class PieMultiple extends Component
{

  render()
  {
    console.log(this.props.data_severity);

    // console.log(this.props.data_sex);

    const _tr = (d, i)=>
    {
      return  <tr key={ i }>
        <th style={ {'textOverflow': 'ellipsis', 'whiteSpace': 'nowrap', 'padding': '0.15rem 0.5rem'} } scope="row">{ d.name }</th>
        <td style={ {'textOverflow': 'ellipsis', 'whiteSpace': 'nowrap', 'padding': '0.15rem 0.5rem'} }>{  d.value }</td>
        <td style={ {'textOverflow': 'ellipsis', 'whiteSpace': 'nowrap', 'padding': '0.15rem 0.5rem'} }>{ `${ d.rate }%`}</td>
      </tr>
    };

    const ele = <div className={ 'container' } style={ { margin: "0" } }>
      <div className={ 'row' }>
        <div className={ 'col-6' }>
          <table className="table table-striped">
            <thead className="thead" style={ { background: "#483D8B", color: "white"} }>
            <tr>
              <th style={ {'textOverflow': 'ellipsis', 'whiteSpace': 'nowrap', 'padding': '0.15rem 0.5rem'} } scope="col"> { this.props.data_severity.type } </th>
              <th style={ {'textOverflow': 'ellipsis', 'whiteSpace': 'nowrap', 'padding': '0.15rem 0.5rem'} } scope="col">人数</th>
              <th style={ {'textOverflow': 'ellipsis', 'whiteSpace': 'nowrap', 'padding': '0.15rem 0.5rem'} } scope="col">比例</th>
            </tr>
            </thead>
            <tbody>
            {/*列表1*/}
            { arr_to_object(this.props.data_severity.data).map((o, i) => _tr(o, i)) }
            </tbody>
          </table>
        </div>
        <div className={ 'col-6' }>
          {/*饼图一*/}
          <Pie data = { this.props.data_severity }/>
        </div>
      </div>
    <hr/>
      <div className={ 'row' }>
        <div className={ 'col-6' }>
          <table className="table table-striped">
            <thead className="thead" style={ { background: "#483D8B", color: "white"} }>
            <tr>
              <th style={ {'textOverflow': 'ellipsis', 'whiteSpace': 'nowrap', 'padding': '0.15rem 0.5rem'} } scope="col"> { this.props.data_sex.type } </th>
              <th style={ {'textOverflow': 'ellipsis', 'whiteSpace': 'nowrap', 'padding': '0.15rem 0.5rem'} } scope="col">人数</th>
              <th style={ {'textOverflow': 'ellipsis', 'whiteSpace': 'nowrap', 'padding': '0.15rem 0.5rem'} } scope="col">比例</th>
            </tr>
            </thead>
            <tbody>
            { arr_to_object( this.props.data_sex.data).map((o, i) => _tr(o, i)) }
            </tbody>
          </table>
        </div>
        <div className={ 'col-6' }>
          <Pie data = { this.props.data_sex }/>
        </div>
      </div>
    </div>;

    return ele;
  }
}

function arr_to_object(arr)
{
  let sum = 0;

  if(arr.length > 0)
  {
    arr.map(a =>
    {
      sum+= a.value;
      return 0;
    });

    arr = arr.map(a=>
    {
      a.rate = (a.value/sum*100).toFixed(2);

      return a;
    })
  }
  return arr;
}


export default PieMultiple;
