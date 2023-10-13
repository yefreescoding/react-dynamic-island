// Component imports

import DivideCheck from "../DivideCheck";

interface IslandContainerProps {
  dataMode: string | null;
  itemLeft: React.ReactNode;
  itemRight: React.ReactNode;
}

export default function ExpandedContainer({
  dataMode,
  itemLeft,
  itemRight,
}: IslandContainerProps) {
  return (
    <div className="expanded_container" data-mode={dataMode}>
      <div className="expanded_items">{itemLeft}</div>
      <nav className="island__nav">
        <span className="island_content">Dynamic Island</span>
      </nav>
      <div className="expanded_items">{itemRight}</div>
      <div className="divide_component">
        <DivideCheck />
      </div>
    </div>
  );
}
