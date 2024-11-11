import { Button, Card } from "antd";
import "./index.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PostCard = ({ post }) => {
  const { user } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/post/create-post?postId=${post?._id}`);
  };

  return (
    <Card
      className="post-card"
      hoverable
      cover={<img src={post.image} alt="post" />}
    >
      <h2>{post.title}</h2>
      <p>{post.description}</p>

      <div className="creator-profile">
        <img src={post?.author?.profile || "/user-icon.png"} alt="profile" />
        <div>
          <p className="creator-name">{post?.author?.name}</p>
          <p className="created-at">{moment(post?.createdAt).fromNow()}</p>
        </div>
      </div>

      {post?.author?._id === user?._id && (
        <div className="action-button">
          <Button onClick={handleEdit}>Edit</Button>
        </div>
      )}
    </Card>
  );
};

export default PostCard;
