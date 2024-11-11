import { Button, Form, Input, Select } from "antd";
import "./index.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../shared/constant";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
const CreatePost = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const { user } = useSelector((s) => s.userReducer);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const postId = searchParams.get("postId");

  useEffect(() => {
    if (postId) {
      axios
        .get(`${baseUrl}/post/${postId}`)
        .then((res) => {
          if (res.data) {
            form.setFieldsValue({
              title: res.data.post.title,
              image: res.data.post.image,
              description: res.data.post.description,
            });
          }
        })
        .catch((err) => {
          console.error("Error fetching post:", err.response?.data);
          alert(err.response?.data?.message || "An error occurred.");
        });
    }
  }, [postId]);

  const onFinish = (value) => {
    setLoading(true);


    if (postId) {
      const postDetail = { ...value, id: postId };

      axios
        .put(`${baseUrl}/post/update-post`, postDetail)
        .then((res) => {
          setLoading(false);
          navigate("/");
        })
        .catch((err) => {
          console.error("Error updating post:", err.response?.data);
          setLoading(false);
        });
    } else {
      const postDetail = { ...value, authorId: user?._id };

      axios
        .post(`${baseUrl}/post/create-post`, postDetail)
        .then((res) => {
          setLoading(false);
          navigate("/");
        })
        .catch((err) => {
          console.error("Error creating post:", err.response?.data);
          setLoading(false);
        });
    }
  };

  const handleCreate = () => {
    navigate("/");
  };
  const handleCancel = () => {
    navigate("./");
  };

  return (
    <div className="create-post-form">
      <h1>{postId ? "Update Post" : "Create Post"}</h1>
      <Form form={form} onFinish={onFinish} autoComplete="off">
        <div className="field-container">
          <p>On Your Mind</p>
          <Form.Item name="title" rules={[{ required: true, message: "This field is required!" }]}>
            <Input />
          </Form.Item>
        </div>
        <div className="field-container">
          <p>Image</p>
          <Form.Item name="image" rules={[{ required: true, message: "This field is required" }]}>
            <Input />
          </Form.Item>
        </div>
        <div className="field-container">
          <p>description</p>
          <Form.Item name="description" rules={[{ required: true, message: "This field is required" }]}>
            <Input.TextArea />
          </Form.Item>
        </div>
        <div className="footer-sec">
          <Button type="default" onClick={handleCancel}>Cancel</Button>
          <Form.Item>
            <Button onClick={handleCreate} type="primary" htmlType="submit" loading={loading}>
              {postId ? "Update" : "Create"}
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default CreatePost;
