import "./Mockup1.scss";

export default function Mockup1() {
  return (
    <>
      <div
        className="mockup1"
        style={{ backgroundColor: localStorage.getItem("colour1") }}
      >
        <nav className="mockup1-nav">
          <p className="mackoup1-nav__logo">LOGO</p>
          <div className="mackoup1-nav__links">
            <p className="mackoup1-nav__link">About</p>
            <p className="mackoup1-nav__link">Contact us</p>
            <p className="mackoup1-nav__link">Profile</p>
          </div>
        </nav>

        <main className="mockup1-main">
          <section className="mockup1-main__hero">
            <h1 className="mockup1-main__heading">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h1>
            <img
              className="mockup1-main__hero-image"
              src="https://images.ctfassets.net/lh3zuq09vnm2/2gLKvsmUG0KvHHCNzyJnVy/55480b25e5e66b5a42e6231200bc0789/Website-tracking.png"
              alt=""
            />
          </section>
          <section className="mockup1-main__body">
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              quod quae consectetur neque quo maxime dolorem, tempore aperiam
              nihil temporibus deserunt. Iste nostrum nisi cupiditate explicabo
              ipsam libero consequatur molestiae. Fugit optio nesciunt quae,
              perspiciatis accusamus aliquid eligendi odio consequatur, pariatur
              voluptas illo commodi iusto harum itaque! Ducimus repudiandae
              fugit accusantium! Expedita.
            </p>
          </section>
        </main>

        <footer>
          <h2>Contact us</h2>
          <ul>
            <li>Email: test@gmail.com</li>
            <li>Phone: 07364562553</li>
            <li>Address: London, UK</li>
          </ul>
        </footer>
      </div>
    </>
  );
}
