import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../styles/colors';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

type CustomDatePickerProps = {
  date: Date;
  mode: 'date' | 'time';
  onChange: (event: DateTimePickerEvent, date?: Date) => void;
};

const CustomDatePicker = ({date, mode, onChange}: CustomDatePickerProps) => {
  return <View></View>;
};

const styles = StyleSheet.create({
  dateInput: {
    /* width: undefined, */
    /* flexDirection: 'row', */
    /* flexGrow: 1, */
    backgroundColor: COLORS.black,
  },
});

export default CustomDatePicker;
