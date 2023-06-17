import { useEffect, useState } from "react";
import ReducedPalette from "../ReducedPalette/ReducedPalette";
import "./Collection.scss";
import axios from "axios";

export default function Collection({ collectionId, userId, collectionName }) {
  const [collectionPalettesData, setCollectionPalettesData] = useState(null);

  const getCollectionPalettesData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/users/${userId}/collections/${collectionId}/palettes`
      );
      setCollectionPalettesData(response.data);
    } catch (err) {
      console.log(err);
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
      <div className="library-collection__palettes-container">
        {collectionPalettesData.map((palette) => {
          return (
            <ReducedPalette
              key={palette.id}
              colour1={palette.colour1}
              colour2={palette.colour2}
              colour3={palette.colour3}
              colour4={palette.colour4}
            />
          );
        })}
      </div>
    </section>
  );
}
