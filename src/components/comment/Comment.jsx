import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Comment = ({ comment }) => {
  const { id, name, email } = comment;

  const commentStyle = {
    border: "2px solid yellow",
    padding: "5px",
    borderRadius: "10px",
    margin: "10px",
  };
  return (
    <div style={commentStyle}>
      <h2>Comment Person: {name}</h2>
      {/* <p>Comment Id: {id}</p>
      <p>Comment Email: {email}</p> */}
      <Link to={`/comment/${id}`}>
        <button>Show Comment</button>
      </Link>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default Comment;
