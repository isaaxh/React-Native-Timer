import {TouchableOpacity} from 'react-native';
import React from 'react';
import TextNormal from './shared/texts/TextNormal';

type AddNewCountDownBtnProps = {
  onPress: () => void;
};

const AddNewCountDownBtn = ({onPress}: AddNewCountDownBtnProps) => {
  return (
    <TouchableOpacity className="mt-auto" onPress={onPress}>
      <TextNormal>Add New Countdown</TextNormal>
    </TouchableOpacity>
  );
};

export default AddNewCountDownBtn;
