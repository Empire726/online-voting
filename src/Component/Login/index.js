import React from "react";
import styles from "../../StyleSheet/Login/Login.module.css";


const Login = () => {
    return (
        <>
            <section className={styles["sign-up"]}>
                <div className={styles["sign-body"]}>
                    <h1>Registration form</h1>
                    <form className={styles["format"]} id="register-form">

                        <div className={styles["form_group"]} >
                            <lable htmlFor="name">
                                <i class="zmdi zmdi-account material-icons-name" />
                            </lable>
                            <input type="text" name="name" id="name" autoComplete="off" placeholder="Your Name" />
                        </div>

                        <div className={styles['form_group']}>
                            <lable htmlFor="email">
                                <i class="zmdi zmdi-email material-icons-email" />
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
                            <lable htmlFor="phone">
                                <i class="zmdi zmdi-phone-in-talk material-icons-name" />
                            </lable>
                            <input
                                type="number"
                                name="phone"
                                id="phone"
                                autoComplete="off"
                                placeholder="Your Phone-No"
                            />
                        </div>
                        <div className={styles['form_group']}>
                            <lable htmlFor="work">
                                <i class="zmdi zmdi-slideshow material-icons-name" />
                            </lable>
                            <input
                                type="text"
                                name="work"
                                id="work"
                                autoComplete="off"
                                placeholder="Your Profession"
                            />
                        </div>
                        <div className={styles['form_group']}>
                            <lable htmlFor="password">
                                <i class="zmdi zmdi-lock material-icons-name" />
                            </lable>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="off"
                                placeholder="Your Password"
                            />
                        </div>
                        <div className={styles['form_group']}>
                            <lable htmlFor="cpassword">
                                <i class="zmdi zmdi-lock material-icons-name" />
                            </lable>
                            <input 
                                type="password"
                                name="cpassword"
                                id="cpassword"
                                autoComplete="off"
                                placeholder="Confirm your Password"
                            />
                        </div>

                    </form>
                </div>
            </section>

        </>
    );
}
export default Login;;