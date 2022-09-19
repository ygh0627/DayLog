import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import FloatingWritebutton from '../components/FloatingWritebutton';
import LogContext from '../contexts/LogContext';

function FeedsScreen() {
  const {logs} = useContext(LogContext);

  return (
    <View style={styles.block}>
      <FloatingWritebutton />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
});

export default FeedsScreen;
