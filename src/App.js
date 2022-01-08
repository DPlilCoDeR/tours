import React, { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Tours from './components/Tours'

const url = 'https://course-api.com/react-tours-project'


function App() {
  
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchedData = fetchData(url);
    setTours(fetchData)
  }, [])


  function deleteTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours);
  }

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours);
    } catch (error) {
      
    }
    setLoading(false)
  }

  if (loading) {
    return (
      <main>
        <Loading/>
      </main>
    );
  };

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No tours left</h2>
          <button onClick={() => fetchData()}>
            refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour}/>
    </main>
  ) 
}

export default App;
