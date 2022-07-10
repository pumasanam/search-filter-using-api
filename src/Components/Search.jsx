import React, {useState} from 'react';
import Source from './Source';

const Search = () => {
    const [data, setData] = useState('');
  return (
    <>
      <div className="search">
        <h1>Search Your Item</h1>
      </div>

      <div className="input">
      <input type="text" value={data} onChange={(e)=>{
        setData(e.target.value);
      }} placeholder='Search Item' />
      </div>

      {data===''? <p className='note'>Pic Will Appear Here...</p> : <Source data={data}/>}

    
    </>
  );
};

export default Search;
