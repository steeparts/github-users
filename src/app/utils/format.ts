import isNil from 'lodash/isNil'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export const formDateTime = (date?: string | null): string => {
  if (!date || isNil(date)) {
    return '—'
  }
  const [d, time] = date.split('T')
  if (time === undefined) {
    return dayjs(d).format('DD.MM.YYYY')
  }

  const initialUtcOffset: string = time.split('+')[1]
  const utcOffset: number = initialUtcOffset
    ? parseInt(initialUtcOffset, 10)
    : 0

  return dayjs.utc(date).utcOffset(utcOffset).format('DD.MM.YYYY HH:mm:ss')
}