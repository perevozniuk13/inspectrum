import Collection from "../Collection/Collection";
import "./Collections.scss";

export default function Collections() {
  return (
    <div className="library-collections">
      <section className="library-collections__container">
        <Collection />
        <Collection />
        <Collection />
      </section>
      <button className="library-collections__button">New collection</button>
    </div>
  );
}
