import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Header = ({ fontsize }) => (
  <View style={{ flexDirection: "row" }}>
    <Text style={[styles.header, { color: "#E64C3C", fontSize: fontsize }]}>
      G
    </Text>
    <Text style={[styles.header, { color: "#FF9933", fontSize: fontsize }]}>
      A
    </Text>
    <Text style={[styles.header, { color: "#F1C431", fontSize: fontsize }]}>
      R
    </Text>
    <Text style={[styles.header, { color: "#187F03", fontSize: fontsize }]}>
      D
    </Text>
    <Text style={[styles.header, { color: "#3998DB", fontSize: fontsize }]}>
      E
    </Text>
    <Text style={[styles.header, { color: "#4b0082", fontSize: fontsize }]}>
      N
    </Text>
    <Text style={[styles.header, { color: '#7f00ff', fontSize: fontsize }]}>
      Pi
    </Text>
  </View>
);

export { Header };