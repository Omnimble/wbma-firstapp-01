/* eslint-disable max-len */
import React from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  console.log(props);
  return (
    <TouchableOpacity style={styles.row}>
      <Image
        style={styles.image}
        source={{uri: props.singleMedia.thumbnails.w160}}
      />
      <View style={styles.textbox}>
        <Text style={styles.listTitle}>{props.singleMedia.title}</Text>
        <Text>{props.singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#ccc',
    marginBottom: 5,
    borderRadius: 16,
  },
  imagebox: {
    flex: 1,
  },
  image: {
    flex: 1,
    borderRadius: 16,
  },
  textbox: {
    flex: 2,
    padding: 10,
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
  },
});

export default ListItem;
