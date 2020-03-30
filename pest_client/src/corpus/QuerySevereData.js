import React from 'react';
import {Query} from "react-apollo";
import {query_severe_data} from "./graphql/schema";
import QuerySeverePageIndex from "./QuerySeverePageIndex";
import SevereDataList from "./SevereDataList";



//查询30条数据
class QuerySevereData extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state =
      {
        index: 1,
      };

    this.all_page = 0;
    this.updateData = this.updateData.bind(this);
    this.control_index_component = this.control_index_component.bind(this);
  }

  updateData( newIndex )
  {
    this.setState({ index: newIndex });
  }

  control_index_component()
  {
    this.setState({ display: 'none' });
  }

  render()
  {
    let screenHeight = document.documentElement.clientHeight;
    const number = parseInt((screenHeight*0.941-0.01-25.05-38.4)/29.6);

    const _variable = { index: this.state.index, rows: number };

    const query_ele =
      <Query query={ query_severe_data } variables={ _variable } fetchPolicy={ 'cache-and-network' }>
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

          console.log(data.get_severe_patient.length);
          this.all_page = data.get_severe_patient;

          return <SevereDataList
              data={ data }
              control_index = { this.control_index_component }
              history = { this.props.history }
              div_height = { screenHeight*0.93 }
          />;
        }
      }
    </Query>;

    const ele = <div style={ {padding: '0', margin: '0', width: '100%', height: '100%'} }>
      <div style={ { padding: '0', margin: '0', width: '100%', height: screenHeight*0.93, overflow:'auto' } }>
        { query_ele }
      </div>

      <div style={ { width: '100%', paddingLeft: '25%', height: screenHeight*0.07, position: 'fixed', bottom: '0px' ,marginTop: '0.3rem '} }>
        <QuerySeverePageIndex update={ this.updateData } showNumber = { number }/>
      </div>

    </div>;

    return ele;
  }
}


export default QuerySevereData;
