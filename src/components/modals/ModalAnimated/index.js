import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback, Animated, Dimensions } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { Conatainer, Content, Drawer, DrawerLine } from './styles';

const { height: screenHeight } = Dimensions.get('window');

const AnimatedContent = Animated.createAnimatedComponent(Content);
const modalTopDistance = screenHeight - screenHeight * 0.6;
const top = new Animated.Value(modalTopDistance);
const translationY = new Animated.Value(0);

export default function ItemModal({ children, visible, setVisible }) {
  const [containerStyle, SetContainerStyle] = useState();
  const [offsetY, setOffsetY] = useState(0);

  function getContainerStyle() {
    if (visible) {
      return {
        zIndex: 3,
        backgroundColor: 'rgba(0,0,0,0.3)',
      };
    }
    return {
      zIndex: 0,
      backgroundColor: '#fff',
    };
  }

  useEffect(() => {
    if (visible) {
      SetContainerStyle(getContainerStyle());
      Animated.spring(top, {
        toValue: modalTopDistance,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(top, {
        toValue: screenHeight,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        SetContainerStyle(getContainerStyle());
        translationY.setValue(0);
      });
    }
  }, [visible]);

  return (
    <>
      <Conatainer onPress={() => setVisible(false)} style={containerStyle}>
        <TouchableWithoutFeedback>
          <AnimatedContent
            style={{
              top,
              transform: [
                {
                  translateY: translationY.interpolate({
                    inputRange: [0, screenHeight],
                    outputRange: [0, screenHeight],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          >
            <PanGestureHandler
              onGestureEvent={({ nativeEvent }) => {
                translationY.setValue(nativeEvent.translationY + offsetY);
              }}
              onHandlerStateChange={({ nativeEvent }) => {
                if (
                  nativeEvent.oldState === State.ACTIVE &&
                  nativeEvent.translationY > 30
                ) {
                  setVisible(false);
                  setOffsetY(0);
                } else {
                  setOffsetY(nativeEvent.translationY + offsetY);
                }
              }}
            >
              <Drawer>
                <DrawerLine />
              </Drawer>
            </PanGestureHandler>
            {children}
          </AnimatedContent>
        </TouchableWithoutFeedback>
      </Conatainer>
    </>
  );
}
