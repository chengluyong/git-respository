import React from 'react';

import {Query} from "react-apollo";
import { query_count} from "./graphql/schema";
import TestIndex from "./TestIndex";


//条数
class QuerySeverePageIndex extends React.Component
{
  render()
  {
    const showNumber = this.props.showNumber;

    console.log(showNumber);

    const ele =
      <Query query={ query_count } variables={ { type: "severe" } } fetchPolicy={ 'cache-and-network' }>
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
              all_page = Math.ceil(data.get_count.count/showNumber);
            }

            return <TestIndex showNumber = { all_page } allPage = { all_page } onChange = { this.props.update }/>;
          }
        }
      </Query>;

    return ele;
  }
}


export default QuerySeverePageIndex;
