import React from 'react';
import renderer from 'react-test-renderer';
import {render, screen, fireEvent} from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogIn from '../../views/LogIn.js';
import HomeAlacena from '../../views/HomeAlacena.js';

let component
let component2

describe('<App />', () => {
  beforeEach(async () => {
    const navigation = {navigate: () => {}}
    component = render(<LogIn navigation={navigation}/>)
    component2 = render(<HomeAlacena/>)

  })
  jest.useFakeTimers();
  
  it('it shows right recipe', async () => {

    const usuario = component.getByTestId( "userInput") 
    const contraseña = component.getByTestId("passwordInput")
    const loginbutton = component.getByTestId("logInButton")

    usuario.value = "pez"
    contraseña.value = "pez"
    fireEvent.press(loginbutton)
    expect( await component2.queryAllByTestId("receta").length).toEqual(1);
  })
})

/*
describe ( 'Login screen' , () => {
  it ('should go to home page on login' , async () => {
      const navigation = {navigate: () => {}}
      spyOn(navigation, 'navigate');
      const page = render(<LogIn navigation = {navigation}/>) 
      const usuario = page.getByTestId( "userInput") 
      const contraseña = page.getByTestId("passwordInput")
      const loginButton = page.getByTestId("logInButton")
      usuario.value = "pez"
      contraseña.value = "pez"
      fireEvent.press(loginButton);
      expect(await navigation.navigate).toHaveBeenCalled()
  })
})*/
