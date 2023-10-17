import React from "react";
import { Image , View} from "react-native";

function Page4({resultImageBase64String}) {

return (
<View style={{flex :1 , justifyContent:'center',alignItems:'center'}}>
{resultImageBase64String && (<Image source = {{uri:`data:image/jpeg;base64,${
resultImageBase64String}`}}style ={{width :300,height :300}}/>)}
</View>

);

}
export default Page4;