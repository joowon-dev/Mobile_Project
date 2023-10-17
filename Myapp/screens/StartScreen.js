import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { Button, Text } from 'native-base';

const StartScreen = (props) => {
    const navigation = useNavigation(); // 네비게이션 객체를 가져옵니다.
    return (
        <View style={styles.container}>
            <LottieView style={styles.lottie} source={require('../Lottie/source/start.json')} autoPlay loop />
            <Button onPress={() => navigation.navigate('Main')} style={styles.button}>
                <Text style={styles.buttonText}>시작하기</Text>
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
    },
    lottie: {
        height: "80%",
        width: "80%",
        marginTop: 0
    },
    button: {
        marginTop: 20,
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderColor: 'white',
        borderWidth: 1
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default StartScreen;
