import React, { useState, useRef, useEffect } from 'react';
import { Button, Image, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import axios from 'axios';
import { launchImageLibrary } from 'react-native-image-picker';

import Page1 from './VideoUploadScreen/UploadScreen';
import Page2 from './VideoUploadScreen/PromptScreen';
import Page3 from './VideoUploadScreen/CheckScreen';
import Page4 from './VideoUploadScreen/CompleteScreen';

function FileUploadScreen() {
    const [page, setPage] = useState(0);
    const [fileSource, setFileSource] = useState(null);
    const [fileType, setFileType] = useState('');
    const [fileData, setFileData] = useState('');
    const [text, setText] = useState('');
    const [videoUrl, setVideoUrl] = useState(null); // 비디오 URL state 추가
    const pagerRef = useRef(null);

    useEffect(() => {
        if (pagerRef.current) {
            pagerRef.current.setPage(page);
        }
    }, [page]);

    const handleChooseVideo = () => {
        let options = {
            mediaType: 'video',
            maxWidth: 2000,
            maxHeight: 2000,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled video picker');
            } else if (response.errorCode) {
                console.log(response.errorCode, response.errorMessage);
            } else {
                setFileSource(response.assets[0].uri);
                setFileType(response.assets[0].type);
                setFileData(response.assets[0]);
            }
        });
    };

    const handleNextClick = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <PagerView ref={pagerRef} style={{ flex: 1 }} initialPage={0} onPageSelected={(e) => setPage(e.nativeEvent.position)}>
            <View key="1">
                <Page1 handleNextClick={handleNextClick} handleChooseVideo={handleChooseVideo} fileSource={fileSource} />
            </View>
            <View key="2">
                <Page2 handleNextClick={handleNextClick} fileData={fileData} setText={setText} />
            </View>
            <View key="3">
                <Page3 handleNextClick={handleNextClick} fileData={fileData} text={text} setVideoUrl={setVideoUrl} />
            </View>
            <View key="4">
                <Page4 videoUrl={videoUrl} />
            </View>
        </PagerView>
    );
}

export default FileUploadScreen;