import {View} from 'react-native';
import React from 'react';
import TextHeader from './shared/texts/TextHeader';
import TextNormal from './shared/texts/TextNormal';

type TimeComponentProps = {
  timeComponent: number;
  timeLabel: string;
};

const TimeDisplay = ({timeComponent, timeLabel}: TimeComponentProps) => {
  return (
    <View className="items-center">
      <TextHeader>
        {timeComponent > 9 ? timeComponent : '0' + timeComponent}
      </TextHeader>
      <TextNormal>{timeLabel}</TextNormal>
    </View>
  );
};

export default TimeDisplay;
