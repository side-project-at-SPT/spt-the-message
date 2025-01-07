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
      <div className="container h-dvh  max-w-xl absolute right-40 flex justify-end items-center gap-5">
        <button className="text-[#982000] from-[#FFFBD6] to-[#FFBA39] bg-gradient-to-b active:translate-y-1 transition-transform duration-300 rounded-xl text-2xl px-7 py-2.5 w-fit text-center">
          前往大廳
        </button>
        <button className="text-[#982000] from-[#FFFBD6] to-[#FFBA39] bg-gradient-to-b active:translate-y-1 transition-transform duration-300 shadow-[0_0px_60px_0px_rgba(255,146,0,1)] rounded-xl text-2xl px-7 py-2.5 w-fit text-center">
          前往大廳
        </button>
        <button
          className="text-white rounded-xl text-2xl p-2 w-fit text-center bg-cyan-700"
          onClick={handleClick}
        >
          前往大廳
        </button>
        <div
          className={
            "text-white rounded-xl text-2xl p-2 w-fit text-center bg-cyan-700"
          }
        >
          登入
        </div>
      </div>
    </>
  );
};

export default Lobby;
