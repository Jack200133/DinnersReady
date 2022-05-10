import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/MainStack';
import LogIn from './views/LogIn';
import SignIn from './views/signIn';
import RecipeScreen from './views/recipe';
import HomeAlacena from './views/HomeAlacena';
import RecipeView from './views/recipeView';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    //<Navigation/>
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LogIn />} />
        <Route path="/Register" element={<SignIn />} />
        <Route path="/Navigation" element={<Navigation />} />
        <Route path="/Recipe" element={<RecipeView />} />

      </Routes>

    </BrowserRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
