import React from "react";
import { Category } from "@/common/types";


interface Props {
  name: Category;
  selected: boolean;
  setTab: React.Dispatch<React.SetStateAction<Category>>;
}

const NavigationTab = ({ name, selected, setTab }: Props) => {
  return (
    <div
      key={name}
      onClick={() => setTab(name)}
      className={
        "border-solid border-l border-gray-100 px-2 md:px-3 lg:px-5 py-1 uppercase hover:bg-black hover:text-white cursor-pointer" +
        (selected ? " bg-black text-white" : " ")
      }
    >
      <span className="text-xs md:text-sm lg:text-base text-center align-middle overflow-hidden">
        {name}
      </span>
    </div>
  );
};

export default NavigationTab;
