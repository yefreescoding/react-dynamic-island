import { motion } from "framer-motion";
import { useState } from "react";

// data imports
import data from "../data-mock/data.json";

// component imports
import Card from "./Cards";
import Header from "./Header";

import { useStore } from "../hooks/useStore";

export default function Container() {
  const [apps] = useState(data.app);

  const {
    openState,
    modeState,
    setOpenStateTrue,
    setOpenStateFalse,
    setDataMode,
  } = useStore();

  return (
    <div
      className="app_wrapper"
      data-open={openState}
      data-position={modeState}
    >
      <motion.main layout className="main" data-state={modeState}>
        <Header state={modeState} setContainerState={setDataMode} />
        <div className="main__cards_container">
          {apps.map((app) => (
            <Card
              key={app["social-media"]}
              logo={app.logo}
              posts={app.posts}
              notifications={app.posts.length}
              onChange={setOpenStateTrue}
              modeState={modeState}
              setContainerState={setDataMode}
              setOpenStateFalse={setOpenStateFalse}
              dataMode={openState}
            />
          ))}
        </div>
      </motion.main>
    </div>
  );
}
