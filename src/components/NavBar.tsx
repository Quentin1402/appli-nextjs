import Link from "next/link"
import { NavBarProps } from "../type/types"
import Button from "./Button"
import Text from "./Text"

const NavBar = (props: NavBarProps) => {
  const { title } = props
  return (
    <div className="flex justify-between">
      <div className="mb-8">
        <Link href="/">
          <Text variant="card_title" size="lg">
            {title}
          </Text>
        </Link>
      </div>
      <div>
        <Link href="/">
          <Button
            other_props={{ type: "button" }}
            variant="secondary"
            size="md"
          >
            Search Airport
          </Button>
        </Link>
        <Link href="/station">
          <Button
            other_props={{ type: "button" }}
            variant="secondary"
            size="md"
          >
            Stations finder
          </Button>
        </Link>
        <Link href="/searchFlights">
          <Button
            other_props={{ type: "button" }}
            variant="secondary"
            size="md"
          >
            Search Flights
          </Button>
        </Link>
        <Link href="/searchTransport">
          <Button
            other_props={{ type: "button" }}
            variant="secondary"
            size="md"
          >
            Search Transport
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default NavBar
