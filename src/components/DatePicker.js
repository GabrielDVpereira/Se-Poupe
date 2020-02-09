import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'; 


export default function DatePicker({show, showDatePicker}){

    return(
        <View>
            <TouchableOpacity onPress = {()=> {}}>
                <Text>Open calendar</Text>
                { show && <DateTimePicker
                            testID="dateTimePicker"
                            timeZoneOffsetInMinutes={0}
                            value={new Date()}
                            mode={'date'}
                            is24Hour={true}
                            display="calendar"
                            onChange={(event, selectedDate) => {
                                showDatePicker(false, moment(selectedDate).format('DD/MM/YYYY'));
                            }}/>
                }
            </TouchableOpacity>
        </View> 
    );
}