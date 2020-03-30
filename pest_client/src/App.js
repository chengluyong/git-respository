import React from 'react';

import {HashRouter} from 'react-router-dom';
import {CacheSwitch, CacheRoute} from 'react-cache-router';
import QueryReport from "./corpus/QueryReport";
import QueryData from "./corpus/QueryData";
import QuerySevereData from "./corpus/QuerySevereData";
import QueryView from "./corpus/QueryView";
import Link from "react-router-dom/Link";


class App extends React.Component
{
  render()
  {
    return  <HashRouter >
      <div  className="row" style={ { margin: '0', padding: '0px'} }>

        <div  className="col-2" style={ { margin: '0', padding: '0px'} }>
          <div style={ { margin: 0, padding: '0px'} }>
            <div className="list-group" role="tablist">
              <Link to={ '/' }>
                <button className={'list-group-item'} style={ {'width': '100%', color: '', borderRadius: '0', backgroundColor: '\t#F3F3FA'} }>数据视图</button>
              </Link>
              <Link to={ '/chart' }>
                <button className={'list-group-item '} style={ {'width': '100%', color: '', borderRadius: '0', backgroundColor: '\t#F3F3FA'} }>统计分析</button>
              </Link>
              <Link to={ '/severe' }>
                <button className={'list-group-item '} style={ {'width': '100%', color: '', borderRadius: '0', backgroundColor: '\t#F3F3FA'} }>重症数据</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-10" style={ {  padding: '0px',background: '#F8F8FF' } }>
          <CacheSwitch>

              <CacheRoute  path={ '/' } exact ={ true } component = { QueryData }/>

              <CacheRoute  path={ '/chart' } exact ={ true } component = { QueryView  }/>

              <CacheRoute  path={ '/report' } exact={ true } component={ QueryReport } />

              <CacheRoute  path={ '/severe' } exact={ true } component={ QuerySevereData } />

            </CacheSwitch>
        </div>
      </div>
    </HashRouter >;
  }
}


export default App;
