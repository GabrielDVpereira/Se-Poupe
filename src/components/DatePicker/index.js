import React, { useState, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Entypo } from '@expo/vector-icons';
import { DatePickerContainer, Label } from './styles';
import getFormatedDateFromTimestamps from '../../utils/getFormatedDateFromTimestamps';

export default function DatePicker({ onChange }) {
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  console.log(datePickerVisible);
  useEffect(() => {
    onChange(selectedDate);
    setDatePickerVisible(false);
  }, [selectedDate]);

  return (
    <DatePickerContainer
      onPress={() => {
        setDatePickerVisible(true);
      }}
    >
      <Label active={!!selectedDate}>{selectedDate || 'Data'}</Label>
      {datePickerVisible && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={(selectedDate && new Date(selectedDate)) || new Date()}
          mode="date"
          is24Hour
          display="calendar"
          onChange={(event, date) => {
            const formatedDate = getFormatedDateFromTimestamps(date);
            console.log(formatedDate);
            setSelectedDate(date);
          }}
        />
      )}
      <Entypo name="calendar" size={26} />
    </DatePickerContainer>
  );
}
