import React, { useState } from "react";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import SmallBox from "./SmallBox";

const Dashboard: React.FC = () => {
  const [activeOrders, setActiveOrders] = useState<number>(0);
  const [inPlaceOrders, setInPlaceOrders] = useState<number>(0);
  const [ordersForDelivery, setOrdersForDelivery] = useState<number>(0);
  const [totalOrders, setTotalOrders] = useState<number>(0);

  const renderSmallBoxes = () => {
    <>
      <SmallBox
        number={activeOrders}
        description="Active orders"
        color="green"
        link={""}
        Icon={<GiForkKnifeSpoon />}
      />
      <SmallBox
        number={inPlaceOrders}
        description="In place orders"
        color="blue"
        link={""}
        Icon={<FaUsers />}
      />
      <SmallBox
        number={ordersForDelivery}
        description="Orders for delivery"
        color="red"
        link={""}
        Icon={<FaTruck />}
      />
      <SmallBox
        number={totalOrders}
        description="Total orders"
        color="yellow"
        link={""}
        Icon={<HiShoppingBag />}
      />
    </>;
  };
  return (
    <div className="justify-center md:ml-60 p-5 text-gray-700">
      <div className="flex w-full justify-between items-center mb-10">
        <p className="md:text-3xl text-2xl font-semibold">Dashboard</p>
        <p className="text-sm md:text-lg">Home / Dashboard</p>
      </div>
      <div className="sm:flex md:flex justify-evenly h-36 items-center text-white"></div>
    </div>
  );
};

export default Dashboard;
