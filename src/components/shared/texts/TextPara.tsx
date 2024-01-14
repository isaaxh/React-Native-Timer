import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {COLORS} from '../../../styles/colors';

type TextParaProps = {
  children: React.ReactNode;
  color?: string;
  className?: string;
};

const TextPara = ({children, color, className}: TextParaProps) => {
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
    fontSize: wp(2),
  },
});

export default TextPara;
