import {StyleService} from '@ui-kitten/components';
import Metrics from "Themes/Metrics"

const themedStyles = StyleService.create({
    container: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      paddingVertical:0,
      height:40,
      marginHorizontal:5,
      borderRadius:10
    },
    iconAccount: {
      marginTop:7,
      marginLeft:10,
      width: 25,
      height: 25,
    },
  });

export default themedStyles;
