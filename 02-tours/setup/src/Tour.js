import React, { useState, useContext } from 'react';
import { TourContext } from './Test';

const Tour = (props) => {
  const [readMore, setReadMore] = useState(false);
  // const { removeTour } = useContext(TourContext);

  const { id, name, info, image, price, removeTour } = props;

  /**
   *   {readMore ? (
          <>
            <p>
              {info}
              <button onClick={() => setReadMore(false)}>Read less</button>
            </p>
          </>
        ) : (
          <>
            <p>
              {info.substring(0, 200)}...
              <button onClick={() => setReadMore(true)}>Read more</button>
            </p>
          </>
        )}
   * 
   */
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>{price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(200)}...`}
          <button onClick={() => setReadMore((readMore) => !readMore)}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
