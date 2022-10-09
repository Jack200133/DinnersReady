import React from 'react';
import { fireEvent, render, screen} from '@testing-library/react-native';
import SearchBart  from './index';


describe('<SearchBart />', () => {
  it('on enter press sets the value', async () => {

    const navSearch = render(<SearchBart/>)
    const searchBar = navSearch.getByTestId('search_bar')
  
    fireEvent(searchBar,'changeText', 'test')
    fireEvent(searchBar, 'keyPress', 'Enter')

    expect(searchBar.props.value).toEqual('test')
  })
})