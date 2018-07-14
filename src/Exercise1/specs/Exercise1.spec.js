import React from 'react';
import {shallow} from 'enzyme';
import Exercise1 from '../Exercise1';

describe('Exercise1', () => {
  let component;
  let instance;

  beforeEach(() => {
    component = shallow(<Exercise1/>);
    instance = component.instance();
  });

  describe('on instance', () => {
    it('should defined state', () => {
      expect(instance.state).toEqual({});
    });
  });
  describe('Ejemplo1',() => {
    fit('deberia retornar una matriz ', () => {
      /*
      const matriz_3_3 =[
        'x','x',1
      ];*/
      const matriz_3_3 =[
        ['I','O',1],
        [1, 0, 1 ],
        [1, 0, 'S']
      ];
      const salida = instance.calculo(matriz_3_3);

      expect(salida[0].slice(0,3)).toEqual(['x','x',1]);
      expect(salida[0].slice(3,6)).toEqual([1,'x',1]);
      expect(salida[0].slice(6.9)).toEqual([1,'x','x']);

      //expect(salida[0].toEqual(['x','x',1]));
     });
  });
});
