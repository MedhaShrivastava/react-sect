import React,{Components} from 'react'
import Card from'./CardUI';
 class Cards extends React.Component {
  render() {
    return(
<div className="container-fluid d-flex justify-content-center">
      <div className="row">
      <div className="col-md-4">
      <Card />
      </div>
      <div className="col-md-4">
      <Card />
      </div>
      <div className="col-md-4">
      <Card />
      </div>
     
      </div>
      </div>
    ) ;
    }
     
}

export default Cards;