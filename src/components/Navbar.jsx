import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='bg-slate-500 h-[10vh]'>
      <div className='container flex justify-between items-center px-5 py-5 mx-auto'>
        <div>
          <h1 className='font-bold text-2xl'>MS46</h1>
        </div>
        <div>
          <ul className='flex gap-10 text-white font-bold'>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? ' bg-black px-3 py-1 rounded-md ' : 'hoverEffect '
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/experience" 
                className={({ isActive }) => 
                  isActive ? ' bg-black px-3 py-1 rounded-md' : 'hoverEffect'
                }
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/skill" 
                className={({ isActive }) => 
                  isActive ? ' bg-black px-3 py-1 rounded-md' : 'hoverEffect'
                }
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? ' bg-black px-3 py-1 rounded-md' : 'hoverEffect'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
