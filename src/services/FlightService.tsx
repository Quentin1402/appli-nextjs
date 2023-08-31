import { repoFilteredFlights } from "../repository/getDatas"
import { UseFlightApiProps } from "../type/types"

const FlightService = (filterProps: UseFlightApiProps) => {
  return repoFilteredFlights(filterProps)
}

export default FlightService
