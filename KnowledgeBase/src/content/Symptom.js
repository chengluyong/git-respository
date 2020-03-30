import React from "react";



class Symptom extends React.Component
{
  constructor()
  {
    super();
    this.state=
        {
          drug:  ''
        };
  }

  render()
  {
    let result = this.props.location.state;

    let element = <div>无数据</div>;

    if(result)
    {
      const item = (p, i)=>
      {
        return <div key={ i }>
          <span style={ { color: '#5F9EA0' } } dangerouslySetInnerHTML={ { __html: p.itemTitle } }></span>
          <div className={ 'content-text' } dangerouslySetInnerHTML={ { __html: p.itemContent } }></div>
        </div>
      };

      element = <div className={ 'container' }>
        <div className={ 'row' }>
            <div className={ 'col-12' }>
              <h4 dangerouslySetInnerHTML={ { __html: result.showName } }></h4>
              { result.items.map((d, i) => item(d, i)) }
            </div>
        </div>
      </div>
    }

    return element;
  }
}

export default Symptom;