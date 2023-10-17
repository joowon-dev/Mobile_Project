import React from "react";
import { View } from "react-native";
import Video from 'react-native-video'; // Import the Video component


function Page4({ videoUrl }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {videoUrl && (
        <Video 
          source={{ uri: videoUrl }}
          style={{ width: 300, height: 300 }}
          controls={true}
        />
      )}
    </View>
  );
}

export default Page4;