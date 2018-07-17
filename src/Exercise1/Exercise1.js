import React, {Component} from 'react';

export class Exercise1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  calculo = (n) => {
    //console.log('matriz:: ', matriz);
    var m =[
      ['I',0, 1],
      [1, 0, 1 ],
      [1, 0, 'S']
    ];
    for (var i = 0; i < m.length; i++) {
      for (var j = 0; j < m.length; j++) {
        if (m[i][j]=='I' || m[i][j]=='S') {
          m[i][j]='x';
        }
        if (m[i][j]==0) {
          m[i][j]='x';
        }
      }
    }
    var n =[];
    for (var i = 0; i < m.length; i++) {
      n = n.concat(m[i]);
    }
    //var n=[['x','x',1, 1, 'x',1, 1, 'x','x']];
    return [n];
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
