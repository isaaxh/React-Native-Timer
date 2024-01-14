import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import React, {memo, useState} from 'react';
import TextNormal from './shared/texts/TextNormal';
import {COLORS} from '../styles/colors';
import {
  widthPercentageToDP as wp,
  /* heightPercentageToDP as hp, */
} from 'react-native-responsive-screen';
import ModalButton from './shared/CustomButtons/ModalButton';
import CustomInput from './shared/CustomInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import {countDownObjectType} from '../screens/HomeScreen';
import TextPara from './shared/texts/TextPara';
import TimeDisplayModal from './TimeDisplayModal';

type ModalContentProps = {
  handleModalClose: () => void;
  handleCounterLabel: (newLabel: string) => void;
  countDown: countDownObjectType;
  handleCountDownUpdate: (newCountDown: countDownObjectType) => void;
};

const ModalContent = ({
  handleModalClose,
  handleCounterLabel,
  countDown,
  handleCountDownUpdate,
}: ModalContentProps) => {
  const [label, setLabel] = useState('');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<'date' | 'time'>('date');
  const [show, setShow] = useState(false);
  const [tempCountDown, setTempCountDown] =
    useState<countDownObjectType>(countDown);
  const [message, setMessage] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);

    let tempDate = new Date(currentDate);

    calculateTimeLeft(tempDate);

    setShow(false);
  };

  const showMode = (currentMode: 'date' | 'time') => {
    setMode(currentMode);
    setShow(true);
  };

  const calculateTimeLeft = (tempDate: Date) => {
    const timeDifference = tempDate.getTime() - new Date().getTime();
    let delta = Math.abs(timeDifference) / 1000;
    const daysLeft = Math.floor(delta / 86400);
    delta -= daysLeft * 86400;
    const hoursLeft = Math.floor(delta / 3600) % 24;
    delta -= hoursLeft * 3600;
    const minutesLeft = Math.floor(delta / 60) % 60;
    delta -= minutesLeft * 60;
    const secondsLeft = delta % 60;

    let tempCount = {...countDown};

    tempCount.days = daysLeft;
    tempCount.hours = hoursLeft;
    tempCount.minutes = minutesLeft;
    tempCount.seconds = Math.floor(secondsLeft);

    setTempCountDown(tempCount);
  };

  const saveNewCountDown = () => {
    if (label === '') {
      setMessage('Label cannot be empty');
      return;
    }
    setMessage('');
    handleCounterLabel(label);
    handleCountDownUpdate(tempCountDown);
    handleModalClose();
  };

  return (
    <View className="h-full justify-center items-center">
      <View
        style={[styles.modal, {width: wp(70)}]}
        className="bg-teal-400 p-6 rounded">
        <View className="flex-row justify-between">
          <TextNormal color={COLORS.black}>New Count Down</TextNormal>
          <TouchableOpacity onPress={handleModalClose}>
            <Text style={{color: COLORS.placeholder}}>X</Text>
          </TouchableOpacity>
        </View>
        <CustomInput placeholder="Title" label={label} setLabel={setLabel} />
        {message !== '' && <TextPara color={COLORS.error}>{message}</TextPara>}
        <TimeDisplayModal tempCountDown={tempCountDown} />
        <View className="flex-row justify-around">
          <ModalButton
            onPress={() => showMode('date')}
            variant="outline"
            color={COLORS.black}>
            Date
          </ModalButton>
          <ModalButton
            onPress={() => showMode('time')}
            variant="outline"
            color={COLORS.black}>
            Time
          </ModalButton>
        </View>
        <View className="flex-row justify-around">
          <ModalButton
            onPress={handleModalClose}
            variant="outline"
            color={COLORS.black}>
            Cancel
          </ModalButton>
          <ModalButton
            onPress={saveNewCountDown}
            variant="fill"
            color={COLORS.black}>
            Save
          </ModalButton>
        </View>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          minimumDate={new Date()}
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: COLORS.white,
  },
});

export default ModalContent;
