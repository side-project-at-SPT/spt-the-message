// import { useState,useMemo } from "react";

import RoomCard from "./component/RoomCard";

const Lobbies = () => {
  return (
    <div className="w-full h-screen pt-10 pl-10 pr-10 bg-[url('src/assets/bg-lobbies.webp')] bg-cover bg-center">
      <RoomCard
        personNum={1}
        roomType="underway"
        roomName="ker ker ABC room123"
      />
    </div>
  );
};

export default Lobbies;
