import React from 'react';


/**
 * 根据showNumber allPage onChange(function（当前页）//传入当前页跟新是的函数)
 */
class TestIndex extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state=
        {
          _pageArray: get_page_array(1, this.props.showNumber, 1),    //init
          _allPage: this.props.allPage             // 总页数
        };
    this.currentPage = 1;   // 记录当前页

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.page_click = this.page_click.bind(this);
  }

  previous()
  {
    if(this.currentPage <= 1)
    {
      alert('当前是第一页');
      return 0;
    }

    this.currentPage--;
    const pageObject = get_page_index( this.currentPage, this.props.showNumber, this.props.allPage );
    const pageArray = get_page_array( pageObject.startPage, pageObject.endPage, this.currentPage );
    this.props.onChange(this.currentPage);
    this.setState({ _pageArray: pageArray })
  }

  next()
  {
    if(this.currentPage >= this.props.allPage)
    {
      alert('当前是最后一页');
      return 0;
    }

    this.currentPage++;
    const pageObject = get_page_index( this.currentPage, this.props.showNumber, this.props.allPage );
    const pageArray = get_page_array( pageObject.startPage, pageObject.endPage, this.currentPage );
    this.props.onChange(this.currentPage);
    this.setState({ _pageArray: pageArray })
  }

  page_click( index )
  {
    console.log(index);
    if(this.currentPage !== index)
    {
      this.currentPage = index;
      const pageObject = get_page_index( this.currentPage, this.props.showNumber, this.props.allPage );
      const pageArray = get_page_array( pageObject.startPage, pageObject.endPage, this.currentPage );
      this.props.onChange(this.currentPage);
      this.setState({ _pageArray: pageArray })
    }

  }

  render()
  {
    console.log(this.props.showNumber);

    const _index = (object, i)=>
    {
      return object._show?
         <button key={ i }
                 type="button"
                 className="btn btn-secondary"
                 style={ { width: '2.7rem',margin: '0 0.5rem', background: 'white', color: '#6c757d' } }
                 onClick={ ()=> this.page_click(object.value) }
         >
           { object.value }
         </button>:
         <button
             key={ i }
             type="button"
             className="btn btn-secondary"
             style={ { width: '2.7rem', margin: '0 0.2rem' } }
             onClick={ ()=> this.page_click(object.value) }
         >
           { object.value }
         </button>;
    };

    const ele =
        <div>
          <button type="button" className="btn btn-secondary btn-sm" style={ { marginRight: '25px'} }
                  onClick={ this.previous }
          >上一页</button>

          { this.state._pageArray.map( _index ) }

          <button type="button" className="btn btn-secondary btn-sm" style={ { marginLeft: '25px'} }
                  onClick={ this.next }
          >下一页</button>


        </div>
    ;

    return ele;
  }
}

/**
 * 获取页数数组
 * @param startIndex  开始页数
 * @param lastIndex   结束页数
 * @param currentPage
 * @returns {[]|*[]}  页数数组
 */
function get_page_array( startIndex, lastIndex, currentPage )
{
  if( currentPage <= lastIndex && currentPage >= startIndex)
    {
      let array = [];

      for(let i = startIndex; i <= lastIndex; i++)
      {
        if(currentPage === i)
        {
          array.push({ _show: true, value: i });
          continue;
        }
        array.push({ _show: false, value: i })
      }

      return array;
    }
  return [];
}

/**
 * 根据当前页，展示页数，总页数返回开始页，结束页
 * @param currentPage
 * @param showPage
 * @param allPage
 */
function get_page_index( currentPage, showPage, allPage )
{
 // debugger;
  if(allPage <= showPage)       // 总页数下雨等于要展示的页数
  {
    return { startPage: 1, endPage: allPage };
  }

  if( showPage%2 !== 0 )        // 展示页数为奇数
  {
    const firstPage = currentPage-((showPage-1)/2);
    if( firstPage < 1 )         // 第一页小于1
    {
      return { startPage: 1, endPage: showPage };
    }
    else
    {
      const lastPage = currentPage+((showPage-1)/2);
      if( lastPage > allPage )    // 最后一页大于总页数
      {
        debugger;
        return { startPage: allPage-showPage+1, endPage: allPage };
      }

      return { startPage: currentPage-((showPage-1)/2), endPage: currentPage+((showPage-1)/2) };
    }
  }
  else
  {
    const firstPage = currentPage-showPage/2;
    if( firstPage >= 1 )         // 第一页大于1
    {
      const lastPage = currentPage+showPage/2;
      if( lastPage > allPage )    // 最后一页大于总页数
      {
        return { startPage: allPage-showPage+1, endPage: allPage };
      }

      return { startPage: currentPage-showPage/2+1, endPage: currentPage+showPage/2 };
    }
    else
    {
      return { startPage: 1, endPage: showPage };
    }
  }

}

export default TestIndex;
