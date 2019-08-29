import React, { useEffect, useState } from 'react'
import axios from 'axios'

// API website: http://numbersapi.com/#42

const NumberSearch = () => {
  const [numberSearch, setNumberSearch] = useState('')
  const [numMessage, setNumMessage] = useState('')
  //   const [numberMessage, setNumberMessage] = useState('')

  const fetchData = async () => {
    const resp = await axios.get(`http://numbersapi.com/${numberSearch}/trivia`)

    console.log(resp)
    console.log(resp.data)

    const message = resp.data
    setNumMessage(message)
  }

  return (
    <>
      <main>
        <h3>Find out a random fact related to the number you enter!</h3>
        <section>
          <form
            onSubmit={e => {
              e.preventDefault()
              fetchData()
            }}
          >
            <input
              type="text"
              placeholder="enter number here"
              value={numberSearch}
              onChange={e => setNumberSearch(e.target.value)}
            />
          </form>
          <button>Submit</button>
        </section>

        <p className="random">Random fact:</p>

        <p className="message">{numMessage}</p>
      </main>
    </>
  )
}

export default NumberSearch
