import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { Button, Text } from 'native-base';
import Video from 'react-native-video';
import axios from 'axios';

function Page3({ handleNextClick, fileData, text, setVideoUrl }) {

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

        axios.post("http://8d5d-34-31-65-93.ngrok-free.app/uploadvideo", formData)
            .then((res) => {
                console.log(res);
                if (res.data && res.data.video_path) {
                    setVideoUrl("http://8d5d-34-31-65-93.ngrok-free.app" + res.data.video_path);
                }
            })
            .catch((err) => console.error(err));
    }

    return (
        <View style={styles.container}>
            {fileData && (
                <Video source={{ uri: fileData.uri }} style={styles.video} controls={true} />
            )}

            <Text style={styles.label}>{text}</Text>

            <Button style={styles.uploadButton} onPress={() => { handleAnalyze(); handleNextClick() }}>
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
    video: {
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
