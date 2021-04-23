import {StyleService} from '@ui-kitten/components';
import Metrics from "Themes/Metrics"
import { Primary, White } from "Themes/Colors"

const themedStyles = StyleService.create({
    buttonText: {
      marginLeft: 10,
      fontFamily: 'Montserrat-Regular',
      textAlign: 'center',
      color: White,
      fontSize: 14,
    },
    outlineButtonText: {
      margin: 18,
      textAlign: 'center',
      fontFamily: 'Montserrat-Regular',
      color: Primary,
      fontSize: 12
    },
    container: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      paddingVertical:0,
      height:40,
      paddingHorizontal:5,
      borderRadius:10
    },
    iconAccount: {
      width: 25,
      height: 25,
    },
    touchStyle: {
      backgroundColor: Primary, 
      flexDirection:'row',
      borderRadius: 15,
      paddingHorizontal:15,
      height:45,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation:1
    }
  });

export default themedStyles;
