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

export const getRecordingDay = complexTime => {
  const date = new Date(complexTime)
  const dayUnitRecorded = date.getDay();
  const dayRecorded = () => {
    switch(dayUnitRecorded) {
      case 0:
        return 'Sun';
      case 1:
        return 'Mon';
      case 2:
        return 'Tues';
      case 3:
        return 'Wed';
      case 4:
        return 'Thur';
      case 5: 
        return 'Fri';
      case 6:
        return 'Sat';
    }
  }
  return dayRecorded();
}

