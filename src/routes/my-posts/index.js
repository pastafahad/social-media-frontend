// import { useEffect, useState } from "react";
// import PostCard from "../my-posts";
// import axios from "axios";
// import { baseUrl } from "../../shared/constant";
// import { useSelector } from "react-redux";

// const MyPosts = () => {
//   const [posts, setPosts] = useState([]);
//   const { user } = useSelector((state) => state.userReducer);

//   useEffect(() => {
//     // Agar user logged in hai aur uska ID available hai
//     if (user?._id) {
//       axios
//         .get(`${baseUrl}/post/get-posts-by-user/${user._id}`) // User ke sabhi posts ke liye API call
//         .then((res) => {
//           console.log(res.data); // Response data check karen
//           setPosts(res.data);    // Posts ko state mein update karen
//         })
//         .catch((err) => {
//           console.error("Error fetching the posts:", err);
//         });
//     } else {
//       console.error("User not logged in");
//     }
//   }, [user]);

//   return (
//     <div className="my-post-list">
//       {posts.length ? (
//         posts.map((post) => <PostCard key={post._id} post={post} />)
//       ) : (
//         <h3>No Posts Yet</h3>
//       )}
//     </div>
//   );
// };

// export default MyPosts;
