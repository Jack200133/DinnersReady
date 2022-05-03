import { StyleSheet,StatusBar} from "react-native";

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        //height: 100,
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#5EA3DB',
        borderBottomColor:'#5EA3DB',
        color: 'white',
    },
    bar:{
        backgroundColor: 'transparent',
        //width : '20%',
        flexDirection: 'row',
        color: 'white',
        justifyContent: 'space-between',
    },
    icon:{
        color:'white',
        backgroundColor:'#5EA3DB'
    },
    barra:{
        borderTopWidth : 0,
        borderBottomWidth: 0,
        backgroundColor: '#3D6A8F',
        display: 'flex',
        color: 'white',
        width: '100%'
    },
    input:{
        backgroundColor: '#5EA3DB', 
        
    }
});

export default Styles;