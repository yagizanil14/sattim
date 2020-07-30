import React, {useState} from 'react'
import ImagePicker from 'react-native-image-picker';
import { SafeAreaView, View, Text, Button } from "react-native";

  const LibraryImagePicker = (props)=>{
    const [source, setSource] = useState([])
    const LibraryPicker = () => {
      const options = {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response.uri);
        
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            setSource({ uri: response.uri })
          }
        });
      
    }
      return(
          <SafeAreaView>
              <Button title="Library" onPress={LibraryPicker}/>
          </SafeAreaView>
      )
  }

  export {LibraryImagePicker}