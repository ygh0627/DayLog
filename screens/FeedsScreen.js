import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FeedList from '../components/FeedList';
import FloatingWritebutton from '../components/FloatingWritebutton';
import LogContext from '../contexts/LogContext';

function FeedsScreen() {
  const {logs} = useContext(LogContext);
  const [hidden, setHidden] = useState(false);
  return (
    <View style={styles.block}>
      <FeedList logs={logs} setHidden={setHidden} />
      <FloatingWritebutton hidden={hidden} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
});

export default FeedsScreen;
