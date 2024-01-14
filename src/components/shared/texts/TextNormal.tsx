import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {COLORS} from '../../../styles/colors';

type TextNormalProps = {
  children: React.ReactNode;
  color?: string;
  className?: string;
};

const TextNormal = ({children, color, className}: TextNormalProps) => {
  return (
    <Text
      style={[styles.text, {color: color ? color : COLORS.white}]}
      className={className}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Regular',
    fontWeight: 'normal',
    fontSize: wp(4),
  },
});

export default TextNormal;
