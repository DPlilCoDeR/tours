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
    return <Loading/>
  };

  return (
    <>
      <h2>Tours Project Setup</h2>
      <Tours tours={tours}/>
    </>
  ) 
}

export default App;
