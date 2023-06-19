import { useEffect, useState } from "react";
import ReducedPalette from "../ReducedPalette/ReducedPalette";
import "./Collection.scss";
import axios from "axios";
import deleteIconURL from "../../assets/images/delete-icon.svg";

export default function Collection({
  collectionId,
  collectionName,
  getCollectionsData,
}) {
  const [collectionPalettesData, setCollectionPalettesData] = useState(null);
  const authToken = sessionStorage.getItem("authToken");

  const getCollectionPalettesData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/users/collections/${collectionId}/palettes`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setCollectionPalettesData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteCollection = async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/users/collections/${collectionId}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      getCollectionsData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteCollectionPalette = async (paletteId) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/users/collections/${collectionId}/palettes/${paletteId}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      getCollectionPalettesData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCollectionPalettesData();
  }, []);

  if (!collectionPalettesData) {
    return <p>Loading...</p>;
  }

  return (
    <section className="library-collection">
      <h3 className="library-collection__name">{collectionName}</h3>
      <img
        className="library-collection__delete-button"
        src={deleteIconURL}
        alt="delete icon"
        onClick={handleDeleteCollection}
      />
      <div className="library-collection__palettes-container">
        {collectionPalettesData.map((palette) => {
          return (
            <div key={palette.id}>
              <ReducedPalette
                colour1={palette.colour1}
                colour2={palette.colour2}
                colour3={palette.colour3}
                colour4={palette.colour4}
              />
              <img
                className="library-collection__delete-palette-button"
                src={deleteIconURL}
                alt="delete icon"
                onClick={() => handleDeleteCollectionPalette(palette.id)}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
