import { useState } from "react";
// Dynamic Island imports
import DynamicIsland from "./dynamicIsland/DynamicIsland";
import ExpandedContainer from "./dynamicIsland/ExpandedContainer";
import IslandContainer from "./dynamicIsland/IslandContainer";

// icon imports
import { Phone } from "./icons/icons";
import { FaLink } from "react-icons/fa";

// component imports
import InputEmail from "./InputEmail";
import SquareMenu from "./SquareMenu";
import DivideCheck from "./DivideCheck";

export default function Body() {
  const [dataMode, setDataMode] = useState<string | null>("");

  const handleDataMode = (event: React.MouseEvent<HTMLButtonElement>) => {
    const actualDataMode = event.currentTarget.getAttribute("data-mode");
    setDataMode(actualDataMode);
  };

  return (
    <section className="section cover">
      <DynamicIsland dataMode={dataMode}>
        <>
          <ExpandedContainer
            dynamicIslandContent={
              <ul className="island__nav_ul">
                <li>
                  <button
                    type="button"
                    data-mode={null}
                    onClick={handleDataMode}
                  >
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
                  <button
                    type="button"
                    data-mode="divide"
                    onClick={handleDataMode}
                  >
                    divide
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    data-mode="large"
                    onClick={handleDataMode}
                  >
                    large
                  </button>
                </li>
              </ul>
            }
            dataMode={dataMode}
            itemLeft={<Phone />}
            itemRight={
              <a href="/">
                <FaLink />
              </a>
            }
            itemDivide={<DivideCheck />}
          />
          <IslandContainer dataMode={dataMode} LargeMenuItem={<SquareMenu />} />
        </>
      </DynamicIsland>
      <div className="text">
        <h1 className="cover__h1">IOS DYNAMIC ISLAND WITH REACT</h1>
        <p>
          Get the awesome dynamic island made for Apple for its iPhones Pros,
          now everywhere. Thanks to React and a little bit of effort here's this
          amazing component.
        </p>
        <p>
          If you like the component, and want to connect with me. Share your
          email and I will reach to you.
        </p>
      </div>
      <form className="cover__email" action="">
        <div>
          <InputEmail />
        </div>
        <p>No spam, I promise.</p>
      </form>
      <div className="cover_img">
        <img src="/cover-img.webp" alt="" />
      </div>
    </section>
  );
}
