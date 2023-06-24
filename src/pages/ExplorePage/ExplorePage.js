import ExplorePageHero from "../../components/ExplorePageHero/ExplorePageHero";
import ExplorePalettes from "../../components/ExplorePalettes/ExplorePalettes";
import Header from "../../components/Header/Header";
import crossIconURL from "../../assets/images/cross-icon.png";
import "./ExplorePage.scss";
import { v4 as uuidv4 } from "uuid";
import Footer from "../../components/Footer/Footer";

export default function ExplorePage({
  isLoggedIn,
  palettesData,
  totalPages,
  setCurrentPage,
  setSortMinHue,
  setSortMaxHue,
  sortMinHue,
  sortMaxHue,
  setSortBy,
  userFavouritesData,
  getPalettesData,
  getUserFavourites,
  userData,
}) {
  let pagesArray = [];
  for (let i = 1; i <= totalPages; i++) {
    pagesArray.push(i);
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} userData={userData} />
      <ExplorePageHero />
      <section className="colour-sort">
        <div
          className="colour-sort__colour"
          style={{ backgroundColor: "gray", border: "1px solid grey" }}
          onClick={() => {
            setSortMinHue(null);
            setSortMaxHue(null);
          }}
        >
          <img src={crossIconURL} alt="" />
        </div>
        <div
          className={`colour-sort__colour colour-sort__colour${
            sortMinHue === 0 ? "--selected" : ""
          }`}
          style={{ backgroundColor: "red" }}
          onClick={() => {
            setSortMinHue(0);
            setSortMaxHue(9);
          }}
        ></div>
        <div
          className={`colour-sort__colour colour-sort__colour${
            sortMinHue === 10 ? "--selected" : ""
          }`}
          style={{ backgroundColor: "orange" }}
          onClick={() => {
            setSortMinHue(10);
            setSortMaxHue(33);
          }}
        ></div>
        <div
          className={`colour-sort__colour colour-sort__colour${
            sortMinHue === 34 ? "--selected" : ""
          }`}
          style={{ backgroundColor: "yellow" }}
          onClick={() => {
            setSortMinHue(34);
            setSortMaxHue(55);
          }}
        ></div>
        <div
          className={`colour-sort__colour colour-sort__colour${
            sortMinHue === 56 ? "--selected" : ""
          }`}
          style={{ backgroundColor: "green" }}
          onClick={() => {
            setSortMinHue(56);
            setSortMaxHue(159);
          }}
        ></div>
        <div
          className={`colour-sort__colour colour-sort__colour${
            sortMinHue === 160 ? "--selected" : ""
          }`}
          style={{ backgroundColor: "blue" }}
          onClick={() => {
            setSortMinHue(160);
            setSortMaxHue(255);
          }}
        ></div>
        <div
          className={`colour-sort__colour colour-sort__colour${
            sortMinHue === 256 ? "--selected" : ""
          }`}
          style={{ backgroundColor: "purple" }}
          onClick={() => {
            setSortMinHue(256);
            setSortMaxHue(280);
          }}
        ></div>
        <div
          className={`colour-sort__colour colour-sort__colour${
            sortMinHue === 281 ? "--selected" : ""
          }`}
          style={{ backgroundColor: "pink" }}
          onClick={() => {
            setSortMinHue(281);
            setSortMaxHue(344);
          }}
        ></div>
      </section>

      <select
        className="select-sort"
        name="sort"
        id="sort"
        onChange={async (e) => {
          await setSortBy({
            sort_by: e.target.value.split("-")[0],
            order_by: e.target.value.split("-")[1],
          });
        }}
      >
        <option value={""}>-- Sort By --</option>
        <option value="likes-asc">Likes --ascending</option>
        <option value="likes-desc">Likes --descending</option>
        <option value="created_at-desc">Date added --most recent</option>
        <option value="created_at-asc">Date added --least recent</option>
      </select>

      <ExplorePalettes
        palettesData={palettesData}
        userFavouritesData={userFavouritesData}
        getPalettesData={getPalettesData}
        getUserFavourites={getUserFavourites}
      />

      <div className="page-buttons">
        {pagesArray.map((page) => {
          return (
            <button
              key={uuidv4()}
              className="page-button"
              onClick={() => {
                setCurrentPage(page);
                window.scrollTo(0, 600);
              }}
            >
              {page}
            </button>
          );
        })}
      </div>

      <Footer />
    </>
  );
}
