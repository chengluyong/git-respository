import React from 'react';



//查询30条数据
class PageIndex extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state=
      {
        currentPage: 1,
        allPage: this.props.all_page
      };

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }
  previous()
  {
    if(this.state.currentPage === 1)
    {
      alert('当前是第一页');
      return 0;
    }

    let newPage = this.state.currentPage-1;
    this.props.update(newPage);

    this.setState({ currentPage: newPage });
  }

  next()
  {
    if(this.state.currentPage === this.state.allPage)
    {
      alert('当前是最后一页');
      return 0;
    }
    let newPage = this.state.currentPage+1;

    this.props.update(newPage);
    this.setState({ currentPage: newPage });
  }

  render()
  {
    console.log('page_Index_render');

    const ele =
        <div>
        <button type="button" className="btn btn-secondary btn-sm" style={ { marginRight: '25px'} }
          onClick={ this.previous }
        >上一页</button>

        <span style={{ margin: '5px', color: 'blue' }}>第{ this.state.currentPage }页</span>
        <span style={{ margin: '5px', color: 'blue' }}>共{ this.state.allPage }页</span>

        <button type="button" className="btn btn-secondary btn-sm" style={ { marginLeft: '25px'} }
         onClick={ this.next }
        >下一页</button>


      </div>
    ;

    return ele;
  }
}



export default PageIndex;
