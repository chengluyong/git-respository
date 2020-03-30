import React from 'react';
import {Query} from "react-apollo";
import {query_list_group_by_id} from "./graphql/schema";
import EchartsMain from "./EchartsMain"



//查询需要图形化所需数据
class QueryView extends React.Component
{

  render()
  {
    const ele =
      <Query query={ query_list_group_by_id } fetchPolicy={ 'cache-and-network' }>
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

            return <EchartsMain data={ data }/>;
          }
        }
      </Query>;

    return ele;
  }
}


export default QueryView;
