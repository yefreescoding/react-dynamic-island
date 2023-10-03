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
        <span className="title">{title}</span>
        <p className="desc">{text}</p>
        <span className="action">
          Add to cart
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </article>
  );
}
