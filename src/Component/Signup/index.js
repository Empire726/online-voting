import React from "react";
import styles from "../../StyleSheet/Login/Login.module.css";


const Signup = () => {
    return (
        <>
            <section className={styles["sign-up"]}>
                <div className={styles["sign-body"]}>
                    <h1>Sign IN</h1>
                    <form className={styles["format"]} id="register-form">

                        <div className={styles["form_group"]} >
                            <lable htmlFor="name">
                                <i className=" zmdi zmdi-account material-icons-name zmdi-hc-1x" />
                            </lable>
                            <input type="text" name="name" id="name" autoComplete="off" placeholder="Your Name" />
                        </div>

                        <div className={styles['form_group']}>
                            <lable htmlFor="email">
                                <i className=" zmdi zmdi-email material-icons-email" />
                            </lable>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                autoComplete="off"
                                placeholder="Your Email"
                            />
                        </div>

                       
                        
                        <div className={styles['form_group']}>
                            <lable htmlFor="password">
                                <i className=" zmdi zmdi-lock material-icons-name" />
                            </lable>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="off"
                                placeholder="Your Password"
                            />
                        </div>
                        
                    </form>
                </div>
            </section>

        </>
    );
}
export default Signup;