import { useState } from "react"
import Button from "../src/components/Button"
import Flight from "../src/components/Flight"
import Layout from "../src/components/Layout"
import FlightService from "../src/services/FlightService"
import { UseFlightApiProps } from "../src/type/types"

const SearchFlights = () => {
  const [flights, setFlights] = useState<UseFlightApiProps[]>([])

  const getFlights = async (e: React.FormEvent<HTMLFormElement>) => {
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

  return (
    <>
      <Layout title="Airports finder">
        <div className="flex justify-center">
          <div className="mt-10">
            <form onSubmit={getFlights}>
              <h1 className="flex justify-center mb-4 text-4xl font-bold tracking-tight">
                Search Flight
              </h1>
              <div className="mb-3 grid gap-4">
                <div className="flex justify-between">
                  <input
                    required
                    name="origin"
                    className="mx-2 p-3 rounded border-2"
                    type="text"
                    placeholder="origin..."
                  />
                  <input
                    name="destination"
                    className="mx-2 p-3 rounded border-2"
                    type="text"
                    placeholder="destination..."
                  />
                </div>
                <div className="flex justify-between">
                  <div className="grid">
                    <label className="ml-4">Aller</label>
                    <input
                      name="date"
                      className="mx-2 p-3 rounded border-2"
                      type="date"
                      placeholder="date..."
                    />
                  </div>
                  <div className="grid">
                    <label className="ml-4">Retour</label>
                    <input
                      name="returnDate"
                      className="mx-2 p-3 rounded border-2"
                      type="date"
                      placeholder="returnDate..."
                    />
                  </div>
                </div>
                <input
                  name="adults"
                  className="mx-2 p-3 rounded border-2"
                  type="number"
                  placeholder="passager..."
                />
                <div>
                  <Button
                    other_props={{ type: "submit" }}
                    variant="btnValidation"
                    size="lg"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </form>
            <div className="bg-zinc-200 mb-4">
              {flights.map((flight, index) => (
                <Flight key={index} flight={flight} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default SearchFlights
