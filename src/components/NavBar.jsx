import React from 'react';
import CartWidget from './CartWidget';

const navBar = () => {
  return (
    
    <>
    <nav>
<ul>
<li><a href="#">Item 1</a></li>
<li><a href="#">Item 2</a></li>
<li><a href="#">Item 3</a></li>
<li><a href="#">Item 4</a></li>

</ul>
</nav>
<div>
  <h1>Discos de Rap</h1>
  <CartWidget />
</div>

    </>
  )
    
  
};

export default navBar;


