import React from 'react';
import { act } from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
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
      component = await waitFor(() =>
        render(<LogIn />)
      )
      await act( async () => {
        const button =  component.getByTestId("logInButton");
        fireEvent(button, 'press')

        expect(await component.queryAllByTestId("texto_dentro").length).toEqual(0);
      })
      /*await (async () => {
      component =  render(<LogIn />)
      })*/
      
    })
  })