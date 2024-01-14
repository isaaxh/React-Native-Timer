import React from 'react';
import {View} from 'react-native';
import {countDownObjectType} from '../screens/HomeScreen';
import {COLORS} from '../styles/colors';
import TextNormal from './shared/texts/TextNormal';

type TimeDisplayModalProps = {
  tempCountDown: countDownObjectType;
};

const TimeDisplayModal = ({tempCountDown}: TimeDisplayModalProps) => {
  return (
    <View className="mt-4 items-center">
      <View>
        <TextNormal color={COLORS.black}>Days: {tempCountDown.days}</TextNormal>
      </View>
      <TextNormal color={COLORS.black}>Hrs: {tempCountDown.hours}</TextNormal>
      <TextNormal color={COLORS.black}>
        Mins: {tempCountDown.minutes}
      </TextNormal>
      <TextNormal color={COLORS.black}>Sec: {tempCountDown.seconds}</TextNormal>
    </View>
  );
};

export default TimeDisplayModal;
