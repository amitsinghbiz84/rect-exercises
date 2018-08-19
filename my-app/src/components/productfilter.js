import React, { Component } from 'react';
import List from './filterlist';

export default class ProductFilter extends Component {
  constructor(props){
    super(props)
    this.state = {
      "Products" : [
        {
          "id": "01",
          "type": "men",
          "des": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
          "name": "product name 1",
          "thumbImg": "https://placeimg.com/250/250/any"
        },
        {
          "id": "02",
          "type": "men",
          "des": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
          "name": "product name 2",
          "thumbImg": "https://placeimg.com/250/250/any"
        },
        {
          "id": "03",
          "type": "men",
          "des": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
          "name": "product name 3",
          "thumbImg": "https://placeimg.com/250/250/any"
        }
      ]
      }
  }
  submit(){
      let updatedList =  this.state.Products;
      let searcheyword = this.state.text;
      updatedList = updatedList.filter(function(item) {
        return item.name.toLowerCase().search(searcheyword) !== -1;
      });
      this.setState({Products: updatedList});
       
    }
  
  render() {
    return (
      <div className="container">
        <div className="row pt-5 pb-5 mx-auto h-100">
          <div className="col-8">
            <label className="d-none">Filter</label>
            <input type="text" className="form-control" placeholder="Enter Text" onChange={event=> this.setState({text:event.target.value})}/>
          </div>
          <div className="col-4">
              <button className="btn btn-success" onClick={()=>this.submit()} >             
                  Submit 
              </button>
          </div>

                         
               
        </div>
        <List data={this.state} />
      </div>
    )
  }
}
