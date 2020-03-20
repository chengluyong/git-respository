import React from 'react';

import {Query} from "react-apollo";
import {query_list} from "./graphql/schema";
import QueryPageIndex from "./QueryPageIndex";
import DataList from "./DataList";


//查询30条数据
class QueryData extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state =
      {
        index: 1,
      };

    this.updateData = this.updateData.bind(this);
    this.control_index_component = this.control_index_component.bind(this);
  }

  updateData( newIndex )
  {
    this.setState({ index: newIndex }, ()=>{ console.log('finish') });
  }

  control_index_component()
  {
    this.setState({ display: 'none' });
  }

  render()
  {
    let screenHeight = document.documentElement.clientHeight;
    console.log(screenHeight);

    const _variable = { index: this.state.index, rows: 20 };

    const query_ele =
      <Query query={ query_list } variables={ _variable } fetchPolicy={ 'cache-and-network' }>
      {
        ({loading, error, data,  subscribeToMore, networkStatus}) =>
        {
          if (loading || networkStatus === 4)
          {
            return <div>加载中</div>;
          }

          if (error)
          {
            return <div>错误</div>;
          }

          return <DataList data={ data } control_index = { this.control_index_component }/>;
        }
      }
    </Query>;

    const ele = <
      div style={ {padding: '0', margin: '0', width: '100%', height: '100%'} }>
      <div style={ { padding: '0', margin: '0', width: '100%', height: screenHeight*0.93, overflow:'auto' } }>
        { query_ele }
      </div>

      <div style={ { width: '100%', paddingLeft: '25%', height: screenHeight*0.07, position: 'fixed', bottom: '0px' ,marginTop: '0.3rem'} }>
       <QueryPageIndex update={ this.updateData }/>
      </div>

    </div>;

    return ele;
  }
}


export default QueryData;
