import { Button } from "antd";
import "../index.css"; 

const Jumboturn = () => {
  return (
    <div className="jumboturn-container">
      <div className="jumboturn-left">
        <h1>Connect with Friends</h1>
        <h3>Join the community and share your moments.</h3>
        <p>
          Stay connected with the people in your life, share posts, photos, and 
          experiences, and engage with your favorite communities. Sign up today 
          and be part of our global social network.
        </p>
        <Button type="primary" size="large">
          Sign Up Now
        </Button>
      </div>
      <div className="jumboturn-right">
        <img src="https://images.unsplash.com/photo-1662070479020-73f77887c87c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhY2Vib29rJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D" alt="User Interaction" />
      </div>
    </div>
  );
};

export default Jumboturn;
