import "./style.css";

type Props = {
  roomType: "open" | "closed" | "underway";
};

const RoomCard = ({ roomType }: Props) => {
  console.log(roomType);
  return (
    <>
      <div className="bg-pri">123</div>
    </>
  );
};

export default RoomCard;
