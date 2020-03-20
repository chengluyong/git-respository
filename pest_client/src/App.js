import React from 'react';

import { BrowserRouter, Route } from "react-router-dom";
import QueryReport from "./corpus/QueryReport";
import QueryData from "./corpus/QueryData";
import QueryView from "./corpus/QueryView";
import Link from "react-router-dom/Link";


class App extends React.Component
{
  render()
  {
    return  <BrowserRouter>
          <div  className="row" style={ { margin: '0', padding: '0px'} }>

            <div  className="col-2" style={ { margin: '0', padding: '0px'} }>
              <div style={ { margin: 0, padding: '0px'} }>
                  <div className="list-group" role="tablist">
                    <Link to={ '/data' }>
                      <button className={'list-group-item'} style={ {'width': '100%', color: '', borderRadius: '0', backgroundColor: '\t#F3F3FA'} }>数据视图</button>
                    </Link>
                    <Link to={ '/chart' }>
                      <button className={'list-group-item '} style={ {'width': '100%', color: '', borderRadius: '0', backgroundColor: '\t#F3F3FA'} }>统计分析</button>
                    </Link>
                </div>
              </div>
            </div>

            <div className="col-10" style={ {  padding: '0px'} }>
              <Route path={ '/' } exact ={ true } component = { ()=> <QueryData /> }/>

              <Route path={ '/data' } exact ={ true } component = { ()=> <QueryData /> }/>

              <Route path={ '/chart' } exact ={ true } component = { ()=> <QueryView /> }/>

              <Route path={ '/report/:name' } exact={ true } component=
                  {
                    ({ match })=> <QueryReport name = { match.params.name }/>
                  } />
            </div>
          </div>
      </BrowserRouter>;
  }
}


export default App;
