import { FC, PropsWithChildren } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import Player from "../ui/Player/Player";

import { CSSTransition } from "react-transition-group";
import styles from "./Layout.module.scss";
import Navigation from "./Navigation/Navigation";
import Sidebar from "./Sidebar/Sidebar";
import Hamburger from "../ui/Hamburger/Hamburger";
import { useOutside } from "../../hooks/useOutside";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const {
    player: { currentTrack, isPlaying },
  } = useAppSelector((state) => state.persistedReducer);

  const { ref, isShow, setIsShow } = useOutside(false);

  return (
    <div className={styles.layout}>
      {isShow && <div className={styles.backdrop}></div>}
      <Hamburger
        iconVariant={!isShow ? "close" : "open"}
        onClick={() => setIsShow(!isShow)}
      />
      <Navigation show={isShow} />
      <main className={styles.central} ref={ref}>
        {children}
      </main>
      <Sidebar />
      <CSSTransition
        in={isPlaying}
        timeout={200}
        classNames="show__blocks"
        unmountOnExit
      >
        <Player songName={currentTrack.name} musicSource={currentTrack.uri} />
      </CSSTransition>
    </div>
  );
};

export default Layout;
