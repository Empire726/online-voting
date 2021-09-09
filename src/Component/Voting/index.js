import React, {useEffect} from "react";
import style from "../../StyleSheet/Voting/voting.module.css";
import { Meterial } from "./Meterial";
import { NavLink } from "react-router-dom";
// import { useHistory } from "react-router-dom";


const Votoing = () => {
    return (
        <>
            <div className={style["body-vote"]} >
                <div className={style["voting"]}>
                   
                   { Meterial.map((item ,index)=>{
                        return(
                              <div className={style["list"]} key={index}>
                     
                    <img src={item.img} alt="none"/>
                    <h5>{item.Name}</h5>
                    <div className={style["light"]}> </div>
                   <NavLink to="/response"> <button className="btn btn-success btn-md mybtn"> vote</button></NavLink>
                    </div>
                      )
                    })}
                </div>

            </div>

        </>
    )
};
export default Votoing;