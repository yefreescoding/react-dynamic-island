import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";
import Posts from "./Posts";

interface CardProps {
  state: number;
  notifications: number;
  setContainerState: React.Dispatch<React.SetStateAction<number>>;
  logo: string;
  posts: {
    id: number;
    link: string;
    user: string;
    avatar: string;
    postText: string;
    postImg?: string | undefined;
  }[];
}

export default function Card({
  state,
  setContainerState,
  notifications,
  posts,
  logo,
}: CardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article
      layout
      className="card"
      transition={{ duration: 0.1 }}
      data-open={isOpen}
    >
      <div
        className="card__header"
        data-state={state}
        onClick={() => {
          if (state === 1) {
            setContainerState(2);
            setIsOpen(true);
          } else {
            setContainerState(1);
            setIsOpen(false);
          }
        }}
      >
        <img src={`/icons/${logo}`} alt="" />
        {notifications > 0 && (
          <div className="card__notification" data-state={state}>
            <span>{notifications}</span>
            {state === 2 && <p>Posts</p>}
          </div>
        )}
      </div>
      <motion.div
        className="card__body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        data-state={state}
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
                <div
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <h2>There's {notifications} new posts</h2>
                  <p>Click here to see the content</p>
                </div>
              )}
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.article>
  );
}
