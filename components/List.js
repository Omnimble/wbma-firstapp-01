import React from 'react';
import {StyleSheet, FlatList, PropTypes} from 'react-native';
import ListItem from './ListItem';

const List = (props) => {
  console.log(props);
  return (
    <FlatList
      data={props.mediaArray}
      renderItem={({item}) => <ListItem singleMedia={item} />}
    />
  );
};

List.propTypes = {
  mediaArray: PropTypes.array,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default List;
