import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { IChart } from "../../../shared/types/charts.page.type";
import { setAllSongs } from "../../../store/player/PlayerSlice";
import CountryNavMenu from "../../ui/CountryNav/CountryNavMenu";
import Gallery from "../../ui/Gallery/Gallery";
import Heading from "../../ui/Heading/Heading";
import Meta from "../../ui/Meta/Meta";
import { countryMenu } from "./country-nav-data";

const NearYou: FC<IChart> = ({ charts }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setAllSongs(charts));
  }, [dispatch, charts]);

  const {
    player: { allSongs },
  } = useAppSelector((state) => state.persistedReducer);

  return (
    <Meta
      title="Top charts near you"
      description="Get all top charts for your country!"
    >
      <Heading title="Choose your country!" />

      <CountryNavMenu menu={countryMenu} />

      <Gallery items={allSongs} />
    </Meta>
  );
};

export default NearYou;
