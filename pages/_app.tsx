import "../styles/globals.css"
import type { AppProps } from "next/app"

const App = ({ Component, pageProps, ...otherProps }: AppProps) => {
  return (
      <Component {...pageProps} {...otherProps} />
  )
}

export default App
