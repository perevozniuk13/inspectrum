import ExplorePageHero from "../../components/ExplorePageHero/ExplorePageHero";
import ExplorePalettes from "../../components/ExplorePalettes/ExplorePalettes";
import Header from "../../components/Header/Header";
import crossIconURL from "../../assets/images/cross-icon.png";
import "./ExplorePage.scss";
import { v4 as uuidv4 } from "uuid";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ExplorePage({ isLoggedIn, setIsLoggedIn }) {
  const [palettesData, setPalettesData] = useState(null);
  const [userFavouritesData, setUserFavouritesData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [sortMinHue, setSortMinHue] = useState(null);
  const [sortMaxHue, setSortMaxHue] = useState(null);
  const [sortBy, setSortBy] = useState({ sort_by: null, order_by: null });
  const authToken = sessionStorage.getItem("authToken");

  let pagesArray = [];
  for (let i = 1; i <= totalPages; i++) {
    pagesArray.push(i);
  }

  const getPalettesData = async () => {
    try {
      const receivedPalettesData = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/palettes?page=${currentPage}&&min_hue=${sortMinHue}&&max_hue=${sortMaxHue}&&sort_by=${sortBy.sort_by}&&order_by=${sortBy.order_by}`
      );
      setPalettesData([...receivedPalettesData.data].slice(0, -1));
      setTotalPages(
        receivedPalettesData.data[receivedPalettesData.data.length - 1]
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getUserFavourites = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/users/favourites`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setUserFavouritesData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPalettesData();
  }, [currentPage, sortMinHue, sortBy]);

  useEffect(() => {
    if (sessionStorage.getItem("authToken")) {
      setIsLoggedIn(true);
      getUserFavourites();
    }
  }, []);

  useEffect(() => {
    getPalettesData();
    getUserFavourites();
  }, []);

  if (!palettesData) {
    return <p>Loading...</p>;
  }

  if (sessionStorage.getItem("authToken") && !userFavouritesData) {
    return <p>Loading...</p>;
  }

  return (
    <section className="explore">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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
        <option value="likes-asc">Likes --least popular</option>
        <option value="likes-desc">Likes --most popular</option>
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
              style={{
                backgroundColor: page == currentPage ? "black" : "lightgrey",
                border: page == currentPage && "1px solid white",
                color: page == currentPage ? "white" : "black",
              }}
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
    </section>
  );
}
