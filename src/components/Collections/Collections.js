import { useEffect, useState } from "react";
import Collection from "../Collection/Collection";
import "./Collections.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import crossIconURL from "../../assets/images/cross-icon.png";
import searchIconURL from "../../assets/images/icons8-search-32.png";

export default function Collections({
  collectionsData,
  getCollectionsData,
  setCollectionsData,
}) {
  const authToken = sessionStorage.getItem("authToken");
  const [modalState, setModalState] = useState(false);
  const [createCollectionError, setCreateCollectionError] = useState("");
  const handleModal = async (event) => {
    await setModalState(true);
  };

  const handleCancel = async (event) => {
    await setModalState(false);
  };

  const searchCollectionsData = async (search_by) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/users/collections?search_by=${search_by}`,
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

      await getCollectionsData();
      setModalState(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCollectionsData();
  }, []);

  return (
    <div className="library-collections">
      <section className="library-collections__searchbar-container">
        <input
          type="text"
          id="search"
          name="search"
          className="library-collections__searchbar"
          placeholder="Search collections..."
          onChange={(e) => searchCollectionsData(e.target.value)}
        />
        <img
          className="library-collections__searchbar-icon"
          src={searchIconURL}
          alt="search icon"
        />
      </section>
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
