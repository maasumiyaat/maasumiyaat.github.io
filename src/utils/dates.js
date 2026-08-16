const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

function parsePoint(str) {
  const s = str.trim()
  if (s === 'Present') {
    const now = new Date()
    return now.getFullYear() * 12 + now.getMonth()
  }
  const [mon, year] = s.split(' ')
  return parseInt(year, 10) * 12 + MONTHS.indexOf(mon)
}

// Splits a "Mon YYYY — Mon YYYY" / "Mon YYYY — Present" range into its two points.
export function splitRange(range) {
  const [start, end] = range.split('—').map(s => s.trim())
  return { start, end: end ?? start }
}

export function monthsBetween(startStr, endStr) {
  return parsePoint(endStr) - parsePoint(startStr) + 1
}

export function formatDuration(totalMonths) {
  const yrs = Math.floor(totalMonths / 12)
  const mos = totalMonths % 12
  const parts = []
  if (yrs) parts.push(`${yrs} yr${yrs > 1 ? 's' : ''}`)
  if (mos || !yrs) parts.push(`${mos} mo${mos !== 1 ? 's' : ''}`)
  return parts.join(' ')
}
