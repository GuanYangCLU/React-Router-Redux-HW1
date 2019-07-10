import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <div>
      <div className='nav'>
        <ul>
          <li>
            <Link to='/users'>users</Link>
          </li>
          <li>
            <Link to='/users/:login'>users' login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
