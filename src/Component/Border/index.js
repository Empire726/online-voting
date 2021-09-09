import React from 'react'
import { Imge } from './imge'
import styles from "../../StyleSheet/Voting/voting.module.css"

const Border = () => {
    return (
        <>
            <div className={styles["image_div"]}>
                {Imge.map((item, index) => {

                    return (<div key={index}>
                        <img src={item.img} alt="none" />
                    </div>

                    )
                })}
                </div>

        </>
    )
}

export default Border;
