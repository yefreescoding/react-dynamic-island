// import styles
import { useState } from "react";
import "./dynamicIsland.scss";

export default function DynamicIsland() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className="header">
      <div
        className="island"
        aria-label="Dynamic island"
        aria-expanded={openMenu}
      >
        <button
          type="button"
          className="island__btn"
          onClick={handleOpenMenu}
          aria-expanded={openMenu}
        >
          click
        </button>
        <nav className="island__nav">
          <ul className="island__nav_ul">
            <li>
              <a href="#store">Example 1</a>
            </li>
            <li>
              <a href="">Example 2</a>
            </li>
            <li>
              <a href="">Example 3</a>
            </li>
            <li>
              <a href="">Example 4</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
