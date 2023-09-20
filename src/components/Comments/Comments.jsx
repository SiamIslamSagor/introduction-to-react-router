import { useLoaderData } from "react-router-dom";
import Comment from "../comment/Comment";

const Comments = () => {
  const comments = useLoaderData();
  return (
    <div>
      <h2>All Comments: {comments.length}</h2>
      <div className="users">
        {comments.map(
          comment => (
            <Comment key={comment.id} comment={comment}></Comment>
          )
          //   console.log(comment)
        )}
      </div>
    </div>
  );
};

export default Comments;
