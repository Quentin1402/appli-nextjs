import { useState } from "react"
import Layout from "../src/components/Layout"
import useApi from "../src/components/UseApi"
import Button from "../src/components/Button"
import Transport from "../src/components/Transport"

const SearchTransport = () => {
  const [city, setCity] = useState(undefined)
  const datas = useApi({}, "get", `/places?q=${city}`)
  const searchCity = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setCity(form.city.value)
  }

  return (
    <Layout title="Airports finder">
      <div>
        <form onSubmit={searchCity}>
          <h1 className="flex justify-center mb-4 text-4xl font-bold tracking-tight">
            Search City
          </h1>
          <div className="mb-3 grid gap-4">
            <div className="flex justify-between">
              <input
                required
                name="city"
                className="mx-2 p-3 rounded border-2"
                type="text"
                placeholder="origin..."
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
          </div>
        </form>
        {Array.isArray(datas) ? (
          <div>
            {datas.map((data) => (
              <Transport transport={data} />
            ))}
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </Layout>
  )
}

export default SearchTransport
