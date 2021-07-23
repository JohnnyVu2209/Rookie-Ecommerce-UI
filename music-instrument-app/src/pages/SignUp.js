import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 login-section-wrapper">
                        <div className="brand-wrapper">
                            <img src="assets/images/logo.svg" alt="logo" className="logo" />
                        </div>
                        <div className="login-wrapper my-auto">
                            <h1 className="login-title">Sign Up</h1>
                            <form action="#!">
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" name="username" id="username" className="form-control" placeholder="enter your username" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" className="form-control" placeholder="email@example.com" />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" className="form-control" placeholder="enter your passsword" />
                                </div>
                                <input name="login" id="login" className="btn btn-block login-btn" type="button" defaultValue="Sign up" />
                            </form>
                            <p className="login-wrapper-footer-text">Already have an account?
                                <Link to="/signin" className="text-reset">Sign in</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 px-0 d-none d-sm-block">
                        <img src="assets/images/login.jpg" alt="login image" className="login-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
