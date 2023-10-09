import { useState } from "react";
// styles imports
import "./dynamicIsland.scss";
// Icon imports
import { Add, Phone } from "../icons/icons";
// Component imports
import SquareMenu from "../SquareMenu";
import LargeCard from "../LargeCard";
import DivideCheck from "../DivideCheck";

export default function DynamicIsland() {
  const [dataMode, setDataMode] = useState<string | null>(null);

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
      <div className="island" aria-label="navigation menu" data-mode={dataMode}>
        <div className="expanded_container" data-mode={dataMode}>
          <div className="expanded_items">
            <Phone />
          </div>
          <nav className="island__nav">
            <span className="island__nav_ul">Dynamic Island</span>
          </nav>
          <div className="expanded_items">
            <Add />
          </div>
          <div className="divide_component">
            <DivideCheck />
          </div>
        </div>
        <div className="island__container" data-mode={dataMode}>
          {dataMode === "square" && <SquareMenu />}
          {dataMode === "large" && <LargeCard />}
        </div>
      </div>
    </header>
  );
}
