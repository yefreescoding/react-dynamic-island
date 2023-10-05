import { useState } from "react";
// import styles
import "./dynamicIsland.scss";

import Add from "../icons/icons";

export default function DynamicIsland() {
  const [dataMode, setDataMode] = useState<string | null>(null);

  const handleDataMode = (event: React.MouseEvent<HTMLButtonElement>) => {
    const dataMode = event.currentTarget.getAttribute("data-mode");
    setDataMode(dataMode);
  };

  return (
    <header className="header">
      <div className="island" aria-label="Dynamic island" data-mode={dataMode}>
        {dataMode === "expanded" && (
          <div className="expanded_items">
            <Add />
          </div>
        )}
        <nav className="island__nav">
          <ul className="island__nav_ul">
            <li>
              <button type="button" data-mode={null} onClick={handleDataMode}>
                regular
              </button>
            </li>
            <li>
              <button
                type="button"
                data-mode="expanded"
                onClick={handleDataMode}
              >
                expanded
              </button>
            </li>
            <li>
              <button type="button" data-mode="square" onClick={handleDataMode}>
                square
              </button>
            </li>
            <li>
              <button type="button" data-mode="divide" onClick={handleDataMode}>
                divide
              </button>
            </li>
            <li>
              <button type="button" data-mode="large" onClick={handleDataMode}>
                large
              </button>
            </li>
          </ul>
        </nav>
        {dataMode === "expanded" && (
          <div className="expanded_items">
            <Add />
          </div>
        )}
      </div>
    </header>
  );
}
