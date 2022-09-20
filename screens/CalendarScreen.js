import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import LogContext from '../contexts/LogContext';
import CalendarView from './CalendarView';
import {format} from 'date-fns';
function CalendarScreen() {
  const {logs} = useContext(LogContext);
  const markedDates = logs.reduce((acc, cur) => {
    const formattedDate = format(new Date(cur.date), 'yyyy-MM-dd');
    acc[formattedDate] = {marked: true};
    return acc;
  }, {});
  return <CalendarView markedDates={markedDates} />;
}

const styles = StyleSheet.create({
  block: {},
});

export default CalendarScreen;
