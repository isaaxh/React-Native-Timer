import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {COLORS} from '../../styles/colors';

type CustomInputProps = {
  placeholder: string;
  label: string;
  setLabel: (newLabel: string) => void;
};

const CustomInput = ({placeholder, label, setLabel}: CustomInputProps) => {
  return (
    <TextInput
      style={styles.text}
      className="py-2 px-4 rounded mt-4 border border-gray-200"
      placeholder={placeholder}
      placeholderTextColor={COLORS.placeholder}
      value={label}
      onChangeText={setLabel}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLORS.black,
  },
});
export default CustomInput;
