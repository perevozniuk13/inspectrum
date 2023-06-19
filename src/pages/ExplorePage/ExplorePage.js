import ExplorePageHero from "../../components/ExplorePageHero/ExplorePageHero";
import ExplorePalettes from "../../components/ExplorePalettes/ExplorePalettes";
import Header from "../../components/Header/Header";
import "./ExplorePage.scss";
import { v4 as uuidv4 } from "uuid";

export default function ExplorePage({
  isLoggedIn,
  palettesData,
  totalPages,
  setCurrentPage,
}) {
  let pagesArray = [];
  for (let i = 1; i <= totalPages; i++) {
    pagesArray.push(i);
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <ExplorePageHero />
      <ExplorePalettes palettesData={palettesData} />
      <div className="page-buttons">
        {pagesArray.map((page) => {
          return (
            <button
              key={uuidv4()}
              className="page-button"
              onClick={() => {
                setCurrentPage(page);
                window.scrollTo(0, 0);
              }}
            >
              {page}
            </button>
          );
        })}
      </div>
    </>
  );
}
