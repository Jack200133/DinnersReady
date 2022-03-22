import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: "100%",
        height: 300,
        backgroundColor: '#6F6861',
        marginTop: 10,
        marginBottom: 10,
        borderRadius:30,
        borderWidth:2,
        borderColor:'black'

    },
    back:{
        width: '90%',
        height: 190,
        justifyContent: "center",
        resizeMode:"contain",
        marginVertical:10,
        alignSelf:'center'
        
      },
    Title:{
        flex: 2, 
        justifyContent:"center",
        marginLeft:40,
        fontWeight:'bold'
        
    },
    Descripcion:{
        flex: 2, 
        justifyContent:"center",
        marginLeft:40,
        
    },
});

export default styles;