interface CardProps {
  title: string;
  image: string;
  text: string;
}

export default function Card({ title, image, text }: CardProps) {
  return (
    <article className="card">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="desc">{text}</p>
        <button type="button" className="action">
          Add to cart
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}
