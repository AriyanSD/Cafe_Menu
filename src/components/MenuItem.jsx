import React, { useEffect, useState } from 'react';

export default function MenuItem({ img, title, titleEN, description, price }) {
  const [titleStyle, setTitleStyle] = useState({});
  const [titleEnStyle, setTitleEnStyle] = useState({});

  useEffect(() => {
    manageSize();
  }, []);

  function manageSize() {
    if (title.length > 20) {
      setTitleStyle({ fontSize: '16pt' });
    }
      
    if (titleEN.length > 20) {
      setTitleEnStyle({ fontSize: '16pt' });
    }
  }

  return (
    <div className="menu-item">
      <div id="description">
        <p>{description}</p>
        <br />
        <span>{price} T</span>
      </div>

      <div id="item-image">
        <img src={img} alt="MenuItem" />
        <br />
        <h3 id="title" style={titleStyle}>{title}</h3>
        <h3 id="title-en" style={titleEnStyle}>{titleEN}</h3>
      </div>
    </div>
  );
}
