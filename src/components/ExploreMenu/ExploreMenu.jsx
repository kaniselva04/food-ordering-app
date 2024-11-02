import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/frontend_assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Check Out Our Delicious Menu!!</h1>
      <p className="explore-menu-text">
      Where flavor meets the soul – dine with us for an unforgettable taste journey!<br></br>
      Indulge in flavors that tell a story. Every meal, a memorable experience.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return ( 
            <div
              onClick={() => setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))}
              key={index}
              className="explore-menu-list-item"
            >
              <img className={category===item.menu_name ? "active":""}src={item.menu_image} />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
