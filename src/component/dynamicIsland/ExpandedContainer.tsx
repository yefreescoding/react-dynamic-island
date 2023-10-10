import { Add, Phone } from "../icons/icons";
// Component imports

import DivideCheck from "../DivideCheck";

interface IslandContainerProps {
  dataMode: string | null;
}

export default function ExpandedContainer({ dataMode }: IslandContainerProps) {
  return (
    <div className="expanded_container" data-mode={dataMode}>
      <div className="expanded_items">
        <Phone />
      </div>
      <nav className="island__nav">
        <span className="island_content">Dynamic Island</span>
      </nav>
      <div className="expanded_items">
        <Add />
      </div>
      <div className="divide_component">
        <DivideCheck />
      </div>
    </div>
  );
}
