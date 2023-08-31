import FlightService from "../services/FlightService"
import { UseFlightApiProps } from "../../src/type/types"

export const getFlights = async (
  e: React.FormEvent<HTMLFormElement>,
  setFlights: (flights: UseFlightApiProps[]) => void
) => {
  e.preventDefault()
  const form = e.currentTarget
  const props: UseFlightApiProps = {
    origin: form.origin.value,
    destination: form.destination.value,
    date: form.date.value,
    returnDate: form.returnDate.value,
    adults: form.adults.value,
    currency: "EUR",
    countryCode: "FR",
    market: "fr-FR",
    filter: "price",
  }
  setFlights(FlightService(props))
}
