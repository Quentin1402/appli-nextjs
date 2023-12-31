export type NavBarProps = {
  title: string
}

export type LayoutProps = {
  title: string
  children: any
}

export type ButtonProps = {
  variant: any
  size: any
  other_props: any
  children: any
}

export type AiportItem = {
  PlaceId: string
  CityName: string
  CountryName: string
  PlaceName: string
}

export type StationItem = {
  PlaceId: string
  CityName: string
  CountryName: string
  PlaceName: string
}

export type LegsDetails = [
  {
    origin: {
      display_code: string
      city?: string
    }
    destination: {
      display_code: string
      city?: string
    }
    departure: string
    arrival?: string
    duration?: string
  },
  {
    origin: {
      display_code: string
      city?: string
    }
    destination: {
      display_code: string
      city?: string
    }
    departure: string
    arrival?: string
    duration?: string
  }
]

export type Legs = [
  {
    origin: string
    destination: string
    date: string
  },
  {
    origin2: string
    destination2: string
    date2: string
  }
]

export type FlightItem = {
  id: string
  price: {
    amount: number
  }
  score: number
  totalDuration: number
  // legs: LegsDetails
}

export type UseFlightApiProps = {
  origin?: string
  destination?: string
  date?: string
  returnDate?: string
  adults?: string
  currency?: string
  countryCode?: string
  market?: string
  filter?: string
}

export type transportItem = {
  id: String
  name: String
}
