import { FC, useState } from "react";
import { useAppSelector } from "../../../hooks/reduxHooks";
import MdIcon from "../MdIcon";
import { IPlayPause } from "./playPause-interface";

import { CSSTransition } from "react-transition-group";
import styles from "./PlayPause.module.scss";
import clsx from "clsx";
import { motion } from "framer-motion";

const PlayPause: FC<IPlayPause> = ({ onPlay, onPause, title }) => {
  const {
    player: { currentTrackIsPlaying, currentTrack },
  } = useAppSelector((state) => state.persistedReducer);

  const [show, setIsShow] = useState(false);

  return (
    <div
      className={clsx(styles.block, {
        [styles.active]: title === currentTrack.name,
      })}
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <CSSTransition
        in={show}
        timeout={300}
        classNames="show__blocks"
        unmountOnExit
      >
        {currentTrackIsPlaying && title === currentTrack.name ? (
          <>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onPause}
            >
              <MdIcon name="MdPauseCircleFilled" />
            </motion.button>
          </>
        ) : (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onPlay}
          >
            <MdIcon name="MdPlayCircleFilled" />
          </motion.button>
        )}
      </CSSTransition>
    </div>
  );
};

export default PlayPause;
