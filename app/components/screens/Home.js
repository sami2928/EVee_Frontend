import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Home = ({route}) => {
  const {profile} = route.params;

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: '',
});
export default Home;
