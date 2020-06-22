import React from 'react';
import { View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

export default function ConfirmationModal() {
  return (
    <PanGestureHandler
      onGestureEvent={({ nativeEvent }) => console.log(nativeEvent)}
    >
      <View
        style={{
          backgroundColor: '#ccc',
          alignSelf: 'center',
          position: 'absolute',
          zIndex: 5,
          width: 100,
          height: 100,
        }}
      />
    </PanGestureHandler>
  );
}
