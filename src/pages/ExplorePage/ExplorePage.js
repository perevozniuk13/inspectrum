import ExplorePageHero from "../../components/ExplorePageHero/ExplorePageHero";
import ExplorePalettes from "../../components/ExplorePalettes/ExplorePalettes";
import Header from "../../components/Header/Header";
import "./ExplorePage.scss";

export default function ExplorePage({ isLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <ExplorePageHero />
      <ExplorePalettes />
    </>
  );
}
