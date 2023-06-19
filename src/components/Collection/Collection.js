import { useEffect, useState } from "react";
import ReducedPalette from "../ReducedPalette/ReducedPalette";
import "./Collection.scss";
import axios from "axios";
import deleteIconURL from "../../assets/images/delete-icon.svg";
import editIconURL from "../../assets/images/edit-icon.svg";
import crossIconURL from "../../assets/images/cross-icon.png";

export default function Collection({
  collectionId,
  collectionName,
  getCollectionsData,
}) {
  const [collectionPalettesData, setCollectionPalettesData] = useState(null);
  const authToken = sessionStorage.getItem("authToken");
  const [editCollectionError, setEditCollectionError] = useState("");
  const [modalState, setModalState] = useState(false);

  const handleModal = async (event) => {
    await setModalState(true);
  };

  const handleCancel = async (event) => {
    await setModalState(false);
  };

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

  const handleEditCollectionPalette = async (e) => {
    e.preventDefault();
    const newCollectionName = e.target.collectionName.value;
    if (!newCollectionName || newCollectionName.length < 3) {
      setEditCollectionError(
        "Collection name must be at least 3 characters long!"
      );
      return;
    }

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/users/collections/${collectionId}`,
        { collection_name: newCollectionName },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      getCollectionsData();
      setModalState(false);
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
        className="library-collection__edit-button"
        src={editIconURL}
        alt="edit icon"
        onClick={handleModal}
      />
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
      <div className={`overlay ${modalState ? "" : "hidden"}`}></div>
      <div className={`modal ${modalState ? "" : "hidden"}`}>
        <img
          className="modal__cross"
          src={crossIconURL}
          alt="cancel"
          onClick={handleCancel}
        />
        <h1 className="modal__title">Edit collection name</h1>
        <form
          className="modal__form"
          onSubmit={(e) => handleEditCollectionPalette(e)}
        >
          <input
            type="text"
            name="collectionName"
            id="collectionName"
            placeholder={collectionName}
          />
          {editCollectionError && <p>{editCollectionError}</p>}
          <button className="modal__form-btn">Save Changes</button>
        </form>
      </div>
    </section>
  );
}
