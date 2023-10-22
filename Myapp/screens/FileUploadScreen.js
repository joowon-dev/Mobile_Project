import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { Button } from 'native-base';
import LottieView from 'lottie-react-native';
import axios from 'axios';
import { useServerAddress } from '../ServerAddressContext'; // 여기에 올바른 경로를 입력하세요

function FileUploadScreen({ navigation }) {
  const { serverAddress, updateServerAddress } = useServerAddress();
  const [serverResponse, setServerResponse] = useState(null);
  const [serverResponseStatus, setServerResponseStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(true);

  const connectToServer = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://' + serverAddress + '.ngrok-free.app');
      setServerResponse(response.data);
      setServerResponseStatus('success');
      setIsEditing(false);
    } catch (error) {
      console.error("Error connecting to server: ", error);
      setServerResponse("Error connecting to server");
      setServerResponseStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setServerResponseStatus(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Server Address"
          placeholderTextColor="#ffffff"
          value={serverAddress}
          onChangeText={isEditing ? updateServerAddress : undefined}
          editable={isEditing}
        />
        <Button 
          block 
          style={styles.button} 
          onPress={isEditing ? connectToServer : handleEdit}
        >
          <Text style={styles.buttonText}>{isEditing ? 'IP 등록' : '수정'}</Text>
        </Button>
      </View>
      {loading && <Text style={styles.loadingText}>Connecting to server...</Text>}
      {serverResponse !== null && (
        <Text style={[styles.serverResponse, serverResponseStatus === 'success' ? styles.success : styles.error]}>
          {serverResponse}
        </Text>
      )}
      <View style={styles.buttonContainer}>
        <Button block style={styles.uploadButton} onPress={() => navigation.navigate('ChoosePhoto')}>
          <LottieView style={styles.lottie} source={require('../Lottie/source/image.json')} autoPlay loop />
          <Text style={styles.buttonText}>Photo Upload</Text>
        </Button>
        <Button block style={styles.uploadButton} onPress={() => navigation.navigate('ChooseVideo')}>
          <LottieView style={styles.lottie} source={require('../Lottie/source/video.json')} autoPlay loop />
          <Text style={styles.buttonText}>Video Upload</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E293B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  uploadButton: {
    marginVertical: 10,
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'white',
    borderColor: 'white',
    width: '60%',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
  },
  button: {
    height: 45,
    margin: 12,
    flexShrink: 0,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  lottie: {
    height: 50,
    width: 50,
  },
  serverResponse: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  success: {
    color: 'green',
  },
  error: {
    color: 'red',
  },
  loadingText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default FileUploadScreen;
