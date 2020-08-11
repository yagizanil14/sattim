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
      FastProduct:{
        alignSelf:"center",
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
      }
    })
}

export default styles