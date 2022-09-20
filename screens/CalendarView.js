import React from 'react';
import {StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';
function CalendarView({markedDates}) {
  return (
    <Calendar
      markedDates={markedDates}
      style={styles.calendar}
      theme={{
        selectedDayBackgroundColor: '#009688',
        arrowColor: '#009688',
        dotColor: '#009688',
        todayTextColor: '#009688',
      }}
    />
  );
}

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

export default CalendarView;
