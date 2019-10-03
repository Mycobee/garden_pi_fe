export const getRecordingTime = complexTime => {
  const date = new Date(complexTime)
  const hourRecorded = date.getHours();
  const minuteRecorded = date.getMinutes().toString();
  const formatMinute = () => {
    return minuteRecorded.length == 1 ?
    `0${date.getMinutes()}` :
    `${date.getMinutes()}`
  }
  const finalTimeRecorded = () => {
    if (hourRecorded >= 13) {
      return `${hourRecorded - 12}:${formatMinute()}PM`
    } else {
      return `${hourRecorded}:${formatMinute()}AM`
    }
  }
  return (
    finalTimeRecorded()
  )
};

export const getRecordingDay = complexTime => {
  const date = new Date(complexTime)
  const dayUnitRecorded = date.getDay();
  const dayRecorded = () => {
    switch(dayUnitRecorded) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5: 
        return 'Friday';
      case 6:
        return 'Saturday';
    }
  }
  return dayRecorded();
}

