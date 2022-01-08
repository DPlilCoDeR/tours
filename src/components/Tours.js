import React from 'react';
import Tour from './Tour';
const Tours = ({tours, deleteTour}) => {
  return (
      <section>
          <div className='Title'>
            <h2>Ours Tours</h2>
            <div className='underline'></div>
          </div>
          <div>
            {tours.map( tour => <Tour key={tour.id} tour={tour} deleteTour={deleteTour}/>)}
          </div>
      </section>
  );
};

export default Tours;