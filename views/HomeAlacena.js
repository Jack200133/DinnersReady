import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground,ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import NavBar from '../components/NavBar';
import TitleBar from '../components/TitleBar';
import IconBar from '../components/IconBar';
import PubItem from '../components/PubItem';
import SearchBart from '../components/NavSearch';



function HomeAlacena(props) {

  const Alacena_Recipe = require('../assets/images/casitan.png');
  const Market_Recipe = require('../assets/images/cart.png');
  const Hamburguesa = require('../assets/images/hamburguesa_temporal.jpg');
  const Saved = require('../assets/images/bookmark.png')
  const Savednt = require('../assets/images/bookmarkN.png')

  const [recetas, setRecetas] = React.useState([])
  const [savedrecipe, setSaved] = React.useState([])


  const getData = async () => {
    const value = await AsyncStorage.getItem('@Usuario')   
    return value
  }

  const clickHandler = (id) =>{
    //console.log(id)
    if(savedrecipe.length != 0){
      
      if (savedrecipe.includes(id)){
        setSaved(savedrecipe.filter(e => e !== id))
      }
      else {
        setSaved([...savedrecipe, id])
      }
    }
  }
  

  useEffect( async () => {
    
    
    const usuario = await getData()
    
    const url = 'http://3.132.195.25/dinner/recomendacionA/'+usuario
    const response = await fetch(url, {
      method: 'GET'
    })
    const responseJSON = await response.json()
    
    const listaId = responseJSON
    let lista = []
    for (let i = 0; i < listaId.final.length; i++)
    {
      const url3 = 'http://3.132.195.25/dinner/recetas/' + listaId.final[i]
      // const url3 = 'http://localhost:5000/recetas/' + listaId.final[i]
      const response3 = await fetch(url3, {
        method: 'GET'
      })
      const responseJSON3 = await response3.json()
      
      lista.push(...responseJSON3)
    }
    setRecetas(lista)

    const url2 = 'http://3.132.195.25/dinner/save/'+usuario
    const response2 = await fetch(url2, {
      method: 'GET'
    })
    const responseJSON2 = await response2.json()
    let temp = []
    responseJSON2.map((idx)=> temp.push(idx.id))
    setSaved(temp)

  },[])

  
  return (
    
    
    <View testID='HomeAlacena' style={styles.container}>


      <ImageBackground source={require('../assets/images/fondo.png')}resizeMode="cover"style={styles.background} imageStyle={{opacity: 0.3}}>
            <ScrollView style={styles.scrollCont}>
                <View testID="receta_contenedor" style={styles.NavegationPost}>
                  {
                    
                    recetas.map((e) => 
                    {
                      //console.log(e.id)
                      return(
                        
                      <PubItem id={e.id} key={e.id}
                      image={e.imagen} 
                      dificultad={e.dificultad} 
                      saved={savedrecipe.includes(e.id) ? Saved:Savednt}
                      cH={clickHandler} 
                      NameRecipe={e.nombre} 
                      stars ={e.estrellas} 
                      hash={'#love'} 
                      desc={e.descripcion} 
                      autor={e.autor} 
                      navigation = {props.navigation}/>
                      )
                    })
                  }
                </View> 
            </ScrollView>
      </ImageBackground>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1
  },
  background: {
      width:'100%',
      height:'100%',
      flex: 1, 
      justifyContent: "center" 
      
  },
  iconContainer:{
    flexDirection:'row',
    justifyContent: 'space-evenly',
  },
  NavegationPost:{
    flex: 1, 
    alignItems:'center',
    paddingHorizontal:20,
    

  },
  scrollCont: {
    flex:1,
    marginLeft:10,
    marginRight:10,
    
  }
});

export default HomeAlacena;