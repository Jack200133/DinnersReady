import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    button:{
        width: '100%',
        height: '100%',
        
    }, 
    back:{
        width: '70%',
        height: '70%',
        flex: 1, 
        justifyContent: "center", 
        alignContent: 'center',
        marginTop: 10
    }
});

export default styles;