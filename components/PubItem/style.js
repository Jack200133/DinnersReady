import { StyleSheet } from "react-native";


const styles= StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: "column",
        width: "100%",
        height: 360,
        backgroundColor: '#4E87B5',
        marginTop: 10,
        marginBottom: 10,
        borderRadius:20,
        borderWidth:2,
        borderColor:'black',
        justifyContent: 'center',
        alignContent: "center",
        color: '#05182A'
    },
    vistas:{
        width: "100%",
        height: 20,
        display: 'flex',
        flexDirection: "row",
        marginTop: 15,
        marginLeft: 10,
        paddingRight:20,
        marginBottom: 10,
        justifyContent: 'space-between',
        alignContent: "center"
    },
    background:{
        width: "90%",
        height: 200,
        display: 'flex',
        flexDirection: "row",
        alignSelf: 'center', 
        borderRadius:10,
    },
    Image:{
        width: 25,
        height: 25,
        justifyContent: "center",
        alignSelf:'center',
    },
    Dificult:{
        
        textAlign: "center",
        textAlignVertical: 'center'
    },
    TitleContainer:{
        display:"flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 10,
        paddingRight:20,
    },
    Stars:{
        backgroundColor:"black",
        width: '30%',
        height:30,
        display:'flex',
        flexDirection: "row",
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 5,
        borderRadius:10,
    },
    TextStar:{
        color:'white'
    },
    Estrella:{
        width: 25,
        height: 20,
        justifyContent: "center",
        alignSelf:'center',
    },
    TextBack:{
        width:"50%",
        height:30,
        borderRadius:20,
        borderWidth:2,
        borderColor:'black',
        color: '#05182A',
        alignSelf:'center',
        display:"flex",
        alignContent: 'center',
        justifyContent: 'center',
    },
    Hashtag:{
        color: '#05182A',
        justifyContent:"center",
        marginLeft:40,
        fontStyle:'italic'  
    },
    Title:{
        color: '#05182A',
        //flex: 2, 
        justifyContent:"center",
        //marginLeft:40,
        fontWeight:'bold',
        fontSize: 20
    },
    Descripcion:{
        //flex: 2, 
        justifyContent:"center",
        marginLeft:10,
        color: '#05182A',
        
    },
    autor: {
        color: '#05182A',
        justifyContent:"center",
        fontSize: 13,
        marginLeft: 20,
        fontStyle:'italic',
    }
});

export default styles;