/* eslint-disable indent */
/* eslint-disable max-len */
import React from 'react';
import {StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

const mediaURL = 'http://media.mw.metropolia.fi/wbma/uploads/';

const ListItem = (props) => {
  console.log('list item props', props);
  return (
    <TouchableOpacity style={styles.row}>
      <View style={styles.textbox}>
        <Image
          style={styles.image}
          source={{uri: mediaURL + props.singleMedia.filename}}
        />
      </View>
      <View style={styles.textbox}>
        <Text style={styles.listTitle}>{props.singleMedia.title}</Text>
        <Text style={styles.listDescription}>{props.singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    marginTop: 20,
    bottom: 0,
  },
  row: {
    flexDirection: 'row-reverse',
    padding: 15,
    backgroundColor: 'rgba(238,238,238, 0.85)',
    margin: 10,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 2,
  },
  imagebox: {
    flex: 1,
  },
  image: {
    flex: 1,
    borderRadius: 50,
  },
  textbox: {
    flex: 2,
    padding: 10,
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    paddingBottom: 10,
    color: 'darkred',
  },
  listDescription: {
    fontStyle: 'italic',
    fontSize: 16,
    paddingBottom: 10,
  },
});

export default ListItem;
