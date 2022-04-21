import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "./Card/Icon";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function TopCartButton() {
  const navigate = useNavigate();
  return (
    <div className=" fixed top-0 right-0 z-10">
      <div className="relative ">
        <div className="absolute text-center w-[25px] top-2 right-4 rounded-3xl bg-white text-black">
          7
        </div>
        <button
          className="button mx-6 my-5"
          onClick={() => navigate("/my-cart")}
        >
          <Icon icon={<AiOutlineShoppingCart size="24" />} />
        </button>
      </div>
    </div>
  );
}