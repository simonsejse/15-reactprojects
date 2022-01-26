import React, { useState, useEffect, useContext } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import { TourContext } from './Test';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    setTours((oldTours) => {
      return oldTours.filter((tour) => tour.id !== id);
    });
  };

  const fetchTours = async () => {
    setIsLoading(true);
    const response = await fetch(url)
      .then((response) => response.json())
      .then((tours) => {
        setTours(tours);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  //ILL PASS REMOVETOUR METHOD THROUGH PROVIDER AND PROPS TO SHOW I CAN DO BOTH
  //OBVIOUSLY NOT SMART TO DO BOTH THOUGH

  return (
    <TourContext.Provider value={{ removeTour: removeTour }}>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </TourContext.Provider>
  );
}

export default App;
