import React, { useState } from "react";

// JSON file se data import kar rahe hain (jisme navbar ke links honge)
import { data } from "../src/restApi.json";

// React Scroll ka Link component import kar rahe hain — smooth scrolling ke liye
import { Link } from "react-scroll";

// Hamburger menu icon import kar rahe hain
import { GiHamburgerMenu } from "react-icons/gi";

// Functional component 'Navbar' define kiya
const Navbar = () => {
  // 'show' naam ka state banaya, jo batayega ki menu visible hai ya nahi
  const [show, setShow] = useState(false);

  return (
    <>
      <nav>
        <div className="logo">ECHOO.404</div>

        {/* Conditional class: agar 'show' true hai toh 'showmenu' class bhi add hogi */}
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {/* JSON file se navbarLinks array loop kar ke har link create kar rahe hain */}
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link} // Scroll karega is ID wale section tak
                spy={true} // Active class apply karega jab section viewport me ho
                smooth={true} // Smooth scroll effect
                duration={500} // Scroll duration in milliseconds
                key={element.id} // Unique key har item ke liye
              >
                {element.title} {/* Link text (jaise: Home, About etc.) */}
              </Link>
            ))}
          </div>

          {/* "OUR MENU" naam ka button */}
          <button className="menuBtn">OUR MENU</button>
        </div>

        {/* Hamburger icon — mobile view me click karne pe menu toggle karega */}
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
