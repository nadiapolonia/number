import React, { useEffect, useState } from 'react'
import axios from 'axios'

// List of Bugs:

// Search will only submit the first digit of the number entered. Numbers following the first digit are not recognized and an error message is created.

// When the search box is empty (no number) a huge string of  API html shows.

// Message will pull multiple results from the number entered and change through them before finding a final result.

// API website: http://numbersapi.com/#42

const NumberSearch = () => {
  const [numberSearch, setNumberSearch] = useState()
  const [numMessage, setNumMessage] = useState('')
  //   const [numberMessage, setNumberMessage] = useState('')

  const fetchData = async () => {
    const resp = await axios.get(`http://numbersapi.com/${numberSearch}/`)

    console.log(resp)
    console.log(resp.data)

    const message = resp.data
    setNumMessage(message)
  }

  useEffect(() => {
    fetchData()
  })

  return (
    <>
      <main>
        <h3>Find out a random fact related to the number you enter!</h3>
        <section>
          {/* <form
            onSubmit={e => {
              e.preventDefault()
              //   setNumMessage(fetchData)
              setNumberSearch(e.target.value)
            }}
          > */}
          <input
            type="text"
            placeholder="enter number here"
            value={numberSearch}
            onChange={e => setNumberSearch(e.target.value)}
          />
          {/* </form> */}
          {/* <button onClick={e => setNumberSearch(e.target.value)}>Submit</button> */}
        </section>

        <p className="random">Random fact:</p>

        <p className="message">{numMessage}</p>
      </main>
    </>
  )
}

export default NumberSearch
