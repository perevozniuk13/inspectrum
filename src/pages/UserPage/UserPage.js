import "./UserPage.scss";
import Header from "../../components/Header/Header";
import { useState } from "react";
import Collections from "../../components/Collections/Collections";

export default function UserPage({ isLoggedIn }) {
  const [librarySection, setLibrarySection] = useState("collections");

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />

      <section className="user-info">
        <p className="user-info__username">User: user123</p>
        <p className="user-info__name">Name: Sasha</p>
        <p className="user-info__collections">Collections: 0</p>
        <p className="user-info__favourites">Favourites: 5</p>
        <p className="user-info__favourites">Created palettes: 5</p>
      </section>

      <section className="user-library">
        <ul className="user-library__nav">
          <li
            className={`user-library__nav-link user-library__nav-link${
              librarySection === "collections" ? "--selected" : ""
            }`}
            onClick={() => {
              setLibrarySection("collections");
            }}
          >
            Collections
          </li>
          <li
            className={`user-library__nav-link user-library__nav-link${
              librarySection === "palettes" ? "--selected" : ""
            }`}
            onClick={() => {
              setLibrarySection("palettes");
            }}
          >
            My Palettes
          </li>
          <li
            className={`user-library__nav-link user-library__nav-link${
              librarySection === "favourites" ? "--selected" : ""
            }`}
            onClick={() => {
              setLibrarySection("favourites");
            }}
          >
            Favourites
          </li>
        </ul>

        {librarySection === "collections" && <Collections />}
      </section>
    </>
  );
}
