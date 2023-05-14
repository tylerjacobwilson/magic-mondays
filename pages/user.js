import React, { useEffect, useState } from "react"
import axios from "axios"
import Card from "../components/Card"

const UserPage = () => {
  const [card, setCard] = useState(null)

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_MAGIC_API_URL}/v1/cards/386616`)
        setCard(response.data.card)
      } catch (error) {
        console.error("Error fetching card:", error)
      }
    }

    fetchCard()
  }, [])

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-3xl font-bold mb-4'>Random Magic Card</h1>
      {card ? <Card card={card} /> : <p>Loading...</p>}
    </div>
  )
}

export default UserPage
