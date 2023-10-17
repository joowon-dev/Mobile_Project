import React,{useState,useRef,useEffect}from'react';
import{Button , Image , View}from'react-native';
 import PagerView from 'react-native-pager-view';
 import axios from 'axios';
 import{launchImageLibrary}from'react-native-image-picker';

 // Import the pages:
 import Page1 from './PhotoUploadpagerview/Page1'; 
 import Page2 from './PhotoUploadpagerview/Page2'; 
 import Page3 from './PhotoUploadpagerview/Page3'; 
import Page4  from './PhotoUploadpagerview/Page4';


 function FileUploadScreen() {
   const [page, setPageI] = useState(0);
   const [fileSource, setFileSource] = useState(null);
   const [fileType, setFileType] = useState('');
   const [fileData, setFileData] = useState('');
   const [resultImageBase64String,setResultImageBase64String]=useState(null);
   const [text, setText] = useState('');
   const pagerRef = useRef(null);
   useEffect(() => {
    if (pagerRef.current) {
      pagerRef.current.setPage(page);
    }
  }, [page]);
const handleChoosePhoto=()=>{
  let options={
    mediaType:'photo',
    maxWidth:2000,
    maxHeight:2000,
  };

launchImageLibrary(options,(response)=>{
if(response.didCancel){
console.log('User cancelled image picker');
}else if(response.errorCode=='camera_unavailable'){
console.log('Camera not available on device');
}else if(response.errorCode=='permission'){
console.log('Permission not satisfied');
}else if(response.errorCode=='others'){
console.log(response.errorMessage);
}else{
setFileSource(response.assets[0].uri);
setFileType(response.assets[0].type);
setFileData(response.assets[0]);
}
});
};
const handleNextClick=()=>{
    setPageI(page +1)
    pagerRef.current.setPage(page);
}
return(
<PagerView  ref={pagerRef} style={{flex:1}}initialPage={0} onPageSelected={(e)=>setPageI(e.nativeEvent.position)}>
<View key="1">
<Page1 handleNextClick={handleNextClick} handleChoosePhoto={handleChoosePhoto} fileSource={fileSource} />
</View>
<View key="2">
<Page2 handleNextClick={handleNextClick} fileSource={fileSource} setText={setText}/>
</View>
<View key="3">
<Page3 handleNextClick={handleNextClick} fileData={fileData} text={text} setResultImageBase64String={setResultImageBase64String}/>
</View>
<View key="4">
<Page4 resultImageBase64String ={resultImageBase64String}/></View>
</PagerView>

);

}

export default FileUploadScreen;