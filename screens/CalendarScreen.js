import React, {useContext, useMemo, useState} from 'react';
import {StyleSheet} from 'react-native';
import LogContext from '../contexts/LogContext';
import CalendarView from './CalendarView';
import {format} from 'date-fns';
import FeedList from '../components/FeedList';
function CalendarScreen() {
  const {logs} = useContext(LogContext);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );
  const markedDates = useMemo(
    () =>
      logs.reduce((acc, cur) => {
        const formattedDate = format(new Date(cur.date), 'yyyy-MM-dd');
        acc[formattedDate] = {marked: true};
        return acc;
      }, {}),
    [logs],
  );
  const filteredLogs = logs.filter(
    log => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate,
  );
  return (
    <FeedList
      logs={filteredLogs}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  block: {},
});

export default CalendarScreen;
