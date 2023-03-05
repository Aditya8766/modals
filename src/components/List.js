import "./list.scss";
import React, { useState } from "react";
function List() {
   
    // const [selectedItem,setSelectItem] = useState();
    const handleOnClick = () =>{
        // selectedItem = setSelectItem;
        console.log("clicked")
    }
    const list = [
        "Ro",
        "Ram",
        "Sham",
        "Aditya"
    ];
  return (
    <div className="list">
        {
            list?.map((index,label)=>{
                return(
                    <div className={list} key={`${index}-${label}`} onclick={handleOnClick(list)}>
                        {`${index}`}
                    </div>
                );
            })
        }
    </div>
  );
}

export default List;
