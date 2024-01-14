import {
  TouchableOpacity,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../styles/colors';

type ModalButtonProps = {
  children: React.ReactNode;
  variant: 'fill' | 'outline';
  color: string;
  onPress: () => void;
};

const ModalButton = ({children, variant, onPress}: ModalButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        variant === 'fill'
          ? (styles.variantFill as StyleProp<ViewStyle>)
          : (styles.variantOutline as StyleProp<ViewStyle>)
      }
      className="mt-8 py-2 px-6 rounded w-1/2 cursor-pointer">
      <Text
        style={
          variant === 'fill'
            ? (styles.textFill as StyleProp<ViewStyle>)
            : (styles.textOutline as StyleProp<ViewStyle>)
        }
        className="text-center">
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  variantFill: {
    backgroundColor: COLORS.black,
  },
  textFill: {
    color: COLORS.white,
  },
  variantOutline: {
    /* borderWidth: 1, */
    /* borderColor: COLORS.black, */
  },
  textOutline: {
    color: COLORS.black,
  },
});

export default ModalButton;
