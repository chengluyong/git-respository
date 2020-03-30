import React from "react";
import { Link } from 'react-router-dom';
import $ from 'jquery';
import configure from '../configure'


class AllSymptom extends React.Component
{
  constructor()
  {
    super();
    this.state=
        {
          _render: false,
        };
    this.select = this.select.bind(this);
    this.keypress = this.keypress.bind(this);
    this.content_element = <div> </div>;
  }

  keypress(e)
  {
    if(e.which !== 13 ) return 0;
    this.select();
  }

  select()
  {
    const _input = $("#_input")[0].value.trim();

    const options =
    {
      ContentType: 'application/x-www-form-urlencoded',
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer' // no-referrer, *client
    };

    if(!_input)
    {
      return;
    }

    const url = `http://${configure.ip}:${configure.port}/search/search?queryText='${ _input }'`;

    fetch(url, options)
        .then(r=> { return r.json() })
        .then(r =>
        {
        //  console.log(r.info);

          if( r.info.dataType === 'url' )   //返回值是跳转链接
          {
            const path =  `http://${ configure.ip }:${ configure.port_question }` + r.info.url;
            this.content_element = <div style={ { color: 'blue', fontSize: '1.1rem' } }>
              <a href={ path }  target="view_window">为了准确推荐有关{ _input }的信息，请点击到智能问诊机器人</a>
            </div>;
            this.setState({ _render: !this.state._render });
            return;
          }

          if( r.info.dataType === 'data' )
          {
            const drug_ele = (drug, i)=>    // 单个药物
            {
              const _item = (p, i) =>   // 所有属性
              {
                return <div key={ i } style={ { fontSize: '0.9rem' } }>
                  <div dangerouslySetInnerHTML={ { __html: p.itemContent } }></div>
                </div>
              };

              const path = { pathname: '/particulars', state: drug };

              if(!drug || !drug.items || drug.items.length <= 0)
              {
                return <div key={ i } style={ { color: 'blue', fontSize: '1.1rem' } } dangerouslySetInnerHTML={ { __html: drug.showName } }></div>;
              }

              return <div key={ i } style={ { padding: '  0.7rem 0' } } >

                <Link to={ path } onClick={ ()=> this.props.history.push(path) } replace>
                  <div style={ { color: 'blue', fontSize: '1.1rem' } } dangerouslySetInnerHTML={ { __html: drug.showName } }></div>
                </Link>

                <div className={ 'content-text' }>
                  { drug.items.slice(0, 1).map((item, i) => _item(item, i)) }
                </div>

              </div>
            };

            if(r.info.results && r.info.results.length > 0)
            {
              this.content_element = r.info.results.map( (d, i) => drug_ele(d, i) );
              this.setState({ _render: !this.state._render });
              return;
            }
            else
            {
              this.content_element = <div>无数据</div>;
              this.setState({ _render: !this.state._render });
              return;
            }
          }
        })
        .catch(e =>
        {
          this.content_element = <div>错误</div>;
          this.setState({ _render: !this.state._render });
          return;
        });

    return 0;
  }

  render()
  {
    const element = <div className={ 'container' }>

      <div className={ 'row' }>

        <div className={'col-12' }>
          <div className="input-group mb-3">
            <input id={ '_input' } type="text" className="form-control"
                    aria-describedby="basic-addon2" onKeyPress={ this.keypress }/>
              <div className="input-group-append">
                <button className={ 'btn btn-info' } onClick={ this.select }>搜索</button>
              </div>
          </div>
        </div>

      </div>

      <div className={ 'row' }  style={ { padding: '0.2rem' } } >

        <div className={'col-12' }>
          { this.content_element }
        </div>

      </div>
    </div>;

    return element;
  }
}

export default AllSymptom;
