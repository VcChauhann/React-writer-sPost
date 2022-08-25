import axios from "axios";
import { useEffect } from "react";

function DashBoard() {
    useEffect(() => {
        // register();
        getAllUser();
    })
    const getAllUser= () =>{
        alert("brfore");
        axios.get("http://localhost:8080/allUsers").then(
            (res)=>{
                console.log(res);
            },
            (err)=>{
                console.log(err);
            }
        );
        alert("after");

    }
    return (
        <div>
            DashBoard
        </div>
    )
}

export default DashBoard;