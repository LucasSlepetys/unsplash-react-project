import React from 'react';
import { useFetchImgs } from './globalQueryHooks';

const Gallery = () => {
  const response = useFetchImgs();

  if (response.isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading...</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className='image-container'>
        <h4>Error...</h4>
      </section>
    );
  }

  const results = response.data.results;

  if (results.length < 1) {
    return (
      <section className='image-container'>
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section className='image-container'>
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className='img'
          />
        );
      })}
    </section>
  );
};

export default Gallery;
