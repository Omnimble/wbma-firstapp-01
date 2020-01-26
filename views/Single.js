/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image} from 'react-native';

const mediaURL = 'http://media.mw.metropolia.fi/wbma/uploads/';

const Single = (props) => {
  const filename = props.navigation.getParam('filename', 'Img not found.');
  console.log('Img filename: ' + filename);
  return (
    <View style={styles.container}>
      <Text stlye={styles.title}>
        {props.navigation.getParam('title', 'No title')}
      </Text>
      <Image stlye={styles.image}
        source={{uri: mediaURL + filename}}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});


export default Single;
