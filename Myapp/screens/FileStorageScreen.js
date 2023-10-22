import React, { useState, useEffect, useCallback } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  Modal,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { getStorage, ref, getDownloadURL, listAll } from 'firebase/storage';
import { app } from '../components/firebase/firebaseconfig';

function FileStorageScreen() {
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchImages = useCallback(async () => {
    const storageRef = getStorage(app);
    const uploadRef = ref(storageRef, 'uploads');

    try {
      const result = await listAll(uploadRef);
      const urlPromises = result.items.map((item) => getDownloadURL(item));
      const urls = await Promise.all(urlPromises);
      setImageUrls(urls);
    } catch (error) {
      console.error('Error fetching images: ', error);
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>File Storage!</Text>
        <TouchableOpacity style={styles.button} onPress={fetchImages}>
          <Text style={styles.buttonText}>Refresh</Text>
        </TouchableOpacity>
        <FlatList
          data={imageUrls}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.imageContainer}
              onPress={() => {
                setSelectedImage(item);
                setModalVisible(true);
              }}
            >
              <Image source={{ uri: item }} style={styles.imageThumbnail} resizeMode="cover" />
            </TouchableOpacity>
          )}
        />
        {modalVisible && (
          <Modal animationType="slide" transparent={false} visible={modalVisible}>
            <TouchableOpacity
              style={styles.centeredView}
              onPress={() => setModalVisible(false)}
            >
              <Image source={{ uri: selectedImage }} style={styles.modalImage} />
            </TouchableOpacity>
          </Modal>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1E293B',
  },
  container: {
    flex: 1,
    backgroundColor: '#1E293B',
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 1,
    margin: 5,
    aspectRatio: 1,
  },
  imageThumbnail: {
    flex: 1,
    width: null,
    height: null,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: '90%',
    height: '80%',
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default FileStorageScreen;
