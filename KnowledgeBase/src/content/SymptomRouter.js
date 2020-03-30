import React from "react";
import {HashRouter} from 'react-router-dom';
import {CacheSwitch, CacheRoute} from 'react-cache-router';
import Symptom from './Symptom';
import AllSymptom from './AllSymptom';


class SymptomRouter extends React.Component
{
  render()
  {
    return <HashRouter>
      <CacheSwitch>
        <CacheRoute path={ '/' }  exact={ true } component={ AllSymptom } />
        <CacheRoute path={ '/particulars' }  exact={ true } component={ Symptom }/>
      </CacheSwitch>
    </HashRouter>

  }
}


export default SymptomRouter;
