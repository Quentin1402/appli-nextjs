import { repoFilteredStation } from "../repository/getDatas"
import { StationItem } from "../type/types"

export const getFilteredStation = (search: string): StationItem[] => {
  return repoFilteredStation(search)
}

export default getFilteredStation
