import React from "react"

const defaultEndpoint = "https://api.magicthegathering.io/v1/cards/386616"

export async function getStaticProps() {
  const res = await fetch(defaultEndpoint)
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}

const UserPage = ({ data }) => {
  console.log("data:", data)

  console.log("artist", data.card.artist)
  console.log("name", data.card.name)
  console.log("imageUrl", data.card.imageUrl)

  return (
    <div className='container mx-auto px-4'>
      <div className='h-auto w-56 flex flex-col items-center'>
        <h1 className='text-md font-bold mb-0.5 pt-2'>{data.card.name}</h1>
        <img src={data.card.imageUrl} alt={data.card.name || ""} />
      </div>
    </div>
  )
}

export default UserPage
