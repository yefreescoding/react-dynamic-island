import DynamicIsland from "./dynamicIsland/DynamicIsland";
import InputEmail from "./InputEmail";

export default function Body() {
  return (
    <>
      <section className="section cover">
        <DynamicIsland />
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
        <div className="cover_img">
          <img src="/cover-img.webp" alt="" />
        </div>
      </section>
    </>
  );
}
