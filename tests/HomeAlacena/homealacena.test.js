import React, { useEffect } from 'react';
import renderer, { act } from 'react-test-renderer';
import {render, screen, fireEvent, waitFor} from '@testing-library/react-native';
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


const fetch4 = ()=> Promise.resolve({
      
  json: ()=> Promise.resolve([
    {
        "id": 2,
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

describe('not change saved', () => {

  global.fetch = jest.fn()
  global.fetch.mockReturnValueOnce(fetch2()).mockReturnValueOnce(fetch1()).mockReturnValueOnce(fetch4()).mockReturnValueOnce(fetch2()).mockReturnValueOnce(fetch1()).mockReturnValueOnce(fetch4())
  beforeEach(() => {
    fetch.mockClear();
  });
  
//})

it('it changes saved state', async () => {
  component = await waitFor(() =>
        render(<HomeAlacena />)
      )
  await act( async () => {
    const input2 = await component.getByTestId('pub')
    fireEvent(input2, 'press')
    expect(component.queryAllByTestId("pub").length).toEqual(1);
  })
})
})