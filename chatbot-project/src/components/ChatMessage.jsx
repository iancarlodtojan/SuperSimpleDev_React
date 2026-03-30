import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";

function ChatMessage({ message, sender }) {
  /*
        In React, the && operator is used for conditional rendering. If the condition before && is true, the component
        after && is rendered; if it's false, nothing is rendered.
        */
  return (
    <div
      className={sender == "user" ? "flex items-start justify-end" : "flex items-start justify-start"}
    >
      {sender === "robot" && (
        <img src={RobotProfileImage} className="w-[45px]" />
      )}
      <div className="mx-[10px] mb-5 max-w-[300px] rounded-[10px] bg-[#eeeeee] px-5 py-[15px]">{message}</div>
      {sender === "user" && (
        <img src={UserProfileImage} className="w-[45px]" />
      )}
    </div>
  );
}

export default ChatMessage;
