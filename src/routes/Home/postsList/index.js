import { useEffect, useState } from "react";
import PostCard from "../../../components/PostCard"; // Adjust the path as per your project structure
import axios from "axios";
import { baseUrl } from "../../../shared/constant";
import { Modal, Spin } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

const { confirm } = Modal;

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}/post/get-posts`)
      .then((res) => {
        console.log("🚀 ~ .then ~ res:", res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const onDelete = (post) => {
    confirm({
      title: "Delete this post?",
      icon: <ExclamationCircleFilled />,
      content: "Are you sure you want to delete this post?",
      onOk() {
        return axios
          .delete(`${baseUrl}/post/delete/${post?._id}`)
          .then((res) => {
            console.log("🚀 ~ .then ~ res:", res);
            if (res.data?.error) {
              alert(res.data?.message);
            } else {
              const filteredData = posts.filter((p) => p?._id !== post?._id);
              setPosts(filteredData);
            }
          })
          .catch((err) => {
            console.error("🚀 ~ onOk ~ err:", err);
            alert(err?.message);
          });
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return (
    <div className="post-list">
      {loading ? (
        <Spin size="large" />
      ) : posts.length ? (
        posts.map((post) => (
          <PostCard key={post._id} post={post} onDelete={() => onDelete(post)} />
        ))
      ) : (
        <h3>No Posts Yet</h3>
      )}
    </div>
  );
};

export default PostsList;
