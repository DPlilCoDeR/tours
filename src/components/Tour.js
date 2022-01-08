import React, { useState } from 'react';

const Tour = ({tour, deleteTour}) => {
    const [tourState, setTourState] = useState(tour);
    const [readMore, setReadMore] = useState(false)

    return(
        <article className='single-tour'>
            <img src={tourState.image} alt={tourState.name}/>
            <footer>
                <div className='tour-info'>
                    <h4>{tourState.name}</h4>
                    <p className='tour-price'>{tourState.price}</p>
                </div>
            <p>
            {readMore ? tourState.info : `${tourState.info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
                {readMore ? 'show less' : '  read more'}
            </button>
            </p>
                <button className='delete-btn' onClick={()=> deleteTour(tourState.id)}>Not interested</button>
            </footer>
        </article >
    );
};

export default Tour;