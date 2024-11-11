import Jumboturn from "./Jumboturn";
import "./index.css";
import { useSelector } from "react-redux";
import { useEffect, useState} from "react";
import PostsList from "..//Home/postsList";


const Home = () => {
  const { user } = useSelector((s) => s.userReducer);

  return (
    <div className="home-page">{user ?   <PostsList /> :  <Jumboturn />   }
    </div>
  );
};

export default Home;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { baseUrl } from "../../shared/constant";
// import { Button } from "antd";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Jumboturn from "../Home/Jumboturn/index"; // Import your Jumbotron component
// import "./index.css";
// // import Jumboturn from "./Jumboturn";

// const Home = () => {
//   const [posts, setPosts] = useState([]);
//   const navigate = useNavigate();

//   const { user } = useSelector((state) => state.userReducer); // Get current logged-in user info from Redux

//   // Fetch all posts when component mounts
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get(`${baseUrl}/post/get-posts`);
//         setPosts(response.data);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   // Navigate to the CreatePost page for editing
//   const handleEdit = (postId) => {
//     navigate(`/create-post?postId=${postId}`);
//   };

//   // If no user is logged in, display Jumbotron
//   if (!user) {
//     return <Jumboturn />;
//   }

//   return (
//     <div className="post-list">
//       <h1>All Posts</h1>
//       <div className="posts">
//       {posts.map((post) => {
//   console.log(post); // Log the post object to inspect its structure
//   return (
//     <div key={post._id} className="post-card">
//       <img src={post.image} alt="Post Image" className="post-image" />
//       <h2>{post.title}</h2> {/* Display post title */}
//       <p>{post.description}</p> {/* Display post description */}
//       <p>Created at: {new Date(post.createdAt).toLocaleDateString()}</p>

//       {post.author && post.author._id === user?._id && (
//         <Button type="primary" onClick={() => handleEdit(post._id)}>
//           Edit Post
//         </Button>
//       )}
//     </div>
//   );
// })}

//       </div>
//     </div>
//   );
// };

// export default Home;
