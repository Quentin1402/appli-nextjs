import airportsData from "../data/airports.json"
import { AiportItem, StationItem, UseFlightApiProps } from "../type/types"
import flightsData from "../data/flights.json"
import stationData from "../data/station.json"

export const repoFilteredAirports = (search: string): AiportItem[] => {
  return airportsData.filter(
    (airport) =>
      airport.CityName.toLowerCase().includes(search.toLowerCase()) ||
      airport.CountryName.toLowerCase().includes(search.toLowerCase())
  )
}

export const repoFilteredFlights = (filterProps: UseFlightApiProps) => {
  return flightsData.filter((flight) => {
    if (
      filterProps.origin &&
      !flight.origin.toLowerCase().includes(filterProps.origin.toLowerCase())
    ) {
      return false
    }

    if (
      filterProps.destination &&
      !flight.destination
        .toLowerCase()
        .includes(filterProps.destination.toLowerCase())
    ) {
      return false
    }

    if (filterProps.date && flight.date !== filterProps.date) {
      return false
    }

    if (
      filterProps.returnDate &&
      flight.returnDate !== filterProps.returnDate
    ) {
      return false
    }

    if (
      filterProps.adults &&
      parseInt(flight.adults) !== parseInt(filterProps.adults)
    ) {
      return false
    }

    return true
  })
}

export const repoFilteredStation = (search: string): StationItem[] => {
  return stationData.filter(
    (station) =>
      station.CityName.toLowerCase().includes(search.toLowerCase()) ||
      station.CountryName.toLowerCase().includes(search.toLowerCase())
  )
}
