/* eslint-disable max-len */
import React from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, View, PropTypes} from 'react-native';

const ListItem = (props) => {
  console.log(props);
  return (
    <TouchableOpacity>
      <Image
        style={{width: 100, height: 100}}
        source={{uri: props.singleMedia.thumbnails.w160}}
      />
      <View>
        <Text>{props.singleMedia.title}</Text>
        <Text>{props.singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ListItem;
