import { transportItem } from "../type/types"

interface TransportProps {
  transport: transportItem
}

const Transport: React.FC<TransportProps> = ({ transport }) => {
  return (
    <div className="overflow-hidden bg-white rounded my-4 drop-shadow-lg hover:scale-110">
      <div className="px-4 py-5 sm:px-6 my-2">
        <div>{transport.name}</div>
        <div className="border-t border-gray-200"></div>
      </div>
    </div>
  )
}

export default Transport
