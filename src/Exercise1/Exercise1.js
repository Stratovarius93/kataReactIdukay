import React, {Component} from 'react';

export class Exercise1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  calculo = (n) => {
    //console.log('matriz:: ', matriz);
    var matriz_3_3 =[
      ['I','O',1],
      [1, 0, 1 ],
      [1, 0, 'S']
    ];
    var n=[['x','x',1, 1, 'x',1, 1, 'x','x']];
    //var n=[[1,'x',1]];
    for (var i = 0; i < n.length; i++) {
      return (n);
    }
    //return (n);
  }
  render() {
    return (
      <div className="container">
        Exercise1 page
      </div>
    );
  }
}

export default Exercise1;
