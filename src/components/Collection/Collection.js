import { useEffect, useState } from "react";
import ReducedPalette from "../ReducedPalette/ReducedPalette";
import "./Collection.scss";
import axios from "axios";
import deleteIconURL from "../../assets/images/icons-delete.png";
import editIconURL from "../../assets/images/icons-edit.png";
import crossIconURL from "../../assets/images/cross-icon.png";
import viewIconURL from "../../assets/images/eye.png";
import { useNavigate } from "react-router-dom";
import darkDelete from "../../assets/images/delete-30.png";

export default function Collection({
  collectionId,
  collectionName,
  getCollectionsData,
  collectionsData,
}) {
  const [collectionPalettesData, setCollectionPalettesData] = useState(null);
  const authToken = sessionStorage.getItem("authToken");
  const [editCollectionError, setEditCollectionError] = useState("");
  const [modalState, setModalState] = useState(false);
  const navigate = useNavigate();
  const [newCollectionName, setNewCollectionName] = useState(collectionName);

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
    if (!newCollectionName || newCollectionName.length < 3) {
      setEditCollectionError(
        "Collection name must be at least 3 characters long!"
      );
      return;
    }

    if (
      collectionsData.find((collection) => {
        if (collection.collection_name !== collectionName) {
          return collection.collection_name === newCollectionName;
        }
      })
    ) {
      setEditCollectionError(
        `Collection named ${newCollectionName} already exists!`
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
      setEditCollectionError("");
      e.target.reset();
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
      <div className="library-collection__edit-delete-container">
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
      </div>
      <div className="library-collection__palettes-container">
        {!collectionPalettesData.length && (
          <p style={{ margin: "1rem 0" }}>
            No palettes in this collection yet...
          </p>
        )}
        {collectionPalettesData.length > 0 &&
          collectionPalettesData.map((palette) => {
            return (
              <div
                className="library-collection__reduced-palette-container"
                key={palette.id}
              >
                <ReducedPalette
                  colour1={palette.colour1}
                  colour2={palette.colour2}
                  colour3={palette.colour3}
                  colour4={palette.colour4}
                />
                <div className="library-collection__icons-container">
                  <img
                    className="library-collection__delete-palette-button"
                    src={darkDelete}
                    alt="delete icon"
                    onClick={() => handleDeleteCollectionPalette(palette.id)}
                  />
                  <img
                    className="library-collection__delete-palette-button"
                    src={viewIconURL}
                    alt="view icon"
                    onClick={() =>
                      navigate(`/palettes/${palette.id}`, { state: "user" })
                    }
                  />
                </div>
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
            placeholder="New Collection Name"
            className="modal__input"
            value={newCollectionName}
            onChange={(e) => setNewCollectionName(e.target.value)}
          />
          {editCollectionError && (
            <p className="modal-error">{editCollectionError}</p>
          )}
          <button className="modal__form-btn">Save Changes</button>
        </form>
      </div>
    </section>
  );
}
