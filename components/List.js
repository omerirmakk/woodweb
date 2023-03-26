import React from 'react';

const List = (props) => {
  const { data } = props;

  return (
    <>
      <div className='list'>
        {data.map((item, index) => (
          <div key={index}>
            <h3>{item.name.common}</h3>
            <h3>{item.name.common}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
