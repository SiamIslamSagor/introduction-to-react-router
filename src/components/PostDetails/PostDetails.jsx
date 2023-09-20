import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { postId } = useParams();
  const { id, title, body } = post;
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  console.log(postId);
  return (
    <div>
      <h2>Post Details about : {id}</h2>
      <p>{title}</p>
      <p>{body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
