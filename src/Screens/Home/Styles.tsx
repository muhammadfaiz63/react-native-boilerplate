import { StyleService } from '@ui-kitten/components';
import Metrics from "Themes/Metrics"
import { Primary, White } from 'Themes/Colors';

const themedStyles = StyleService.create({
    text: {
        color: 'white',
        fontWeight: '600',
    },
    titleTxt: {
        marginTop: Metrics.screenHeight / 65,
        marginLeft: Metrics.screenWidth / 40,
        color: 'white',
        fontWeight: '600',
    },
    root: {
        flex:1,
        backgroundColor: '#E5E5E5',
    },
    searchBox: {
        backgroundColor: "#fff",
        flex: 1,
        borderColor: "transparent"
    },
    container: {
        backgroundColor: '#E5E5E5',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    menuBtn:{
        backgroundColor: Primary,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 15
    },
    containerMenu:{
        paddingTop:15,
        paddingBottom:25,
        flexDirection:'row', 
        justifyContent: 'space-around', 
        flexWrap:'wrap',
    },
    containerTrend:{
        backgroundColor: White,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 15,
        marginHorizontal: 16,
        marginBottom: 16
    },
    fontMenu: {
        fontFamily: 'Montserrat-Regular',
        fontSize: Metrics.screenWidth / 40
    },
    filterBtn:{
        height:30,
        borderColor:Primary,
        borderWidth:2,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10, 
        marginRight: 5,
    },
});

export default themedStyles;
