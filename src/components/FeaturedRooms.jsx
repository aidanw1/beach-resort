import React, { useContext } from "react";
import { RoomContext } from "../context";
import Room from "./Room";
import Loading from "./Loading";
import Title from "./Title";

const FeaturedRooms = () => {
  const value = useContext(RoomContext);
  const { featuredRooms: rooms, loading } = value;

  const room = rooms.map((room) => {
    return <Room key={room.id} room={room} />;
  });

  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">{loading ? <Loading /> : room}</div>
    </section>
  );
};

export default FeaturedRooms;
