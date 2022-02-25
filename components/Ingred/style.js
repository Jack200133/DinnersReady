import { StyleSheet } from "react-native";

const styles = (color) => StyleSheet.create({
    container: {
        marginTop:20,
        paddingBottom:0,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-evenly',
        height: 25,
        paddingHorizontal: 10,
        backgroundColor: color,
        borderRadius: 30
        
    }
});

export default styles;