import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Pressable } from 'react-native';
import ModaleditProfile from '../components/ModalEditProfile/modaleditProfile';
import StyledButton from '../components/StyledButton';
import NavBar from '../components/NavBar';
import TitleBar from '../components/TitleBar'
import { Button } from 'react-native-web';
import RecetaItem from '../components/RecetaItem/RecetaItem';

function ProfileScreen(props) {
  const [modal, setModal] = React.useState(false)
  const descripcion = 'Soy un chef graduado de la academia de cocina Le Cordon Bleu en Perú, listo para compartir contigo todo lo que se.'
  const imagen = require('../assets/images/chef.jpg')

  const recetas = [
    {
      receta: 'Pollo',
      rating: '3.5'
    },
    {
      receta: 'Pasta',
      rating: '4.0'
    },
    {
      receta: 'Carne',
      rating: '4.2'
    },
    {
      receta: 'Papas con sal',
      rating: '2.0'
    },
    {
      receta: 'Papas con sal',
      rating: '2.0'
    },
    {
      receta: 'Papas con sal',
      rating: '2.0'
    },
    {
      receta: 'Papas con sal',
      rating: '2.0'
    },
    {
      receta: 'Papas con sal',
      rating: '2.0'
    },
    {
      receta: 'Papas con sal',
      rating: '2.0'
    }
  ]

  const toggleModal = () =>{
    setModal(!modal)
  }
  return (
    modal ? <ModaleditProfile descripcion = {descripcion} imagen = {imagen} toggleModal = {toggleModal}/>
    :
    <View style={styles.container}>
      <TitleBar/>
      <ImageBackground source={require('../assets/images/fondo.png')} resizeMode="cover" style={styles.back} imageStyle={{opacity: 0.3}}>
        <View style={styles.userbox}>
          <View style = {styles.profrow}>
            <Image source={imagen} style = {styles.profilepic}></Image>
            <Pressable style = {styles.edit} onPress= {toggleModal}>
              <Text >Editar Perfil</Text>
            </Pressable>
          </View>
          <View style={styles.usernombre}>
            <Text style = {styles.usernamettitle}>Juan Ignacio Ramirez</Text>
            <Text style = {styles.descripcion}>{descripcion}</Text>
          </View>
        </View>
        <View style={styles.userbox1}>
          <Text style={{fontSize: 20, color: 'white', marginBottom:10}}>Mis recetas</Text>
          <ScrollView >
            {
              recetas.map((element, index) => {
                return (<RecetaItem key={index} receta={element.receta} rating={element.rating}/>)
              })
            }
          </ScrollView>
          
        </View>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1
  },
  padContainer: {
    flex:1,
    paddingHorizontal: 10,
    paddingTop: 180,
    paddingBottom: 20
  },
  back:{
    width: '100%',
    height: '100%',
    flex: 1, 
    justifyContent: "center",
  },
  scrollCont: {
    flex:1,
    backgroundColor: '#6F6861',
    borderWidth: 1,
    borderRadius:10,
    padding: 30,
    marginTop:10,
    flexDirection:'column'
  },
  userbox: {
    height:200,
    backgroundColor: '#6F6861',
    justifyContent:'center',
    flexDirection:'column',
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    marginTop:5,
    marginBottom:5,
    marginLeft:5,
    marginRight:5
  },userbox1: {
    flex:1,
    backgroundColor: '#6F6861',
    flexDirection:'column',
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 2,
    padding:30,
    marginTop:5,
    marginBottom:5,
    marginLeft:5,
    marginRight:5,
  },
  text:{
    fontSize: 30,
    color: 'white'
  },
  profilepic: {
    height:85,
    width:85,
    borderRadius: 60,
  },
  usernombre:{
    marginLeft:10,
    flexDirection:'column',
    marginTop:15,

  },
  usernamettitle:{
    fontSize:15,
    fontWeight:'bold',
    color:'white'
    
  },
  descripcion:{
    fontSize:12,
    color:'white'
  },
  misrecetas:{
    alignSelf:'center',
    fontSize: 20,
    color: 'white',
    fontWeight:'bold'
  },
  recetas:{
    fontSize: 20,
    color: 'white'
  },
  profrow:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  edit:{
    display:'flex',
    height:30,
    width:95,
    borderRadius:50,
    backgroundColor: 'white',
    alignSelf:'center',
    marginRight:10,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default ProfileScreen;