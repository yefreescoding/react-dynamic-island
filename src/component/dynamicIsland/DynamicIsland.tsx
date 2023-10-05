import { useState } from "react";
// import styles
import "./dynamicIsland.scss";

export default function DynamicIsland() {
  const [dataMode, setDataMode] = useState("");

  const handleDataMode = (mode: string) => {
    setDataMode(mode);
  };

  return (
    <header className="header">
      <div className="island" aria-label="Dynamic island" data-mode={dataMode}>
        <nav className="island__nav">
          <ul className="island__nav_ul">
            <li>
              <button type="button" onClick={() => handleDataMode("")}>
                regular
              </button>
            </li>
            <li>
              <button type="button" onClick={() => handleDataMode("expanded")}>
                expanded
              </button>
            </li>
            <li>
              <button type="button" onClick={() => handleDataMode("square")}>
                square
              </button>
            </li>
            <li>
              <button type="button" onClick={() => handleDataMode("divide")}>
                divide
              </button>
            </li>
            <li>
              <button type="button" onClick={() => handleDataMode("large")}>
                large
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
