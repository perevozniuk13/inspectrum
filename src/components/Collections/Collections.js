import { useEffect, useState } from "react";
import Collection from "../Collection/Collection";
import "./Collections.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Collections() {
  const [collectionsData, setCollectionsData] = useState(null);
  const authToken = sessionStorage.getItem("authToken");

  const getCollectionsData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/users/collections`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setCollectionsData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCollectionsData();
  }, []);

  if (!collectionsData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="library-collections">
      <section className="library-collections__container">
        {collectionsData.map((collection) => {
          return (
            <Collection
              key={collection.id}
              collectionId={collection.id}
              collectionName={collection.collection_name}
              getCollectionsData={getCollectionsData}
            />
          );
        })}
      </section>
      <button className="library-collections__add-button">
        New collection
      </button>
    </div>
  );
}
