interface Props {
  link: string;
  user: string;
  avatar: string;
  postText: string;
  postImg?: string | undefined;
}

export default function Posts({
  link,
  user,
  avatar,
  postText,
  postImg,
}: Props) {
  return (
    <div className="post">
      <div className="post__top">
        <div className="post__avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="post__header">
          <h2>@{user}</h2>
          <p>3d ago</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{postText}</p>
        {postImg && (
          <div className="post__img">
            <img src={postImg} alt="" />
          </div>
        )}
      </div>
      <a href={link} className="post__link">
        <svg
          width="18px"
          height="18px"
          stroke-width="2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
        >
          <path
            d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linejoin="round"
          ></path>
        </svg>
        <span>Go to post</span>
      </a>
    </div>
  );
}
