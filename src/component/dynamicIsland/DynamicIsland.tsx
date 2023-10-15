// styles imports
import "./dynamicIsland.scss";
// Icon imports

interface DynamicIslandProps {
  children: React.ReactNode;
  dataMode: string | null;
}

export default function DynamicIsland({
  children,
  dataMode,
}: DynamicIslandProps) {
  return (
    <header className="header">
      <div className="island" aria-label="navigation menu" data-mode={dataMode}>
        {children}
      </div>
    </header>
  );
}
