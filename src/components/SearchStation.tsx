import { StationItem } from "../type/types"
import { useState } from "react"
import { getFilteredStation } from "../services/stationService"
import Button from "./Button"
import Station from "./Station"

const SearchStation = () => {
  const [stations, setStation] = useState<StationItem[]>([])
  const [search, setSearch] = useState<string>("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const filteredStation = getFilteredStation(search)
    setStation(filteredStation)
  }

  return (
    <div className="flex justify-center">
      <div className=" h-auto w-96 mt-10 grid grid-cols-1 gap-4">
        <form onSubmit={handleSubmit}>
          <h1 className="flex justify-center mb-4 text-4xl font-bold tracking-tight">
            Search Station
          </h1>
          <div className="grid grid-rows-2 grid-flow-col gap-4 mb-3">
            <input
              onChange={handleChange}
              className="border-2 text-2xl border-gray-500 rounded p-2 text-gray-700 font-bold"
              type="text"
              placeholder="city name or country name..."
              value={search}
            />
            <div>
              <Button
                other_props={{ type: "submit" }}
                variant="btnValidation"
                size="lg"
              >
                Search Station
              </Button>
            </div>
          </div>
        </form>
        {stations.map((station) => (
          <Station key={station.PlaceId} station={station} />
        ))}
      </div>
    </div>
  )
}

export default SearchStation
