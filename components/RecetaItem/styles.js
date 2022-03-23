import { StyleSheet,StatusBar} from "react-native";

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        paddingHorizontal: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 5
    },
    containerRating:{
        width: 70,
        height: 20,
        paddingHorizontal: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    image: {
        width: 20,
        height: 20,
      },
});

export default Styles;