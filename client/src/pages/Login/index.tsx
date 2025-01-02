import { useNavigate } from "react-router-dom";
const Lobby = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/lobby");
  };

  return (
    <div className="container max-w-xl mx-auto mt-24">
      <div className={"text-red-600 text-2xl"}>登入</div>
      <button onClick={handleClick}>前往大廳</button>
    </div>
  );
};

export default Lobby;
