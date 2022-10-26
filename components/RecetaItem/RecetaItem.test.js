import React from 'react';
import { fireEvent, render, screen} from '@testing-library/react-native';
import RecetaItem  from './RecetaItem';


describe('<RecetaItem />', () => {
  it('it renders component', async () => {

    const recetaItem = render(<RecetaItem/>)
    const view = recetaItem.getByTestId('receta_item')

    expect(view).toBeTruthy();
  })
})