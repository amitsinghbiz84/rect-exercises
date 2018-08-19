import React, { Component } from 'react'

export default class List extends Component {
  constructor(props){
      super(props)
      this.state ={
          data:props
      }
  }
  render() {
    return (
        <ul className="list-unstyled list-group">
        {
            this.props.data.Products.map((element) => <li className="list-item mb-5 border" key={element.id}>
                <div className="row p-3">
                    <div className="col-sm-5 col-md-4">
                        <img src={element.thumbImg}/>
                    </div>   
                    <div className="col-sm-7 col-md-8">
                        <h2>{element.name}</h2>
                        <p>{element.des}</p>
                    </div>
                </div>
                
            </li>)
        }
    </ul>
    )
  }
}
