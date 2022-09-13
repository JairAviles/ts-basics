import { subDays, format } from 'date-fns'

const date = new Date(1990, 5, 19)
const rta = subDays(date, 30)
const str = format(rta, 'yyyy/MM/dd')

console.log(`Date: ${str}`)
