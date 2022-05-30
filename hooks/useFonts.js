import * as Font from 'expo-font';

const useFonts = async () => {
  await Font.loadAsync({
    Montserrat_Black: require('../assets/fonts/Montserrat-Black.ttf'),
    Montserrat_ExtraBold: require('../assets/fonts/Montserrat-ExtraBold.ttf'),
    Mukta_Regular: require('../assets/fonts/Mukta-Regular.ttf'),
    Mukta_Bold: require('../assets/fonts/Mukta-Bold.ttf'),
    Mulish_Regular: require('../assets/fonts/Mulish-Medium.ttf'),
  });
};

export default useFonts;