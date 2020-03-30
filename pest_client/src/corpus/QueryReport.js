import React, { Component } from 'react';
import { Query } from "react-apollo";
import { get_report } from "./graphql/schema";
import { createBrowserHistory } from 'history';


class QueryReport extends Component
{
  constructor(props) {
    super(props);
    this.backClick = this.backClick.bind(this);
  }

  backClick()
  {
    const history = createBrowserHistory();
    history.goBack();
  }

  render()
  {
    console.log(this.props.location.state);

    let screenHeight = window.innerHeight;
    console.log(screenHeight);
    let element =  <div className={ 'container' } style={ { height: window.innerHeight } }>

      <nav  style={ { textAlign: 'right', paddingTop: '0.5rem'} } >
        <button className={ 'btn btn-info' } onClick={ this.backClick }>返回</button>
      </nav>

      <div className={ 'row' } >

        <div className={ 'col-1' }>
        </div>

        <div className={ 'col-10' }>
          <h2 style={ { 'color': '#17a2b8', 'textAlign': 'center', 'margin': '1rem 0.5rem' } }>患者病例</h2>
          <textarea className="form-control is-valid"
                    readOnly={ 'readonly' }
                    style={{
                      'height': screenHeight*0.8,
                      'lineHeight': '33px',
                      'backgroundSize': 'calc(0em + 0rem) calc(0em + 0rem) ',
                      'background': '#F8F8FF'
                    }} value={ '空' }>
                    </textarea>
        </div>

        <div className={ 'col-1' }> </div>
      </div>
    </div>;

    if( this.props.location && this.props.location.state )
    {
      const parameter = { name: this.props.location.state.name };


      element = <Query query = { get_report } variables={ parameter } fetchPolicy={ "cache-and-network" }>
        {
          ({err, data, loading}) =>
          {
            if(loading)
              return <div>加载中</div>;

            if(err)
              return <div>错误</div>;

            let msg = '无数据';

            if(data.get_report.report)
            {
              msg = data.get_report.report.replace(/\n\n/g, "\r\n\t");
            }
            return <div className={ 'container' }>

              <nav  style={ { textAlign: 'right'} } >
                <button className={ 'btn btn-info' } onClick={ this.backClick }>返回</button>
              </nav>

              <div className={ 'row' }>

                <div className={ 'col-1' }>
                </div>

                <div className={ 'col-10' }>
                  <h2 style={ { 'color': '#17a2b8', 'textAlign': 'center', 'margin': '1rem 0.5rem' } }>患者病例</h2>
                  <textarea className="form-control is-valid"
                            readOnly={ 'readonly' }
                            style={{
                              'height': screenHeight*0.8,
                              'lineHeight': '33px',
                              'backgroundSize': 'calc(0em + 0rem) calc(0em + 0rem) ',
                              'background': 'white'
                            }} value={ msg }>
                    </textarea>
                </div>

                <div className={ 'col-1' }> </div>
              </div>
            </div>
          }
        }
      </Query>
    }
   ;

    return element;
  }
}

export default QueryReport;
