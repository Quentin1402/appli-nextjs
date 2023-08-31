import { useState } from "react"
import Layout from "../src/components/Layout"
import useApi from "../src/components/UseApi"
import Button from "../src/components/Button"

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
              <div className="overflow-hidden bg-white rounded my-4 drop-shadow-lg hover:scale-110">
                <div className="px-4 py-5 sm:px-6 my-2">
                  <div key={data.id}>{data.name}</div>
                  <div className="border-t border-gray-200"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h1>titi</h1>
        )}
      </div>
    </Layout>
  )
}

export default SearchTransport
