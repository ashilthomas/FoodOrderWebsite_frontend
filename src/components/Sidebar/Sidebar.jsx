import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { name: 'Add restaurant', path: '/addrestaurant' },
    { name: 'Add menus', path: '/admin' },
    { name: 'Add customization', path: '/addcustomization' },
    { name: 'Order', path: '/adminorders' },
    { name: 'Events', path: '/about' },
    { name: 'Coupon', path: '/about' },
    { name: 'setting', path: '/about' },
    { name: 'Logout', path: '/about' }
  ];

  return (
    <>
      <div className='absolute left-40 sidebaropen'>
        kfhdjkdg
      </div>
      <div className='w-60 border-r h-screen sidebarnone fixed'>
        <ul className='flex flex-col'>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <li className='p-5 cursor-pointer'>
                <Link to={item.path}>{item.name}</Link>
              </li>
              {index < menuItems.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
