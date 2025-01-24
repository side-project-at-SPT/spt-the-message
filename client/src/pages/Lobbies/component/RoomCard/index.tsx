import { useMemo } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const enum RoomType {
  OPEN = "open",
  CLOSED = "closed",
  UNDERWAY = "underway",
}

export type RoomItem = {
  roomType: "open" | "closed" | "underway";
  roomName: string;
  personNum: number;
};

export type Props = RoomItem & {
  className?: string;
};

const RoomCard = ({ roomType, personNum, roomName, className }: Props) => {
  const roomTypeText = useMemo(() => {
    if (roomType === RoomType.OPEN) {
      return "開放中";
    }
    if (roomType === RoomType.CLOSED) {
      return "即將開始";
    }
    return "遊戲中";
  }, [roomType]);

  return (
    <div
      className={`w-[278px] h-[194px] border-4  rounded-3xl bg-room-card-gradient flex flex-col justify-end items-center relative 
      ${className}
      ${roomType === RoomType.OPEN && "shadow-blue"} 
      ${roomType === RoomType.OPEN ? "border-active" : "border-white"}
      `}
    >
      <div
        className={`w-[110px] h-[46px] rounded-[30px] absolute top-[-21px] left-[76px] flex justify-center items-center text-primary text-[20px] 
        ${roomType === RoomType.OPEN ? "bg-active" : "bg-gray-100"}`}
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
