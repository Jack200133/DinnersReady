import React, { useEffect } from 'react';
import renderer, { act } from 'react-test-renderer';
import {render, screen, fireEvent} from '@testing-library/react-native';
import PubItem from './index.js';


describe('Receta facil', () => {    
    it('Muestra una rececta facil', () => {
        component =  render(<PubItem 
                      id={1} key={1}
                      image={"https://s1.eestatic.com/2015/05/11/cocinillas/cocinillas_32506750_116175093_1706x960.jpg"} 
                      color ={"red"} 
                      dificultad={"Fácil"} 
                      saved={1}
                      cH={null} 
                      NameRecipe={"Sushi"} 
                      stars ={3} 
                      hash={'#love'} 
                      desc={"descripcion"} 
                      autor={"Sebastian"} 
                      navigation = {null}
        />)
        expect(component.queryAllByTestId("sarten").length).toEqual(1);
      
    })
  })


  describe('Receta Medio', () => {    
    it('Muestra una rececta Medio', () => {
        component =  render(<PubItem 
                      id={1} key={1}
                      image={"https://s1.eestatic.com/2015/05/11/cocinillas/cocinillas_32506750_116175093_1706x960.jpg"} 
                      color ={"red"} 
                      dificultad={"Medio"} 
                      saved={1}
                      cH={null} 
                      NameRecipe={"Sushi"} 
                      stars ={3} 
                      hash={'#love'} 
                      desc={"descripcion"} 
                      autor={"Sebastian"} 
                      navigation = {null}
        />)
        expect(component.queryAllByTestId("sarten").length).toEqual(2);
      
    })
  })


  describe('Receta Difícil', () => {    
    it('Muestra una rececta Difícil', () => {
        component =  render(<PubItem 
                      id={1} key={1}
                      image={"https://s1.eestatic.com/2015/05/11/cocinillas/cocinillas_32506750_116175093_1706x960.jpg"} 
                      color ={"red"} 
                      dificultad={"Difícil"} 
                      saved={1}
                      cH={null} 
                      NameRecipe={"Sushi"} 
                      stars ={3} 
                      hash={'#love'} 
                      desc={"descripcion"} 
                      autor={"Sebastian"} 
                      navigation = {null}
        />)
        expect(component.queryAllByTestId("sarten").length).toEqual(3);
      
    })
  })


  describe('Receta Error', () => {    
    it('Muestra una rececta Error', () => {
        component =  render(<PubItem 
                      id={1} key={1}
                      image={"https://s1.eestatic.com/2015/05/11/cocinillas/cocinillas_32506750_116175093_1706x960.jpg"} 
                      color ={"red"} 
                      dificultad={"Error"} 
                      saved={1}
                      cH={null} 
                      NameRecipe={"Sushi"} 
                      stars ={3} 
                      hash={'#love'} 
                      desc={"descripcion"} 
                      autor={"Sebastian"} 
                      navigation = {null}
        />)
        expect(component.queryAllByTestId("sarten").length).toEqual(0);
      
    })
  })