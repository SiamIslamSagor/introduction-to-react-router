import { useLoaderData } from "react-router-dom";

const CommentDetails = () => {
  const commentDetails = useLoaderData();
  const { name: author, body, email, id } = commentDetails;
  const commentStyle = {
    border: "2px solid yellow",
    padding: "5px",
    borderRadius: "10px",
    margin: "10px",
  };
  return (
    <div style={commentStyle}>
      <h2>Author: {author}</h2>
      <p>Author Id: {id}</p>
      <p>Author Email: {email}</p>
      <p>
        <b>{body}</b>
      </p>
    </div>
  );
};

export default CommentDetails;
