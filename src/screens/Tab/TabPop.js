import React from 'react';
import {
  Dimensions,
  Alert,
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import CaptureButton from '../Components/CaptureButton.js';
import {Actions} from 'react-native-router-flux';
export default class Camera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifedAs: 'basic',
      loading: false,
      good: true,
    };
  }

  takePicture = async function() {
    if (this.camera) {
      // Pause the camera's preview
      this.camera.pausePreview();

      // Set the activity indicator
      this.setState((previousState, props) => ({
        loading: true,
      }));

      // Set options
      const options = {
        base64: true,
      };

      // Get the base64 version of the image
      const data = await this.camera.takePictureAsync(options);

      // Get the identified image
      this.identifyImage(data.base64);
    }
  };

  identifyImage(imageData) {
    // Initialise Clarifai api
    const Clarifai = require('clarifai');

    const app = new Clarifai.App({
      apiKey: 'd3d73668cdd444a6aaf7892e6025a549',
    });

    // Identify the image
    app.models
      .predict(Clarifai.GENERAL_MODEL, {base64: imageData})
      .then(response =>
        this.displayAnswer(response.outputs[0].data.concepts).catch(err =>
          alert(err),
        ),
      );
  }

  displayAnswer(identifiedImage) {
    this.setState({good:false})
    identifiedImage.map((key, value) => {
      if (identifiedImage[value].name === 'dog') {
        this.setState((prevState, props) => ({
          loading: false,
          good: true,
        }));
        Actions.pop();
        return;
      } 
    });
    // Dismiss the acitivty indicator


    this.setState((prevState, props) => ({
      loading: false,
    }));
    // Resume the preview
    this.camera.resumePreview();
    if(this.state.good === false) {
      Alert.alert('반려동물 사진이 아닙니다. \n다시 찍어주세요!', '', {
        cancelable: false,
      });
    }

  }

  render() {
    return (
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.preview}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: '',
            paddingTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => Actions.pop()}
            style={{width: 50, height: 50}}>
            <Text style={{color: 'white', fontSize: 50}}>✕</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.parent}>
          <Image
            onPress={this.props.onClick}
            disabled={this.props.buttonDisabled}
            style={{height: 200, width: 200, resizeMode: 'contain'}}
            source={require('../../assets/camera_guide.png')}
          />
          {/* <Text style={styles.did}>{this.state.identifedAs}</Text> */}
        </View>
        <ActivityIndicator
          size="large"
          style={styles.loadingIndicator}
          color="#fff"
          animating={this.state.loading}
        />
        <CaptureButton
          buttonDisabled={this.state.loading}
          onClick={this.takePicture.bind(this)}
        />
      </RNCamera>
    );
  }
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  loadingIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  did: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  parent: {
    flex: 1,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
