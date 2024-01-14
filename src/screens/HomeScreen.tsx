import {View, Modal} from 'react-native';
import React, {useEffect, useState} from 'react';
import TimeDisplay from '../components/TimeDisplay';
import TextHeader from '../components/shared/texts/TextHeader';
import {COLORS} from '../styles/colors';
import AddNewDateBtn from '../components/AddNewCountDown';
import ModalContent from '../components/ModalContent';
/* import DateTimePicker from '@react-native-community/datetimepicker'; */

export type countDownObjectType = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [counterLabel, setCounterLabel] = useState('Until New Beginning');
  const [countDown, setCountDown] = useState<countDownObjectType>({
    days: 0,
    hours: 0,
    minutes: 5,
    seconds: 0,
  });

  const handleModalBtnClick = () => {
    setModalVisible(true);
  };

  const handleCounterLabel = (newLabel: string) => {
    setCounterLabel(newLabel);
  };

  const handleCountDownUpdate = (newCountDown: countDownObjectType) => {
    setCountDown(newCountDown);
  };

  useEffect(() => {
    console.log('count down: ', countDown);
  }, [countDown]);

  return (
    <View className="items-center flex-1">
      <TextHeader color={COLORS.secondary}>{counterLabel}</TextHeader>
      <TimeDisplay countDown={countDown} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <ModalContent
          handleModalClose={() => setModalVisible(!modalVisible)}
          handleCounterLabel={handleCounterLabel}
          countDown={countDown}
          handleCountDownUpdate={handleCountDownUpdate}
        />
      </Modal>
      <AddNewDateBtn onPress={handleModalBtnClick} />
    </View>
  );
};

export default HomeScreen;
