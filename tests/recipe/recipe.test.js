import React, { useEffect } from 'react';
import renderer, { act } from 'react-test-renderer';
import {render, screen, fireEvent} from '@testing-library/react-native';
import RecipeScreen from '../../views/recipe.js'
import MockStorage from './asyncMock.js';


describe('Receta facil', () => {    
    it('renderiza pantalla', () => {
        component =  render(<RecipeScreen/>)
        expect(component.queryAllByTestId("texto").length).toEqual(1);
        expect(component.queryAllByTestId("picker").length).toEqual(1);
        expect(component.queryAllByTestId("titulo").length).toEqual(1);
        expect(component.queryAllByTestId("descripcion").length).toEqual(1);
        expect(component.queryAllByTestId("publish").length).toEqual(1);
    })
})

describe('inputs funcionales', () => {
    it('escribe en input de titulo', () => {
        const component =  render(<RecipeScreen/>)
        const input = component.getByTestId('titulo')
        fireEvent.changeText(input, '123');
        expect(input.props.value).toBe('123');
    })

    it('escribe en input de descripcion', () => {
        const component =  render(<RecipeScreen/>)
        const input = component.getByTestId('descripcion')
        fireEvent.changeText(input, '123');
        expect(input.props.value).toBe('123');
    })

    it('escribe en input de pasos', () => {
        const component =  render(<RecipeScreen/>)
        const input = component.getByTestId('pasos')
        fireEvent.changeText(input, '123');
        expect(input.props.value).toBe('123');
    })

    it('escribe en input de categorias', () => {
        const component =  render(<RecipeScreen/>)
        const input = component.getByTestId('cat')
        fireEvent.changeText(input, '123');
        expect(input.props.value).toBe('123');
    })
})

describe('crear receta', () => {
    it('no crea receta sin informacion completa', () => {
        const component =  render(<RecipeScreen/>)
        const button = component.getByTestId('publish')
        fireEvent(button, 'press')
    })

    it('crea receta con informacion completa', () => {
        const storageCache = {}
        const AsyncStorage = new MockStorage(storageCache)

        jest.setMock('@react-native-async-storage/async-storage/', () => AsyncStorage)
        const component =  render(<RecipeScreen/>)
        const button = component.getByTestId('publish')
        const input = component.getByTestId('titulo')
        const input2 = component.getByTestId('descripcion')
        const input3 = component.getByTestId('titulo')
        const input4 = component.getByTestId('pasos')
        const input5 = component.getByTestId('cat')
        fireEvent(input, 'onChangeText', 'ab')
        fireEvent(input2, 'onChangeText', 'ab')
        fireEvent(input3, 'onChangeText', 'ab')
        fireEvent(input4, 'onChangeText', 'ab')
        fireEvent(input5, 'onChangeText', 'ab')
        const dropdown = component.getByTestId('drop')
        fireEvent(dropdown, 'press')
        const inter = component.getByTestId('Intermedio')
        fireEvent(inter, 'press')
        fireEvent(button, 'press')
        expect(component.queryAllByTestId("sms").length).toEqual(0);
    })
})

describe('Ingredientes', () => {    
    it('Añade ingredientes', () => {
        component =  render(<RecipeScreen/>)
        const ing = component.getByTestId('ing')
        fireEvent(ing, 'press')
        expect(component.queryAllByTestId("ing").length).toEqual(1);
    })
})