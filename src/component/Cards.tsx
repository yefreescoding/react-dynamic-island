import { AppContext } from "../context/AppContext";
import { useContext } from "react";
interface CardProps {
  title: string;
  image: string;
  text: string;
  id: number;
}

export default function Card({ id, title, image, text }: CardProps) {
  const { dispatch } = useContext(AppContext);

  const handleDeleteItem = () => {
    dispatch({
      type: "ADD_ITEM_TO_CART",
      payload: id,
    });
  };
  return (
    <article className="card">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="desc">{text}</p>
        <button type="button" className="action" onClick={handleDeleteItem}>
          Add to cart
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}
