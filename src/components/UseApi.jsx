import { useEffect, useState } from "react"
import { makeClient } from "../services/makeClient"

const UseApi = (defaultValue, method, ...args) => {
  const [result, setResult] = useState(defaultValue)
  const deps = JSON.stringify(args)

  useEffect(() => {
    ;(async () => {
      const { data } = await makeClient()[method](...args)
      setResult(data)
    })()
  }, [deps, method])

  return result
}

export default UseApi
