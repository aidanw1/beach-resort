import React, { useContext } from "react";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";
import { RoomContext } from "../context";
import Loading from "./Loading";

const RoomContainer = () => {
  const value = useContext(RoomContext);
  const { rooms, sortedRooms, loading } = value;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
};

export default RoomContainer;
