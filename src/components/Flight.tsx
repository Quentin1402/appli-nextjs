import { UseFlightApiProps } from "../type/types"
import { ArrowLongRightIcon } from "@heroicons/react/24/solid"

interface FlightProps {
  flight: UseFlightApiProps
}

const Flight: React.FC<FlightProps> = ({ flight }) => {
  return (
    <div className="overflow-hidden bg-white rounded my-4 drop-shadow-lg hover:scale-110">
      <div className="px-4 py-5 sm:px-6 my-2">
        <h1 className="text-lg font-medium leading-6 text-gray-900 inline">
          {flight.origin}{" "}
          <span className="inline">
            <ArrowLongRightIcon className="h-6 w-6 text-blue-500 inline" />
          </span>{" "}
          {flight.destination}
        </h1>

        <div className="border-t border-gray-200">
          <dl className="mt-2">
            <h1 className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <span className="font-bold">nb of persons :</span> {flight.adults}
            </h1>
            <h1 className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <span className="font-bold">Date :</span> {flight.date}
              <span className="inline font-bold"> to </span>
              {flight.returnDate}
            </h1>
            <h1 className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <span className="font-bold">Class : </span>
              {flight.filter}
            </h1>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Flight
