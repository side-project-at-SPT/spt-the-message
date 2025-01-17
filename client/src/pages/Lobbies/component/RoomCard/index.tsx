import { useMemo } from "react";
import "./style.css";

type Props = {
  roomType: "open" | "closed" | "underway";
  personNum: number;
  roomName: string;
};

const RoomCard = ({ roomType, personNum, roomName }: Props) => {
  const roomTypeText = useMemo(() => {
    if (roomType === "open") {
      return "開放中";
    }
    if (roomType === "closed") {
      return "即將開始";
    }
    return "遊戲中";
  }, [roomType]);

  return (
    <div
      className={`w-[278px] h-[194px] border-4  rounded-3xl bg-room-card-gradient flex flex-col justify-end items-center relative 
      ${roomType === "open" && "shadow-blue"} 
      ${roomType === "open" ? "border-active" : "border-white"}
      `}
    >
      <div
        className={`w-[110px] h-[46px] rounded-[30px] absolute top-[-21px] left-[76px] flex justify-center items-center text-primary text-[20px] 
        ${roomType === "open" ? "bg-active" : "bg-gray-100"}`}
      >
        {roomTypeText}
      </div>
      <p className="font-medium text-primary text-[24px] w-[183px] h-[72px] text-wrap text-center">
        {roomName}
      </p>
      <p className="text-primary font-medium text-base my-5 ">{personNum}/4</p>
    </div>
  );
};

export default RoomCard;
