import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

export const getRecordingTime = complexTime => {
  const date = new Date(complexTime)
  const hourRecorded = date.getHours();
  const minuteRecorded = date.getMinutes().toString();
  const formatMinute = () => {
    return minuteRecorded.length == 1 
      ? `0${date.getMinutes()}` 
      : `${date.getMinutes()}`
  }
  const finalTimeRecorded = () => {
    if (hourRecorded >= 12) {
      return `${hourRecorded - 12}:${formatMinute()}PM`
    } else {
      return `${hourRecorded}:${formatMinute()}AM`
    }
  }
  return (
    finalTimeRecorded()
  )
};

