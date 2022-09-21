import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import FeedListItem from './FeedListItem';

function FeedList({logs, setHidden, ListHeaderComponent}) {
  function onScroll(e) {
    if (!setHidden) {
      return;
    }
    const {
      contentOffset: b,
      layoutMeasurement: a,
      contentSize: total,
    } = e.nativeEvent;
    if (total.height > a.height && total.height - a.height - b.y < 72) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }
  return (
    <FlatList
      data={logs}
      style={styles.block}
      renderItem={({item}) => <FeedListItem log={item} />}
      keyExtractor={log => log.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onScroll={onScroll}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
  separatator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
});

export default FeedList;
