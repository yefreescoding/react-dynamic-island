import { motion, AnimatePresence } from "framer-motion";

import Posts from "./Posts";
import CardHeader from "./CardHeader";
import { useState } from "react";

interface CardProps {
  modeState: number;
  notifications: number;
  setContainerState: (payload: number) => void;
  logo: string;
  posts: {
    id: number;
    link: string;
    user: string;
    avatar: string;
    postText: string;
    postImg?: string | undefined;
  }[];
  onChange: () => void;
  setOpenStateFalse: () => void;
  dataMode: boolean;
}

export default function Card({
  modeState,
  notifications,
  posts,
  logo,
  onChange,
  setOpenStateFalse,
}: CardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article
      layout
      className="card"
      transition={{ duration: 0.1 }}
      data-open={isOpen}
    >
      <CardHeader
        setIsOpen={setIsOpen}
        setOpenStateFalse={setOpenStateFalse}
        modeState={modeState}
        logo={logo}
        notifications={notifications}
        setOpenState={setOpenStateFalse}
        dataMode={isOpen}
      />
      <motion.div
        className="card__body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        data-state={modeState}
      >
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              className="card__posts"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                type: "just",
              }}
            >
              {posts.map((post) => (
                <Posts
                  key={post.id}
                  link={post.link}
                  user={post.user}
                  avatar={post.avatar}
                  postText={post.postText}
                  postImg={post.postImg}
                />
              ))}
            </motion.div>
          ) : (
            <div className="posts_msg">
              {notifications < 1 ? (
                <h2>There's not new posts</h2>
              ) : (
                <div>
                  <h2>{notifications} are waiting new posts</h2>
                  <button
                    onClick={() => {
                      onChange();
                      setIsOpen(!isOpen);
                    }}
                  >
                    Click here to see the content
                  </button>
                </div>
              )}
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.article>
  );
}
