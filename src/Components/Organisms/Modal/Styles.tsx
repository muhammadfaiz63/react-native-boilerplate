import {StyleService} from '@ui-kitten/components';
import Metrics from "Themes/Metrics"

const themedStyles = StyleService.create({
    text: {
      color: 'white',
      fontWeight: '600',
    },
    titleTxt: {
      marginLeft:Metrics.screenWidth / 40,
      color: 'white',
      fontWeight: '600',
      textAlignVertical:'center'
    },
    root: {
      flexDirection: 'row',
      backgroundColor: '#005E6A',
      paddingVertical:0,
      paddingHorizontal:0,
      minHeight:Metrics.screenHeight / 10.5
    },
    container: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      paddingVertical:0
    },
    layout: {
      backgroundColor: '#005E6A',
      display: 'flex',
      flexDirection: 'row',
    },
    avatar: {
      backgroundColor: '#005E6A',
      borderColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      width: 25,
      height: 25,
    },
    iconBack: {
      marginLeft:10,
      marginRight:10,
      width: 25,
      height: 25,
    },
    iconAccount: {
      marginRight:10,
      width: 25,
      height: 25,
    },
  });

export default themedStyles;
