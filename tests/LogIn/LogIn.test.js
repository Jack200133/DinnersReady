import React from 'react';
import { act } from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import LogIn from '../../views/LogIn.js';

const fetch1 = ()=> Promise.resolve({
      
    json: ()=> Promise.resolve(
      {
          "completado": true,
      }
    )
  })

const fetch2 = ()=> Promise.resolve({
      
    json: ()=> Promise.resolve(
      {
          "completado": false,
      }
    )
  })

describe('Iniciar sesion correctamente', () => {    
    global.fetch = jest.fn()
    global.fetch.mockReturnValueOnce(fetch1()).mockReturnValueOnce(fetch2())
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
      
    })

    it('No inicia sesion correctamente', async () => {
      component = await waitFor(() =>
        render(<LogIn />)
      )
      await act( async () => {
        const button =  component.getByTestId("logInButton");
        fireEvent(button, 'press')

        expect(await component.queryAllByTestId("texto_dentro").length).toEqual(0);
      })
      
    })
  })


  describe('Iniciar sesion correctamente', () => {    
    global.fetch = jest.fn()
    global.fetch.mockReturnValueOnce(fetch1()).mockReturnValueOnce(fetch2())
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
      
    })

    it('No inicia sesion correctamente', async () => {
      component = await waitFor(() =>
        render(<LogIn />)
      )
      await act( async () => {
        const button =  component.getByTestId("logInButton");
        fireEvent(button, 'press')

        expect(await component.queryAllByTestId("texto_dentro").length).toEqual(0);
      })
      
    })
  })


  describe('Llena los inputs correctamente', () => {    
    it('Llena el correo bien', async () => {
      const component = render(<LogIn />)
      const input = component.getByTestId('userInput')
      fireEvent(input, 'onChangeText', 'ab')
      expect(component.queryAllByTestId("userInput").length).toEqual(1);
    })

    it('Llena el correo bien', async () => {
      const component = render(<LogIn />)
      const input = component.getByTestId('passwordInput')
      fireEvent(input, 'onChangeText', 'ab')
      expect(component.queryAllByTestId("passwordInput").length).toEqual(1);
    })
  })

  describe('Navigation', () => {    
    it('Navigates', async () => {
      const navigation = {
        navigate: () => {return 0}
      }
      
      const component = render(<LogIn navigation={navigation}/>)
      const button = component.getByTestId('registerBm')
      fireEvent(button, 'press')
      expect(component.queryAllByTestId("userInput").length).toEqual(1);
    })
  })