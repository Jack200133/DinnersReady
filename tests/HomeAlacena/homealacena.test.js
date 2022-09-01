import React, { useEffect } from 'react';
import renderer, { act } from 'react-test-renderer';
import {render, screen, fireEvent} from '@testing-library/react-native';
import HomeAlacena from '../../views/HomeAlacena.js';

let component
let hola

const fetch1 = ()=> Promise.resolve({
      
  json: ()=> Promise.resolve([
    {
        "id": 1,
        "nombre": "Pollo con Loroco",
        "descripcion": "Delicioso Pollo cocido bañado en salsa de loroco con crema.",
        "dificultad": "Medio",
        "estrellas": 4,
        "autor": "daniel14",
        "imagen": "https://dinnersready.s3.us-east-2.amazonaws.com/recipe/pollo-loroco.jpg"
    }
]
  )
})

const fetch2 = ()=> Promise.resolve({
      
  json: () => Promise.resolve({
    "final": [
        1
    ]
}),
})

const fetch3 = ()=> Promise.resolve({
      
  json: ()=> Promise.resolve([
    {
        "id": 1,
        "nombre": "Pollo con Loroco",
        "descripcion": "Delicioso Pollo cocido bañado en salsa de loroco con crema.",
        "dificultad": "Medio",
        "estrellas": 4,
        "autor": "daniel14",
        "imagen": "https://dinnersready.s3.us-east-2.amazonaws.com/recipe/pollo-loroco.jpg"
    }
])
})



describe('<App />', () => {
  //beforeEach(() => {
    hola =[{
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

    global.fetch = jest.fn()
    global.fetch.mockReturnValueOnce(fetch2()).mockReturnValueOnce(fetch1()).mockReturnValueOnce(fetch3())
    beforeEach(() => {
      fetch.mockClear();
    });
    
  //})
  
  it('it shows right recipe', async () => {
    await (async () => {
      component = await render(<HomeAlacena />)
      expect( await component.queryAllByTestId("HomeAlacena").length).toEqual(1);
      expect( await component.queryAllByTestId("receta_contenedor").length).toEqual(1);
      expect( await component.queryAllByTestId("receta").length).toEqual(1);
    })
  })
})