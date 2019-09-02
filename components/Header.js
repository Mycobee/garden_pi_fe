import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const Header = () => (
  <View style={{ flexDirection: "row" }}>
    <Text style={[styles.header, { color: "#E64C3C"}]}>G</Text>
    <Text style={[styles.header, { color: "#E57E31"}]}>A</Text>
    <Text style={[styles.header, { color: "#F1C431"}]}>R</Text>
    <Text style={[styles.header, { color: "#68CC73"}]}>D</Text>
    <Text style={[styles.header, { color: "#3998DB"}]}>E</Text>
    <Text style={[styles.header, { color: "#4b0082"}]}>N</Text>
    <Text style={styles.header}>Pi</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 70

  }
})

export { Header };