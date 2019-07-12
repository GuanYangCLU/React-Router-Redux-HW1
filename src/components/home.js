import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <div>
      <div className='nav'>
        <ul>
          <li>
            <Link to='/list'>Admin</Link>
          </li>
          <li>
            <Link to='/login'>Please login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
