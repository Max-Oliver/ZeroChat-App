import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className='textContainer'>
    <div>
      <h1>
        <a href='https://github.com/ZoroIsMyMain'>~~ ZeroByOne Soft ~~</a>
      </h1>
      <h1>ZeroChat-App</h1>
      <h2>Realtime Chat Application</h2>
      <h3>Try it out right now!</h3>
      <p>
        Estos mensajes son volatiles no se persisten en ninguna DB -> (Not
        yet..)
      </p>
    </div>
    {users ? (
      <div>
        <h1>People currently chatting:</h1>
        <div className='activeContainer'>
          <h2>
            {users.map(({ name }) => (
              <div key={name} className='activeItem'>
                {name}
                <img alt='Online Icon' src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);
export default TextContainer;
