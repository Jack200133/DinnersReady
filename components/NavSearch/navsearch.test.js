import React from 'react';
import { fireEvent, render, screen} from '@testing-library/react-native';
import SearchBart  from './index';


describe('<SearchBart />', () => {
  it('on enter press sets the value', async () => {

    const navSearch = render(<SearchBart/>)
    const searchBar = navSearch.getByTestId('search_bar')
    
    fireEvent(searchBar,'changeText', 'test')
    fireEvent(searchBar, 'keyPress', 'Enter')
    await new Promise(r=>setTimeout(()=>r(), 0));
    expect(await expect(navSearch.queryByTestId('search_bar_active'))).toBeTruthy();
  })
  
  it('on escape press sets the value, else', async () => {

    const navSearch = render(<SearchBart/>)
    const searchBar = navSearch.getByTestId('search_bar')
  
    fireEvent(searchBar,'changeText', 'test')
    fireEvent(searchBar, 'keyPress', 'Escape')
    
    expect(navSearch.queryByTestId('search_bar_active')).toBeNull()
  })
})