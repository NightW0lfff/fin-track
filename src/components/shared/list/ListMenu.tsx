import React from "react";
import UpdateList from "./UpdateList";
import dummyData from "../../../assets/data/dummyData";

const ListMenu: React.FC<{ type: string }> = ({ type }) => {
  return (
    <div className="ListMenu">
      {/* {type === "t" ? <div>true</div> : <div>false</div>} */}
      <div className="ListMenu__heading--container">
        <div className="ListMenu__heading--content">Date</div>
        <div className="ListMenu__heading--content">Type</div>
        <div className="ListMenu__heading--content">Amount</div>
        <div className="ListMenu__heading--content">From</div>
      </div>
      <UpdateList data={dummyData.recentTransaction} />
    </div>
  );
};

export default ListMenu;
