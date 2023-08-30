import { StationItem } from "../type/types";
import stationData from "../data/station.json";

export const getFilteredStation = (search: string): StationItem[] => {
  const filteredStation = stationData.filter((station) =>
    (station.CityName.toLowerCase().includes(search.toLowerCase()) || station.CountryName.toLowerCase().includes(search.toLowerCase()))
  );

  return filteredStation;
};

export default getFilteredStation;