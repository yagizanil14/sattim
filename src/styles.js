import {StyleSheet,Dimensions} from 'react-native'

const styles={
    CameraShutterButtonStyles:StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },
          outerCircle: {
            width: 75,
            height: 75,
            borderRadius: 75,
            borderWidth: 5,
            backgroundColor: 'transparent',
            borderColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          },
          innerCircle: {
            width: 60,
            height: 60,
            borderRadius: 60,
            backgroundColor: 'white',
          },
    }),

    MainStyle:StyleSheet.create({
      titleStyle:{
        alignSelf:"center",
        fontSize:40,
        color:"#424242",
        fontWeight:"bold",
        marginVertical:25
      },
      FastProductView:{
        position:"absolute",
        width:Dimensions.get("window").width * 0.5,
        height:Dimensions.get("window").height * 0.1,
        alignSelf:"center",
        backgroundColor:"#bdbdbd",
        marginTop:Dimensions.get("window").height * 0.9,
        borderRadius:30
      },
      FastProductText:{
        fontSize:16,
        fontWeight:"bold",
        color:"#212121"
      },
      FastProduct:{
        alignSelf:"center",
      },
      flatListStyles:{
        alignSelf:"center"
      },
      FastProductTitleView:{
        width:Dimensions.get("window").width * 0.95,
        height:Dimensions.get("window").height * 0.07,
        alignSelf:"center",
        backgroundColor:"#bdbdbd",
        borderBottomRightRadius:25,
        borderBottomLeftRadius:25,
      },
      FastProductTitleText:{
        fontSize:25,
        fontWeight:"bold",
        alignSelf:"center",
        color:"#212121",
        fontStyle:"italic"
      },
      itemPagesTitleText:{
        fontSize:23,
        fontWeight:"bold",
        alignSelf:"center",
        color:"#212121",
        fontStyle:"italic"
      },

      itemPagesExplainText:{
        fontSize:17,
        fontWeight:"300",
        color:"#212121",
        fontStyle:"italic"
      },

      itemPagesDateText:{
        fontSize:17,
        fontWeight:"300",
        color:"#212121",
        fontStyle:"italic"
      },

      itemPagesCategoryText:{
        fontSize:17,
        fontWeight:"300",
        color:"#212121",
        fontStyle:"italic"
      },

      itemPagesPriceText:{
        fontSize:17,
        fontWeight:"bold",
        color:"#ff8f00",
        fontStyle:"italic"
      }
    }),

    AddProductsQuicklyStyles:StyleSheet.create({
        container: {
            height:Dimensions.get("window").height * 1,
            width:Dimensions.get("window").width *1,
            backgroundColor: 'black',
          },
          preview: {
            height:Dimensions.get("window").height * 1,
            width:Dimensions.get("window").width *1,
            
          },
          headerRightContainer: { 
            marginRight: 20, 
            marginTop:10
          },
          headerRightImage: { 
            marginLeft: 20, 
            paddingTop: 10, 
            height: 35, 
            width: 35, 
            resizeMode: 'contain', 
            marginRight:10
          },
          imageBackground: {
            width:Dimensions.get("window").width * 1,
             height: Dimensions.get("window").height * 1
          },
          okButtonContainer: {
            position: 'absolute',
            bottom: 20,
            width: Dimensions.get("window").width * 1
          }
    }),

    components:StyleSheet.create({

      buttonProstyle:{
        width:Dimensions.get("window").width *0.5,
        padding:3,
        margin:8,
        borderRadius: 5,
        alignSelf: 'center',
        alignItems:"center",
        borderBottomWidth:2,
        borderColor:"#616161",
      },

      buttonProTextstyle:{
        color:"#424242",
        fontSize:15,
        fontWeight:"300"
      },

      inputProstyle:{
        width:Dimensions.get("window").width * 0.95,
        color: 'white',
        margin: 5,
        marginVertical: 5,
        borderRadius: 5,
        alignSelf:"center",
        borderRadius:15,
        padding: 10,
        backgroundColor: '#bdbdbd',
      },

      itemCardImgStyle:{
        width:Dimensions.get("window").width *0.35,
        height:Dimensions.get("window").width * 0.3,
        alignSelf:"center",
      },
      
      itemCardImgViewStyle:{
        borderWidth:1,
        borderColor:"gray",
        borderRadius:15, 
        margin:10,
        padding:15,
        width:170,
        height:250
      },
      itemCardTitleStyle:{
        fontSize:16,
        fontWeight:"bold",
        color:"#424242",
        alignSelf:"center"
      },
      itemCardPriceViewStyle:{
        marginVertical:10,
        flexDirection:"row"
      },
      itemCardPriceTextStyle:{
        color:"#424242",
        fontSize:12,
        alignSelf:"center",
        fontWeight:"bold"
      },
      itemCardPriceStyle:{
        color:"#ff8f00",
        fontSize:20,
        fontWeight:"bold"
      },
      itemCardTouchStyle:{
        width:Dimensions.get("window").width * 0.35,
        height:Dimensions.get("window").height * 0.05,
        backgroundColor:"#ff8f00",
        alignSelf:"center",
        borderRadius:30,
        flexDirection:"row",
        justifyContent:"center"
      },
      itemCardTouchTextStyle:{
        alignSelf:"center",
        fontSize:15,
        fontWeight:"300",
      },
      renderItemImg:{
        width:Dimensions.get("window").width * 0.4,
        height:Dimensions.get("window").height * 0.4,
        marginHorizontal:10,
        resizeMode:"stretch",
        borderRadius:15,
        marginTop:20
      }
    })
}

export default styles