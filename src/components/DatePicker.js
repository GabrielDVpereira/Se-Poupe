import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

export default function DatePicker({ onChange }) {
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  console.log(datePickerVisible);
  useEffect(() => {
    onChange(selectedDate);
  }, [selectedDate]);

  return (
    <TouchableOpacity
      onPress={() => {
        setDatePickerVisible(true);
      }}
      style={{ width: 100 }}
    >
      <Text>{selectedDate || 'Data'}</Text>
      {datePickerVisible && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={new Date()}
          mode="date"
          is24Hour
          display="calendar"
          onChange={(event, selectedDate) => {
            setSelectedDate(moment(selectedDate).format('DD/MM/YYYY'));
            setDatePickerVisible(false);
          }}
        />
      )}
    </TouchableOpacity>
  );
}
