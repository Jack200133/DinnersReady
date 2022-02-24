import { StyleSheet } from "react-native";

const styles = (color) => StyleSheet.create({
    container: {
        width: '100%',
        paddingBottom:0,
        alignItems:'center',
        flex:1,
        justifyContent:'center',
        height: 80,
        paddingHorizontal: 5,
        backgroundColor: color
    }
});

export default styles;