import React, { useState, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Entypo } from '@expo/vector-icons';
import moment from 'moment';
import { DatePickerContainer, Label } from './styles';

export default function DatePicker({ onChange }) {
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    onChange(selectedDate);
  }, [selectedDate]);

  return (
    <DatePickerContainer
      onPress={() => {
        setDatePickerVisible(true);
      }}
    >
      <Label active={!!selectedDate}>
        {(selectedDate && moment(selectedDate).format('DD/MM/YYYY')) || 'Data'}
      </Label>
      {datePickerVisible && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={selectedDate || new Date()}
          mode="date"
          is24Hour
          display="calendar"
          onChange={(event, date) => {
            setDatePickerVisible(false);
            setSelectedDate(date);
          }}
        />
      )}
      <Entypo name="calendar" size={26} />
    </DatePickerContainer>
  );
}
