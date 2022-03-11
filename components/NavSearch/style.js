import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        paddingHorizontal: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#f36c6c'
    },
    bar:{
        backgroundColor: 'transparent',
        width : '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    barra:{
        borderTopWidth : '0px',
        borderBottomWidth: '0px'
    }
});

export default Styles;