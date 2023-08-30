import { UseFlightApiProps } from "../type/types"
import flightsData from "../data/flights.json"

const FlightService = (filterProps: UseFlightApiProps) => {
  const filteredFlights = flightsData.filter((flight) => {
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

  return filteredFlights
}

export default FlightService
