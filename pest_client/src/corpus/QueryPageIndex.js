import React from 'react';

import {Query} from "react-apollo";
import { query_count} from "./graphql/schema";
import PageIndex from "./PageIndex";
import StickyHeadTable from "./TestIndex";


//条数
class QueryPageIndex extends React.Component
{
  render()
  {
    console.log('QueryPageIndex-render');

    const ele =
      <Query query={ query_count }  fetchPolicy={ 'cache-and-network' }>
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

            let all_page = 1;

            if(data.get_count)
            {
              all_page = Math.ceil(data.get_count.count/20);
            }

            return <PageIndex update={ this.props.update } all_page = { all_page } />;
          }
        }
      </Query>;

    return ele;
  }
}


export default QueryPageIndex;
