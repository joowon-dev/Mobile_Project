import React , { useState }from "react";
import { Button, Image, View, StyleSheet,Alert } from "react-native";
import LottieView from 'lottie-react-native';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { app } from '../../components/firebase/firebaseconfig'

function Page4({ resultImageBase64String }) {

    const uploadToFirebase = async () => {
        if (!resultImageBase64String) return;
    
        const storageRef = getStorage(app);
    
        // Generate a unique name for the image using a timestamp
        const uniqueImageName = `photo_${Date.now()}.png`;
    
        const imageRef = ref(storageRef, `uploads/${uniqueImageName}`);  // Updated path
    
        const response = await fetch(`data:image/jpeg;base64,${resultImageBase64String}`);
        const blob = await response.blob();
    
        uploadBytes(imageRef, blob).then((snapshot) => {
            console.log('Uploaded a blob or file!', snapshot);
            Alert.alert(
                "Upload Successful",
                "Your image has been uploaded to Firebase successfully!",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        }).catch(error => {
            console.error("Error uploading image: ", error);
        });
    };

    return (
        <View style={styles.container}>
            {!resultImageBase64String && (
                <LottieView 
                    style={styles.lottie} 
                    source={require('../../Lottie/source/analysis.json')} 
                    autoPlay 
                    loop 
                />
            )}

            {resultImageBase64String && (
                <>
                    <Image 
                        source={{ uri: `data:image/jpeg;base64,${resultImageBase64String}` }} 
                        style={styles.image} 
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
    image: {
        width: 300,
        height: 300,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 10,  // added for spacing
    }
});

export default Page4;