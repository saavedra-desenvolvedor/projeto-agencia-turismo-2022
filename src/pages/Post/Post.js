import { useLocation, Link } from "react-router-dom";
import { posts } from "../../data";
import { AiOutlineLeft } from "react-icons/ai";

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[3];

  const post = posts.find((p) => p.id.toString() === path);

  console.log(location);

  return (
    <div className="post">
      <img src={post.img} alt="" className="postImg" />
      <p className="postTitle">{post.title}</p>
      <p className="postDesc">{post.desc}</p>
      <p className="postLongDesc">{post.longDesc}</p>
      <Link to="/destinations" className="textVoltar">
        <AiOutlineLeft className="btnVolta" />
        Voltar
      </Link>
    </div>
  );
};

export default Post;
