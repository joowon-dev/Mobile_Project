import React from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
import Video from 'react-native-video';
import LottieView from 'lottie-react-native';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { app } from '../../components/firebase/firebaseconfig'

function Page4({ videoUrl }) {
    const uploadToFirebase = async () => {
        if (!videoUrl) return;

        const storageRef = getStorage(app);

        // Generate a unique name for the video using a timestamp
        const uniqueVideoName = `video_${Date.now()}.mp4`;

        const videoRef = ref(storageRef, `uploads/${uniqueVideoName}`);

        const response = await fetch(videoUrl);
        const blob = await response.blob();

        uploadBytes(videoRef, blob).then((snapshot) => {
            console.log('Uploaded a video!', snapshot);
            Alert.alert(
                "Upload Successful",
                "Your video has been uploaded to Firebase successfully!",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        }).catch(error => {
            console.error("Error uploading video: ", error);
        });
    };

    return (
        <View style={styles.container}>
            {!videoUrl && (
                <LottieView 
                    style={styles.lottie} 
                    source={require('../../Lottie/source/analysis.json')} 
                    autoPlay 
                    loop 
                />
            )}

            {videoUrl && (
                <>
                    <Video 
                        source={{ uri: videoUrl }}
                        style={styles.video}
                        controls={true}
                    />
                    <Button title="Upload to Firebase" onPress={uploadToFirebase} />
                </>
            )}
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
    lottie: {
        width: 200,
        height: 200,
    },
    video: {
        width: 300,
        height: 300,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 10,  // added for spacing
    }
});

export default Page4;
