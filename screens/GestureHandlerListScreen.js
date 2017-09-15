import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FancyButton from './GestureHandler/FancyButton';
import BouncyBox from './GestureHandler/BouncyBox';

export default class GestureHandlerListScreen extends Component {
  static navigationOptions = {
    title: 'Gesture Handler List',
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>
          LongPressGestureHandler, TapGestureHandler
        </Text>
        <Text style={styles.paragraph}>
          You can single tap, double tap, or long press these buttons!
        </Text>
        <FancyButton
          onSingleTap={() => alert('Single tap')}
          onDoubleTap={() => alert('Double tap')}
          onLongPress={() => alert('Long press')}>
          <Text>Try this button out!</Text>
        </FancyButton>

        <View style={{ marginTop: 20 }} />

        <FancyButton
          onSingleTap={() => alert('Single tap #2!')}
          onDoubleTap={() => alert('Double tap #2!')}
          onLongPress={() => alert('Long press #2!')}>
          <Text>A second fancy button!</Text>
        </FancyButton>

        <Text style={styles.title}>
          PanGestureHandler, RotationGestureHandler
        </Text>
        <Text style={styles.paragraph}>
          You can drag it left and right, and also use two fingers to rotate it,
          and it'll bounce back!
        </Text>

        <BouncyBox />
        <View style={{ marginTop: 20 }} />
        <BouncyBox style={{ backgroundColor: 'orange' }} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  title: {
    marginTop: 35,
    fontSize: 25,
    marginBottom: 5,
  },
  paragraph: {
    color: '#888',
    fontSize: 15,
    marginBottom: 20,
  },
});