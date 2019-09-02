import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../../components';
import styles from './styles';

export class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header} />
        <Text>APIKEY IGNORE TEST</Text>
      </View>
    )
  }
}

export default index
