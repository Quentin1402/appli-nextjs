import Link from "next/link"
import { NavBarProps } from "../type/types"
import Button from "./Button"

const NavBar = (props: NavBarProps) => {
  const { title } = props
  return (
    <div>
      <Link href="/">
        <Button other_props={{ type: "button" }} variant="secondary" size="lg">
          Search Airport
        </Button>
      </Link>
      <Link href="/station">
        <Button other_props={{ type: "button" }} variant="secondary" size="lg">
          Stations finder
        </Button>
      </Link>
      <Link href="/searchFlights">
        <Button other_props={{ type: "button" }} variant="secondary" size="lg">
          Search Flights
        </Button>
      </Link>
    </div>
  )
}

export default NavBar
