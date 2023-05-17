import "@/styles/globals.css"
import NavBar from "@/components/NavBar"
import { useState, createContext } from "react"
import AppContext from "@/components/Context/AppContext"

export default function App({ Component, pageProps }) {
  const [cardNameContext, setCardNameContext] = useState("Bandage")
  return (
    <>
      <AppContext.Provider value={{ cardNameContext, setCardNameContext }}>
        <NavBar />
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  )
}
