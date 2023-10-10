import { useState } from "react";
// styles imports
import "./dynamicIsland.scss";
// Icon imports

import IslandContainer from "./IslandContainer";
import ExpandedContainer from "./ExpandedContainer";

export default function DynamicIsland() {
  const [dataMode, setDataMode] = useState<string | null>("");

  const handleDataMode = (event: React.MouseEvent<HTMLButtonElement>) => {
    const actualDataMode = event.currentTarget.getAttribute("data-mode");
    setDataMode(actualDataMode);
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
          <button type="button" data-mode="divide" onClick={handleDataMode}>
            divide
          </button>
        </li>
        <li>
          <button type="button" data-mode="square" onClick={handleDataMode}>
            square
          </button>
        </li>
        <li>
          <button type="button" data-mode="large" onClick={handleDataMode}>
            large
          </button>
        </li>
      </ul>
      <div className="island" aria-label="navigation menu" data-mode={dataMode}>
        <ExpandedContainer dataMode={dataMode} />
        <IslandContainer dataMode={dataMode} />
      </div>
    </header>
  );
}
