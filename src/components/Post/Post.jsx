import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();
  const postStyle = {
    border: "2px solid yellow",
    padding: "5px",
    borderRadius: "10px",
    margin: "10px",
  };

  const handleShowDetail = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div style={postStyle}>
      <h3>Post of Id : {id}</h3>
      <p>{title}</p>
      <Link to={`/post/${id}`}>
        <button>Post Details</button>
      </Link>
      <button onClick={handleShowDetail}>Click To See Details</button>
    </div>
  );
};

export default Post;
