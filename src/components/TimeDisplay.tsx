import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {countDownObjectType} from '../screens/HomeScreen';
import TimeComponent from './TimeComponent';

type TimeDisplayProps = {
  countDown: countDownObjectType;
};

const TimeDisplay = ({countDown}: TimeDisplayProps) => {
  const [seconds, setSeconds] = useState(countDown.seconds);
  const [minutes, setMintues] = useState(countDown.minutes);
  const [hours, setHours] = useState(countDown.hours);
  const [days, setDays] = useState(countDown.days);

  useEffect(() => {
    setSeconds(countDown.seconds);
    setMintues(countDown.minutes);
    setHours(countDown.hours);
    setDays(countDown.days);
  }, [countDown]);

  useEffect(() => {
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      console.log('timer stopped');
      return;
    }

    const timer = setInterval(() => {
      setSeconds(prevSec => prevSec - 1);

      if (seconds < 2 && minutes > 0) {
        setMintues(prevMin => prevMin - 1);
        setSeconds(59);
      }

      if (minutes < 2 && hours > 0) {
        setHours(prevHours => prevHours - 1);
        setMintues(59);
        setSeconds(59);
      }

      if (hours === 0 && days > 0) {
        setDays(prevDays => prevDays - 1);
        setHours(23);
        setMintues(59);
        setSeconds(59);
      }
      console.log('timer running');
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, minutes, hours, days]);

  return (
    <View className="flex-row w-full justify-around mt-5">
      <TimeComponent timeComponent={days} timeLabel="Days" />
      <TimeComponent timeComponent={hours} timeLabel="Hours" />
      <TimeComponent timeComponent={minutes} timeLabel="Minutes" />
      <TimeComponent timeComponent={seconds} timeLabel="Seconds" />
    </View>
  );
};

export default TimeDisplay;
