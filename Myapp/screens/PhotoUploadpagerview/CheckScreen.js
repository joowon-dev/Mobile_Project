import React from 'react';
import { StyleSheet, View, Image, Platform } from 'react-native';
import { Button, Text } from 'native-base';
import axios from 'axios';
import Config from 'react-native-config'; 
import { useServerAddress } from '../../ServerAddressContext';
function Page3({ handleNextClick, fileData, text, setResultImageBase64String }) {
  const { serverAddress, updateServerAddress } = useServerAddress();
  const handleAnalyze = () => {
    let formData = new FormData();
    formData.append("file", {
      name: fileData.fileName,
      type: fileData.type,
      uri:
        Platform.OS === "android"
          ? fileData.uri
          : fileData.uri.replace("file://", "")
    });
    formData.append("prompt", text);
    console.log('http://' + serverAddress + '.ngrok-free.app/upload')
    axios.post('http://' + serverAddress + '.ngrok-free.app/upload', formData)
     .then((res) => {
         console.log(res);
         setResultImageBase64String(res.data.result_image);
     })
     .catch((err) => console.error(err));
  }

  return (
    <View style={styles.container}>
      {fileData && (
        <Image source={{ uri: fileData.uri }} style={styles.image} />
      )}
      
      <Text style={styles.label}>{text}</Text>
      
      <Button style={styles.uploadButton} onPress={() => {handleAnalyze(); handleNextClick()}}>
        <Text style={styles.buttonText}>분석하기</Text>
      </Button>
    </View>
   );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E293B',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    label: {
        color: 'white',
        marginBottom: 20,
        fontSize: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    uploadButton: {
        marginVertical: 10,
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderColor: 'white',
        borderWidth: 1,
        width: '80%',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default Page3;
