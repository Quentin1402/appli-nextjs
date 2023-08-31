import { repoFilteredAirports } from "../repository/getDatas"
import { AiportItem } from "../type/types"

export const getFilteredAirports = (search: string): AiportItem[] => {
  return repoFilteredAirports(search)
}

export default getFilteredAirports
