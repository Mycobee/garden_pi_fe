import { getRecordingDay } from './TimeCalculator'

export const getDailyAverages = (data) => {
  data.map(datum => {
    const date = new Date(datum['attributes'].created_at)
    const month = date.getMonth() + 1;
    const day = date.getDate()
    const newData = {
      date: `${month}/${day}`,
      weekDay: getRecordingDay(datum['attributes'].created_at),
      moisture: datum['attributes'].soil_moisture,
      temperature: datum['attributes'].soil_temperature
    }
    return newData
  });
  const yesterdayDate = new Date()
  const yesterdayDay = yesterdayDate.getDate() - 1;
  const yesterdayMonth = yesterdayDate.getMonth() + 1;
  const sortingDate = `${yesterdayMonth}/${yesterdayDay}`;
};
