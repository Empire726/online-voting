import React from "react";
import img from "../../images/response.jpg"
import styles from "../../StyleSheet/Response/response.module.css"


const Response = () => {
    return (
        <>
            <div className={styles["boder"]}>
                <div className={styles["response-heading"]}>
                    <h1>Your Vote Response Done</h1>
                </div>
                <div className={styles["response"]}>
                    <img src={img} alt="none" />
                </div>

            </div>
        </>
    )
}
export default Response;