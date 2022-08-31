import React, { useEffect } from 'react';
import renderer from 'react-test-renderer';
import {render, screen, fireEvent} from '@testing-library/react-native';
import App from '../../views/HomeAlacena.js';

let component

describe('<App />', () => {
  beforeEach(() => {
    component = render(<App />)
    
    global.fetch = jest.fn(()=> Promise.resolve({
      
      json: ()=> Promise.resolve([{
        "id":6,"nombre":"Pinchos de Camarones",
        "descripcion":"Pinchos de Camarones al Ajillo al estilo Español",
        "dificultad":"Fácil",
        "estrellas":5,"autor":"avila",
        "imagen":"https://dinnersready.s3.us-east-2.amazonaws.com/recipe/pinchos-camaron.png"},
        
        {"id":7,"nombre":"Ramen",
        "descripcion":"Sopa de ramen de cerdo",
        "dificultad":"Medio","estrellas":5,
        "autor":"jack",
        "imagen":"https://dinnersready.s3.us-east-2.amazonaws.com/recipe/ramen.png"},
        
        {"id":4,"nombre":"Brochetas de camarón",
        "descripcion":"Camarones cocidas en pinchos a las brasas",
        "dificultad":"Difícil",
        "estrellas":5,
        "autor":"Aristondo01",
        "imagen":"https://dinnersready.s3.us-east-2.amazonaws.com/recipe/brochetas-camaron.png"}]
      )
    }))

    let hola =[{
        "id":6,"nombre":"Pinchos de Camarones",
        "descripcion":"Pinchos de Camarones al Ajillo al estilo Español",
        "dificultad":"Fácil",
        "estrellas":5,"autor":"avila",
        "imagen":"https://dinnersready.s3.us-east-2.amazonaws.com/recipe/pinchos-camaron.png"},
        
        {"id":7,"nombre":"Ramen",
        "descripcion":"Sopa de ramen de cerdo",
        "dificultad":"Medio","estrellas":5,
        "autor":"jack",
        "imagen":"https://dinnersready.s3.us-east-2.amazonaws.com/recipe/ramen.png"},
        
        {"id":4,"nombre":"Brochetas de camarón",
        "descripcion":"Camarones cocidas en pinchos a las brasas",
        "dificultad":"Difícil",
        "estrellas":5,
        "autor":"Aristondo01",
        "imagen":"https://dinnersready.s3.us-east-2.amazonaws.com/recipe/brochetas-camaron.png"}]

    
  })
  
  it('it shows right recipe', async () => {
    
    component.

    expect( await component.queryAllByTestId("receta_contenedor").length).toEqual(1);
    expect( await component.queryAllByTestId("receta").length).toEqual(3);
  })
})