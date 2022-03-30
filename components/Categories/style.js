import { StyleSheet } from "react-native";

const styles =  StyleSheet.create({

  ingredView: {
    alignItems:'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EEEEEE',
    height: 50,
    borderRadius: 30,
    marginBottom:10,
  },
  arrow:{
    justifyContent: 'flex-end',
    alignSelf:'center',
    width: '25%',
    height: '40%', 
    resizeMode: 'contain',
  },
  button:{
    width: 70,
    height: 70,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  iconContainer:{
    flexDirection:'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  },
  scrollCont: {
    flex:1,
    backgroundColor: '#6F6861',
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 2,
    height: '100%',
    paddingTop: 10,
    paddingBottom: 30,
    marginTop: 20
  },
  ingredTitle: {
    alignItems:'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    borderRadius: 30,
    marginBottom:10,
  }
})

export default styles;
