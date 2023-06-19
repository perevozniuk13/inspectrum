import { useEffect, useState } from "react";
import Collection from "../Collection/Collection";
import "./Collections.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import crossIconURL from "../../assets/images/cross-icon.png";

export default function Collections({ collectionsData, getCollectionsData }) {
  const authToken = sessionStorage.getItem("authToken");
  const [modalState, setModalState] = useState(false);
  const [createCollectionError, setCreateCollectionError] = useState("");

  const handleModal = async (event) => {
    await setModalState(true);
  };

  const handleCancel = async (event) => {
    await setModalState(false);
  };

  const handleAddNewCollection = async (e) => {
    e.preventDefault();
    const collectionName = e.target.collectionName.value;
    if (!collectionName || collectionName.length < 3) {
      setCreateCollectionError(
        "Collection name must be at least 3 characters long!"
      );
      return;
    }

    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/users/collections`,
        { collection_name: collectionName },
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

  return (
    <div className="library-collections">
      <section className="library-collections__container">
        {collectionsData.map((collection) => {
          return (
            <Collection
              handleModal={handleModal}
              modalState={modalState}
              setModalState={setModalState}
              handleCancel={handleCancel}
              key={collection.id}
              collectionId={collection.id}
              collectionName={collection.collection_name}
              getCollectionsData={getCollectionsData}
            />
          );
        })}
      </section>
      <button className="library-collections__add-button" onClick={handleModal}>
        New collection
      </button>

      <div className={`overlay ${modalState ? "" : "hidden"}`}></div>
      <div className={`modal ${modalState ? "" : "hidden"}`}>
        <img
          className="modal__cross"
          src={crossIconURL}
          alt="cancel"
          onClick={handleCancel}
        />
        <h1 className="modal__title">Create new collection</h1>
        <form
          className="modal__form"
          onSubmit={(e) => handleAddNewCollection(e)}
        >
          <input
            type="text"
            name="collectionName"
            id="collectionName"
            placeholder="Collection Name"
          />
          {createCollectionError && <p>{createCollectionError}</p>}
          <button className="modal__form-btn">Add</button>
        </form>
      </div>
    </div>
  );
}
