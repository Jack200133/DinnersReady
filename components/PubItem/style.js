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
    backgroundX:{
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
        display: "flex",
        width: 20,
        height: 20,
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
        marginTop: 4,
        borderRadius:10,
    },
    TextStar:{
        color:'white',
        fontFamily:'Mulish_Regular',
    },
    Estrella:{
        width: 25,
        height: 20,
        justifyContent: "center",
        alignSelf:'center',
    },
    TextBack:{
        width:"30%",
        height:30,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#02073B',
        color: '#05182A',
        alignSelf:'center',
        display:"flex",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        backgroundColor:'#5EA3DB',
        marginLeft:5,
        fontFamily:'Mulish_Regular',
        
    },
    Hashtag:{
        color: '#05182A',
        justifyContent:"center",
        marginLeft:40,
        fontFamily:'Mulish_Regular', 
    },
    Title:{
        color: '#05182A',
        //flex: 2, 
        justifyContent:"center",
        //marginLeft:40,
        fontWeight:'bold',
        fontSize: 20,
        marginLeft: 6,
        fontFamily: 'Montserrat_Black',
    },
    Descripcion:{
        //flex: 2, 
        justifyContent:"center",
        marginLeft:10,
        color: '#05182A',
        marginLeft: 18,
        fontFamily:'Mulish_Regular',
        
    },
    autor: {
        color: '#05182A',
        justifyContent:"center",
        fontSize: 13,
        marginLeft: 20,
        fontFamily:'Mulish_Regular',
    }
});

export default styles;