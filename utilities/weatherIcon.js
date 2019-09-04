import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

export const getWeatherIcon = condition => {
  switch(condition) {
    case 'partly-cloudy-day':
      return <Image 
        source={require('../assets/images/partly-cloudy.png')}
        style={styles.icon}
      />
    case 'rain':
      return <Image 
        source={require('../assets/images/rain.png')}
        style={styles.icon}
      />
    case 'cloudy':
        return <Image 
        source={require('../assets/images/cloudy.png')}
        style={styles.icon}
      />
    case 'clear-day':
        return <Image 
        source={require('../assets/images/sunny.png')}
        style={styles.icon}
      />
      case 'snow':
          return <Image 
          source={require('../assets/images/snow.png')}
          style={styles.icon}
        />
      case 'wind':
          return <Image 
          source={require('../assets/images/windy.png')}
          style={styles.icon}
        />
      case 'partly-cloudy-night':
          return <Image 
          source={require('../assets/images/partly-cloudy-night.png')}
          style={styles.icon}
        />
      case 'clear-night':
          return <Image 
          source={require('../assets/images/moon.png')}
          style={styles.icon}
        />
      case 'fog':
          return <Image 
          source={require('../assets/images/foggy.png')}
          style={styles.icon}
        />
    default:
      return <Image 
      source={require('../assets/images/warning.png')}
      style={styles.icon}
    />
  }
};

const styles = StyleSheet.create({  
  icon: {
    height: 65,
    width: 65
  }
})