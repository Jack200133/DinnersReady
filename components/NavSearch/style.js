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
        backgroundColor: '#f36c6c'
    },
    bar:{
        backgroundColor: 'transparent',
        //width : '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    barra:{
        borderTopWidth : 0,
        borderBottomWidth: 0,
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        display: 'flex',
        width: '100%'
    },
    input:{
        backgroundColor: 'transparent', 
        
    }
});

export default Styles;