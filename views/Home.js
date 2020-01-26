/* eslint-disable indent */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import List from '../components/List';
import mediaAPI from '../hooks/APIHooks';
import PropTypes from 'prop-types';

const Home = (props) => {
  const {navigation} = props;
  const {getUserFromToken} = mediaAPI();
  getUserFromToken();
  const {userToContext} = mediaAPI();
  userToContext().then((user) => {
    console.log('usercontext', user);
  });
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

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
