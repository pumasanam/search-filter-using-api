import React from 'react'

const Source = ({data}) => {
    const img = `https://source.unsplash.com/515x350/?${data}`;
  return (
    <>
      <div className="src_img">
        <img src={img} alt="" />
      </div>
    </>
  );
};

export default Source;
