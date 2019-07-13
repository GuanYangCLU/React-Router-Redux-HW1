import React from 'react';
import { Link } from 'react-router-dom';

// 这部分的auth不完善
const Home = ({ isAuthenticated, status, username }) => {
  return (
    <div>
      <div className='nav'>
        <ul>
          <li>
            <Link to='/list'>Admin</Link>
          </li>
          <li>
            {!isAuthenticated && (
              <Link
                to={{
                  pathname: '/login',
                  state: {
                    isAuthenticated: isAuthenticated,
                    status: status,
                    username: username
                  }
                }}
              >
                Please login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
