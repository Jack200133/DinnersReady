import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LogIn from '../../views/LogIn.js';

const fetch1 = ()=> Promise.resolve({
      
    json: ()=> Promise.resolve([
      {
          "completado": true,
      }
  ]
    )
  })

describe('Iniciar sesion correctamente', () => {    
    global.fetch = jest.fn()
    global.fetch.mockReturnValueOnce(fetch1()).mockReturnValueOnce(fetch1()).mockReturnValueOnce(fetch1())
    beforeEach(() => {
      fetch.mockClear();
    });
    it('Logra iniciar sesion correctamente', async () => {
        await (async () => {
        component =  render(<LogIn />)
        const button =  component.getByTestId("logInButton");
        fireEvent(button, 'press')

        expect(await component.queryAllByTestId("texto_dentro").length).toEqual(0);
    })
      
    })
  })