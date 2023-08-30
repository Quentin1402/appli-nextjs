import Link from "next/link"
import { NavBarProps } from "../type/types"
import Button from "./Button"

const NavBar = (props: NavBarProps) => {
  const { title } = props

  return (
    <div>
      <Link href="/">
        <Button type="button" variant="secondary" size="lg">
          {title}
        </Button>
      </Link>
      <Link href="/station">
        <Button type="button" variant="secondary" size="lg">
          Stations finder
        </Button>
      </Link>
    </div>
  )
}

export default NavBar
