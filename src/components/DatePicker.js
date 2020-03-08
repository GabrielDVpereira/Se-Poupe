import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

export default function DatePicker({ show, showDatePicker }) {
  return (
    <View>
      <TouchableOpacity onPress={() => {}}>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={new Date()}
            mode="date"
            is24Hour
            display="calendar"
            onChange={(event, selectedDate) => {
              showDatePicker(false, moment(selectedDate).format('DD/MM/YYYY'));
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}
