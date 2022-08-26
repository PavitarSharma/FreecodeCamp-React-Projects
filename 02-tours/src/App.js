import React, { useState, useEffect } from 'react'
import Loading from "./components/Loading"
import Tours from "./components/Tours"

const App = () => {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    setLoading(true)

    try {
      const response = await fetch("https://course-api.com/react-tours-project")
      const data = await response.json()
      console.log(data);
      setLoading(false)
      setTours(data)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  const removeTour = (id) => {
    const newTour = tours.filter(tour => tour.id !== id)

    setTours(newTour)
  }

  return (
    <div className="app">
      {
        loading ? <Loading /> :
          (tours.length === 0) ?
            <div className="no-tour">
              <h2>No Tours Left</h2>
              <button onClick={() => fetchTours()} className="refresh-button">Refresh</button>
            </div> :
            <div className="tours">
              {
                tours && tours.map(tour => (
                  <div key={tour.id}>
                    <Tours tour={tour} removeTour={removeTour} />
                  </div>
                ))
              }
            </div>

      }
    </div>
  )
}

export default App