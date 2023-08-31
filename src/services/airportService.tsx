import { AiportItem } from "../type/types"
import airportsData from "../data/airports.json"

export const getFilteredAirports = (search: string): AiportItem[] => {
  const filteredAirports = airportsData.filter(
    (airport) =>
      airport.CityName.toLowerCase().includes(search.toLowerCase()) ||
      airport.CountryName.toLowerCase().includes(search.toLowerCase())
  )

  return filteredAirports
}

export default getFilteredAirports
