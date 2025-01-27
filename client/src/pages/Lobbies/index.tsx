import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RoomCard, { RoomItem } from "./component/RoomCard";
import InputModal from "../../common-components/InputModal";
const mockData: RoomItem[] = [
  {
    roomName: "ker ker ABC room123",
    roomType: "open",
    personNum: 3,
  },
  {
    roomName: "ker ker ABC room123",
    roomType: "closed",
    personNum: 4,
  },
  {
    roomName: "ker ker ABC room123",
    roomType: "underway",
    personNum: 3,
  },
];

const Lobbies = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("Player Name");
  const [editNameModal, setEditNameModal] = useState<boolean>(false);
  const [addRoomModal, setAddRoomModal] = useState<boolean>(false);
  const [roomList, setRoomList] = useState<RoomItem[] | []>([]);

  // modal controller
  const openEditNameModal = () => {
    setEditNameModal(true);
  };
  const closedEditNameModal = () => {
    setEditNameModal(false);
  };
  const openAddRoomModal = () => {
    setAddRoomModal(true);
  };
  const closedAddRoomModal = () => {
    setAddRoomModal(false);
  };
  const handleEditName = (value: string) => {
    setUserName(value);
    closedEditNameModal();
  };
  // request controller
  const handleGetRoomList = () => {
    // TODO: get room list api
    setRoomList(mockData);
  };
  const handleAddRoom = (roomName: string) => {
    // TODO: post add room api
    mockData.push({
      roomName,
      roomType: "open",
      personNum: 0,
    });
    handleGetRoomList();
    closedAddRoomModal();
  };
  const handleLogout = () => {
    // TODO: post logout api
    navigate("/");
  };

  useEffect(() => {
    handleGetRoomList();
  }, []);

  return (
    <div className="w-full h-screen pt-10 pl-10 pr-10 bg-[url('src/assets/bg-lobbies.webp')] bg-cover bg-center">
      {editNameModal && (
        <InputModal
          title="修改暱稱"
          defaultName={userName}
          onCancel={closedEditNameModal}
          onSubmit={handleEditName}
          open={editNameModal}
        />
      )}
      {addRoomModal && (
        <InputModal
          title="新增房間"
          open={addRoomModal}
          defaultName=""
          submitBtnText="新增"
          onCancel={closedAddRoomModal}
          onSubmit={handleAddRoom}
        />
      )}
      <div className="w-full flex items-center justify-between">
        {/* header */}
        <div className="flex items-center">
          <div className="w-[200px] h-12 px-5 flex justify-around items-center bg-modal-overlay rounded-[30px]">
            <p className="text-lg font-bold text-white">{userName}</p>
            <button
              className="bg-[url('src/assets/icon/icon-edit.webp')] bg-cover bg-center w-8 h-8"
              onClick={openEditNameModal}
            />
          </div>
          <p className="ml-4 text-primary text-lg">在線人數 49 人</p>
        </div>
        <button
          className="w-16 h-16 bg-[url('src/assets/icon/icon-return.webp')] bg-center bg-contain bg-no-repeat"
          onClick={handleLogout}
        />
      </div>
      {/* main */}
      <div className="w-5/6 h-full pt-[45px] mx-auto overflow-y-auto flex flex-wrap content-start">
        {/* add room box */}
        <div
          className="w-[278px] h-[194px] border-4 border-white rounded-3xl  flex flex-col justify-center items-center shadow-blue mr-7 mb-10 cursor-pointer hover:translate-y-px hover:shadow-transparent"
          onClick={openAddRoomModal}
        >
          <img src="src/assets/add-room-btn.webp" alt="" className="w-8 h-8" />
          <p className="mt-3 text-primary text-xl font-medium">新增房間</p>
        </div>
        {/* room list */}
        {roomList &&
          roomList?.map(
            ({ roomName, roomType, personNum }: RoomItem, index) => (
              <RoomCard
                roomName={roomName}
                roomType={roomType}
                personNum={personNum}
                key={roomName + index}
                className="mb-10 mr-7"
              />
            ),
          )}
      </div>
    </div>
  );
};

export default Lobbies;
