import React, { useEffect } from "react";
import { Transaction } from "../../../assets/data/dummyData";

interface Props {
  data: Transaction[];
}

function UpdateList({ data }: Props) {
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="listItem">
      {data.map((item) => (
        <div key={item.id} className="listItem__container">
          <div className="listItem__item">
            {new Date(item.data.startDate).toLocaleDateString("en-AU", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </div>
          <div className="listItem__item">{item.data.type}</div>
          <div className="listItem__item">${item.data.amount}</div>
          <div className="listItem__item">{item.data.src}</div>
        </div>
      ))}
    </div>
  );
}

export default UpdateList;
