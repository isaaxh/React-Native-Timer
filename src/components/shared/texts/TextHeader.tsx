import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {COLORS} from '../../../styles/colors';

type TextHeaderProps = {
  children: React.ReactNode;
  color?: string;
  className?: string;
};

const TextHeader = ({children, color, className}: TextHeaderProps) => {
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
    fontSize: wp(7),
    marginTop: wp(3),
    fontWeight: 'bold',
  },
});

export default TextHeader;
