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
  const timeRecorded = `${hourRecorded}:${formatMinute()}`;
  return (
    timeRecorded
  )
};

