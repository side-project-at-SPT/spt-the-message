import { useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/login.webp";

const Lobby = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/lobby");
  };

  return (
    <>
      <img
        src={backgroundImage}
        alt="background"
        className="absolute object-cover min-w-full h-dvh inset-0"
      />
      <div className="container max-w-xl mx-auto mt-36 relative">
        <div className={"text-red-600 text-2xl"}>登入</div>
        <button onClick={handleClick}>前往大廳</button>
      </div>
    </>
  );
};

export default Lobby;
