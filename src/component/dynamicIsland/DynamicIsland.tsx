// styles imports
import "./dynamicIsland.scss";
// Icon imports

interface DynamicIslandProps {
  children: React.ReactNode;
  handleDataMode: React.MouseEventHandler<HTMLButtonElement>;
  dataMode: string | null;
}

export default function DynamicIsland({
  children,
  handleDataMode,
  dataMode,
}: DynamicIslandProps) {
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
        {children}
      </div>
    </header>
  );
}
