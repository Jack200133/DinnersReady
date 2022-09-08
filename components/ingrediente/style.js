import { StyleSheet } from "react-native";

const styles =  StyleSheet.create({
    container: {
        marginTop:5,
        paddingBottom:0,
        flexDirection:'row',
        height: 50,
        width: 120,
        backgroundColor: '#4E87B5',
        borderRadius: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        fontSize: 10,
        width: 120,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',
        fontFamily:'Mukta_Regular',
        marginLeft: 10
    }
});

export default styles;