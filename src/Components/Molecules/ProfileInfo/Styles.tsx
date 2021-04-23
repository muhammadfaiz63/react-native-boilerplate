import { StyleService } from '@ui-kitten/components';
import Metrics from "Themes/Metrics"

const themedStyles = StyleService.create({
  container: {
    backgroundColor: '#f5f4f3',
    paddingHorizontal: 10,
    marginBottom:10,
  },
  iconAccount: {
    marginTop: 7,
    marginLeft: 10,
    width: 25,
    height: 25,
  },
});

export default themedStyles;
