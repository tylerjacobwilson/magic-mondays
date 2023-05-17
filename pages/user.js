import React, { useEffect, useState } from "react"
import { Switch } from "@headlessui/react"

const UserPage = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [data, setData] = useState([])

  const [searchInput, setSearchInput] = useState("")
  const [input, setInput] = useState("")

  const [green, setGreen] = useState(false)
  const [blue, setBlue] = useState(false)
  const [red, setRed] = useState(false)
  const [white, setWhite] = useState(false)
  const [black, setBlack] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const defaultEndpoint = `https://api.magicthegathering.io/v1/cards?name=${searchInput}`

      try {
        const response = await fetch(defaultEndpoint)
        const responseData = await response.json()

        if (responseData.cards) {
          setData((prevData) => {
            const uniqueCards = responseData.cards.filter(
              (card) => !prevData.some((prevCard) => prevCard.name === card.name)
            )

            return [...prevData, ...uniqueCards]
          })
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
    setIsFormSubmitted(false)
    setData([]) // Clear the data state
  }, [searchInput])

  const handleInputChange = (event) => {
    setInput(event.target.value.toString())
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsFormSubmitted(true)
    setSearchInput(input)
  }

  if (!data) {
    return <div>Loading...</div>
  }

  const filteredData = data.filter(
    (card, index) => data.findIndex((c) => c.name === card.name) === index
  )

  return (
    <div className='container mx-auto px-4 mt-10'>
      <div className='flex justify-center'>
        <form className='flex flex-col w-72 max-w-md mb-10' onSubmit={handleSubmit}>
          <div className='flex flex-row justify-between mb-1.5'>
            <Switch
              checked={green}
              onChange={setGreen}
              className={`${
                green ? "bg-green-500" : "bg-gray-200"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className='sr-only'>Enable notifications</span>
              <span
                className={`${
                  green ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full ${
                  green ? "bg-green-100" : "bg-green-500"
                }  transition`}
              />
            </Switch>
            <Switch
              checked={blue}
              onChange={setBlue}
              className={`${
                blue ? "bg-blue-500" : "bg-gray-200"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className='sr-only'>Enable notifications</span>
              <span
                className={`${
                  blue ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full ${
                  blue ? "bg-blue-100" : "bg-blue-500"
                } transition`}
              />
            </Switch>
            <Switch
              checked={red}
              onChange={setRed}
              className={`${
                red ? "bg-red-500" : "bg-gray-200"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className='sr-only'>Enable notifications</span>
              <span
                className={`${
                  red ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full ${
                  red ? "bg-red-100" : "bg-red-500"
                } transition`}
              />
            </Switch>
            <Switch
              checked={white}
              onChange={setWhite}
              className={`${
                white ? "bg-amber-500" : "bg-gray-200"
              } relative inline-flex h-6 w-11 items-center rounded-full bg-`}
            >
              <span className='sr-only'>Enable notifications</span>
              <span
                className={`${
                  white ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full ${
                  white ? "bg-amber-100" : "bg-amber-500"
                } transition`}
              />
            </Switch>
            <Switch
              checked={black}
              onChange={setBlack}
              className={`${
                black ? "bg-gray-500" : "bg-gray-200"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className='sr-only'>Enable notifications</span>
              <span
                className={`${
                  black ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full ${
                  black ? "bg-gray-100" : "bg-gray-500"
                } transition`}
              />
            </Switch>
          </div>
          <label htmlFor='search'>Search by name</label>
          <div className='flex flex-row'>
            <input
              type='text'
              id='search'
              name='search'
              className='w-full text-black'
              value={input}
              onChange={handleInputChange}
            />

            <button
              type='submit'
              className='px-1.5 py-0.5 bg-orange-700 rounded-md ml-1.5'
              disabled={!data || data.length === 0}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className='flex flex-wrap'>
        {filteredData.map((item, index) => (
          <div className='w-56 flex flex-col items-center mb-4 mr-4' key={index}>
            <h1 className='text-md font-bold mb-0.5 pt-2'>{item.name}</h1>
            <img src={item.imageUrl} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserPage
