import { StyleSheet} from "react-native"



const styles = StyleSheet.create({
  buttons:{
    width: '100%',
    height: 50,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor: '#f36c6c',
    marginTop:0,
    paddingHorizontal: 30,
    alignItems:'center',
  },
  container:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    flex:3,
    backgroundColor: '#EEE9E9'
  },
  imagePicker: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    
  },
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  PickerContainer: {
    width: '100%',
    height: 1000,
    display: 'flex',
  },
  addImage: {
    width: '100%',
    height: '100%',
    borderRadius: 100
  },
  inputDesc:{
    borderWidth: 1,
    marginHorizontal: 15,
    margin: 8,
    borderColor: 'black',
    borderRadius: 30,
    fontSize: 16,
    height: 170,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#EEE9E9'
  },
  titular:{
    width: 250,
    marginVertical: 15,
    fontSize: 18,
    justifyContent: 'center',
    alignSelf: 'center',
  }

});

export default styles