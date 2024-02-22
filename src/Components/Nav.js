// import React from 'react';
// import { useContext } from 'react';
// import { GlobalData } from '../App';

// const Nav = () => {
//     const {appStyle} = useContext(GlobalData);
//     const {color, fontSize, align} = appStyle;
//   return (
//     <>
//       <nav>
//         <ul>
//             <li><a href="" style={{color:color, fontSize: fontSize, textAlign: align, display:'block'}}>Home</a></li>
//             <li><a href="">About</a></li>
//             <li><a href="">Section</a></li>
//             <li><a href="">Service</a></li>
//             <li><a href="">Contact</a></li>
//         </ul>
//       </nav>
//     </>
//   );
// }

// export default Nav;

import React from 'react';
import './Nav.css'

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
