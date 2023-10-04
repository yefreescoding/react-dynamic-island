// import styles
import "./dynamicIsland.scss";

export default function DynamicIsland() {
  return (
    <header className="header">
      <div className="island" aria-label="Dynamic island">
        <nav className="island__nav">
          <ul className="island__nav_ul">
            <li>
              <button>state 1</button>
            </li>
            <li>
              <button>state 2</button>
            </li>
            <li>
              <button>state 3</button>
            </li>
            <li>
              <button>state 4</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
