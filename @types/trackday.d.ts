import { DateTime } from 'luxon'

export type Trackday = {
  id: number
  date: DateTime
  track_map: string
  weather: string
  tire_pressure: string
  track: HasOne<typeof Track>
  chronos: HasMany<typeof Chrono>
  createdAt: DateTime
  updatedAt: DateTime
}
