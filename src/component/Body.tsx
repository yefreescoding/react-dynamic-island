import InputEmail from "./InputEmail";

interface BodyProps {
  children: React.ReactNode;
}

export default function Body({ children }: BodyProps) {
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
        {children}
      </section>
    </main>
  );
}
