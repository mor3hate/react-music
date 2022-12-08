import { motion } from "framer-motion";
import { FC } from "react";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { usePlay } from "../../../hooks/usePlay";
import { IRelatedSongItem } from "./related-song.interface";

import styles from "./RelatedSongs.module.scss";
import clsx from "clsx";

const RelatedSongItem: FC<IRelatedSongItem> = ({ index, title, hub }) => {
  const { handlePlay } = usePlay();

  const {
    player: {
      currentTrack: { name, uri },
    },
  } = useAppSelector((state) => state.persistedReducer);

  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      onClick={() => handlePlay(hub.actions[1]?.uri || "", title, index)}
      className={clsx(styles.related_item, {
        [styles.active]: name === title && uri === hub.actions[1]?.uri,
      })}
    >
      <span>{index + 1}.</span>
      <span>{title}</span>
    </motion.div>
  );
};

export default RelatedSongItem;
