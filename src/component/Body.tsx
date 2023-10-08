import Card from "./Cards";
import InputEmail from "./InputEmail";

export default function Body() {
  return (
    <main className="main">
      <section className="section cover">
        <div className="text">
          <h1 className="cover__h1">IOS DYNAMIC ISLAND WITH REACT</h1>
          <p>
            Get the awesome dynamic island made for Apple for its iPhones Pros,
            now everywhere. Thanks to React and a little bit of effort here's
            this amazing component.
          </p>
          <p>
            If you like the component, and want to connect with me. Share your
            email and I will reach to you.
          </p>
        </div>
        <form className="cover__email" action="">
          <div>
            <InputEmail />
          </div>
          <p>No spam, I promise.</p>
        </form>
      </section>
      <div className="cover_img">
        <img src="/cover-img.webp" alt="" />
      </div>
      <section className="section">
        <div className="text">
          <h2>
            The same animations, functionality, and design as the original.
          </h2>
          <p>
            This component will look amazing in any webpage or web application
            you want to add it to. Feel free to modify the code to your needs.
          </p>
        </div>
        <div className="card_container">
          <Card
            title="Add this item to the cart to see what happens"
            image="/"
            text="The animation is almost identiacal to the one that you can find on the iPhones, looks great on any website."
          />
        </div>
      </section>
    </main>
  );
}
