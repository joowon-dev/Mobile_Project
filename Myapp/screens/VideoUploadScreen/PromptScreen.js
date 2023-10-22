import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Input, Text } from 'native-base';
import Video from 'react-native-video';

function Page2({ handleNextClick, fileData, setText }) {
    const [text, setTextLocal] = useState('');

    const handleTextChange = (textValue) => {
        setTextLocal(textValue);
        setText(textValue); 
    };

    return (
        <View style={styles.container}>
            {fileData && (
                <Video source={{ uri: fileData.uri }} style={styles.video} controls={true} />
            )}
            
            <Text style={styles.label}>프롬프트를 입력하세요:</Text>
            
            <Input 
                style={styles.input}
                placeholder="Type here!"
                onChangeText={handleTextChange}
                value={text}
                variant="filled"
                bg="gray.900" 
                placeholderTextColor="gray.400"
                color="white" 
            />

            <Button style={styles.uploadButton} onPress={handleNextClick}>
                <Text style={styles.buttonText}>Next</Text>
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
    input: {
        width: '100%',
        marginBottom: 30, 
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

export default Page2;
