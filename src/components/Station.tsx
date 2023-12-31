import { StationItem } from "../type/types"

interface StationProps {
  station: StationItem
}

const Station: React.FC<StationProps> = ({ station }) => {
  return (
    <div className="overflow-hidden bg-white rounded drop-shadow-lg">
      <div className="px-4 py-5 sm:px-6">
        <h1 className="text-lg font-medium leading-6 text-gray-900">
          City : {station.CityName}
        </h1>
        <div className="border-t border-gray-200">
          <dl>
            <h1 className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              Country name : {station.CountryName}
            </h1>
            <h1 className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              Place name : {station.PlaceName}
            </h1>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Station
