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
    const parameter = { name: this.props.name };
    let screenHeight = window.innerHeight;

    const element = <Query query = { get_report } variables={ parameter } fetchPolicy={ "cache-and-network" }>
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
            <div className={ 'row' }>
              <div className={ 'col-1' } style={ {'marginTop': '0.8rem'} }>
                <button className={ 'btn btn-secondary' } onClick={ this.backClick }>返回</button>
              </div>

              <div className={ 'col-10' }>
                <h2 style={ { 'color': 'blue', 'textAlign': 'center', 'marginBottom': '1.4rem' } }>患者病例</h2>
                <textarea className="form-control is-valid"
                          readOnly={ 'readonly' }
                          style={{
                            'height': screenHeight*0.8,
                            'lineHeight': '33px',
                            'backgroundSize': 'calc(0em + 0rem) calc(0em + 0rem) ',
                            'borderColor': 'blue'
                          }} value={ msg }>
                    </textarea>
              </div>

              <div className={ 'col-1' }> </div>
            </div>
          </div>
        }
      }
    </Query>;

    return element;
  }
}

export default QueryReport;
