import React, { useState, useContext } from 'react';
import { Animated } from 'react-native';
import { SimpleLineIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  Header,
  Title,
  Total,
  SpendProgressBar,
  Available,
  Unavailable,
  Progress,
  TotalContainer,
  NavigationIcon,
  FilterIcon,
  AppName,
} from './styles';
import FilterModal from '../modals/FilterModal';
import getFormatedValue from '../../utils/getFormatedValue';
import { SpendContext } from '../../contexts/SpendContext';

const AnimatedHeader = Animated.createAnimatedComponent(Header);
const AnimatedTotalContainer = Animated.createAnimatedComponent(TotalContainer);
const AnimatedAppName = Animated.createAnimatedComponent(AppName);

export default function HomeHeader({ headerOffset }) {
  // const navigation = useNavigation();
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const { totalSpent, spendLimit } = useContext(SpendContext);
  return (
    <>
      {/* <NavigationIcon onPress={() => navigation.openDrawer()}>
        <SimpleLineIcons name="menu" size={24} color="#fff" />
      </NavigationIcon> */}
      <FilterIcon onPress={() => setFilterModalVisible(true)}>
        <FontAwesome name="filter" size={24} color="#fff" />
      </FilterIcon>
      <AnimatedAppName
        style={{
          opacity: headerOffset.interpolate({
            inputRange: [100, 250],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          }),
        }}
      >
        Se Poupe
      </AnimatedAppName>
      <AnimatedHeader
        style={{
          transform: [
            {
              translateY: headerOffset.interpolate({
                inputRange: [0, 250],
                outputRange: [0, -120],
                extrapolate: 'clamp',
              }),
            },
          ],
          borderBottomLeftRadius: headerOffset.interpolate({
            inputRange: [100, 250],
            outputRange: [20, 0],
            extrapolate: 'clamp',
          }),
          borderBottomRightRadius: headerOffset.interpolate({
            inputRange: [100, 250],
            outputRange: [20, 0],
            extrapolate: 'clamp',
          }),
        }}
      >
        <AnimatedTotalContainer
          style={{
            opacity: headerOffset.interpolate({
              inputRange: [100, 250],
              outputRange: [1, 0],
              extrapolate: 'clamp',
            }),
          }}
        >
          <Title>Gasto total</Title>
          <Total>{getFormatedValue(totalSpent, 'money')}</Total>
          <SpendProgressBar>
            <Available />
            <Unavailable value={(totalSpent / spendLimit) * 100} />
            <Progress>{`${totalSpent}/${spendLimit}`}</Progress>
          </SpendProgressBar>
        </AnimatedTotalContainer>
      </AnimatedHeader>
      <FilterModal
        visible={filterModalVisible}
        setVisible={setFilterModalVisible}
      />
    </>
  );
}
