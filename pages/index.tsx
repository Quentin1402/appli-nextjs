import Layout from "../src/components/Layout"
import SearchAirport from "../src/components/SearchAirport"

const Home = () => {
  return (
    <>
      <Layout title="Airports finder">
        <SearchAirport />
      </Layout>
    </>
  )
}

export default Home
