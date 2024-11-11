import { Button, Form, Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../shared/constant";
import { updateProfile } from "../../store/userSlice";

const UserProfile = () => {
  const { user } = useSelector((s) => s.userReducer);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      console.log("🚀 ~ useEffect ~ user:", user);
      form.setFieldsValue(user);
    }
  }, [user]);

  const onFinish = async (value) => {
    setIsLoading(true);

    try {
      const details = { ...value, id: user?._id };

      const res = axios.post(`${baseUrl}/user/update-profile`, details);

      if (res.data?.user) {
        dispatch(updateProfile(res.data?.user));
        localStorage.setItem("user", JSON.stringify(res.data?.user));
      } else {
        alert(res?.data?.message);
      }
    } catch (e) {
      console.log("🚀 ~ e:", e);
      alert(e?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handlesubmit = () => {
    UserProfile(UserProfile);
  }
  return (
    <div className="profile-setting">
      <h1>Profile Setting</h1>
      <Form
        name="basic"
        initialValues={{
          name: "",
          email: "",
          profile: "",
          contact: "",
          age: "",
          address: "",
          about: "",
        }}
        onFinish={onFinish}
        autoComplete="off"
        form={form}
      >
        <div className="field-container">
          <p>Name</p>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>

        <div className="field-container">
          <p>Email</p>
          <Form.Item name="email">
            <Input disabled={true} />
          </Form.Item>
        </div>
        {/* <div className="field-container">
          <p>Profile</p>
          <Form.Item
            name="profile"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div> */}
        <div className="field-container">
          <p>Contact</p>
          <Form.Item name="contact">
            <Input />
          </Form.Item>
        </div>
        <div className="field-container">
          <p>Age</p>
          <Form.Item name="age">
            <Input />
          </Form.Item>
        </div>
        <div className="field-container">
          <p>Address</p>
          <Form.Item name="address">
            <Input />
          </Form.Item>
        </div>
        <div className="field-container">
          <p>Bio</p>
          <Form.Item name="about">
            <Input.TextArea />
          </Form.Item>
        </div>
        <Form.Item className="footer-sec-button">
          <Button onClick={handlesubmit} loading={isLoading} type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserProfile;
