/* eslint-disable indent */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import List from '../components/List';

const Home = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <List navigation={navigation}></List>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {

    top: 0,
    zIndex: 1,
    width: 400,
    height: 400,
  },
  container: {
    paddingTop: 40,
    backgroundColor: 'darkred',
  },
});

export default Home;
