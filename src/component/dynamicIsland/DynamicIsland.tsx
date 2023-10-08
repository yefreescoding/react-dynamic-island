import { useState } from "react";
import "./dynamicIsland.scss";

import Add from "../icons/icons";

export default function DynamicIsland() {
  const [dataMode, setDataMode] = useState<string | null>(null);
  // const [showExpandedItems, setShowExpandedItems] = useState<boolean>(false);

  const handleDataMode = (event: React.MouseEvent<HTMLButtonElement>) => {
    const dataMode = event.currentTarget.getAttribute("data-mode");
    setDataMode(dataMode);
  };

  return (
    <header className="header">
      <ul className="island__nav_ul">
        <li>
          <button type="button" data-mode={null} onClick={handleDataMode}>
            regular
          </button>
        </li>
        <li>
          <button type="button" data-mode="expanded" onClick={handleDataMode}>
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
      <div className="island" aria-label="Dynamic island" data-mode={dataMode}>
        <div className="expanded_items">
          <Add />
        </div>
        <nav className="island__nav">
          <ul className="island__nav_ul">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </nav>
        <div className="expanded_items">
          <Add />
        </div>
      </div>
    </header>
  );
}
