import React, { useEffect } from 'react';
import renderer, { act } from 'react-test-renderer';
import {render, screen, fireEvent, waitFor} from '@testing-library/react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import AppP from '../../views/App.js'
import AppLoading from 'expo-app-loading';


describe('App', () => {    
    it('Creacion de los fonts', async () => {
        const render = new ShallowRenderer();
        render.render(<AppP />)
        component =  render.getRenderOutput();
        

    })
  })

