import React, { useState } from 'react'
import { } from '@mui/icons-material'
const Register = () => {



    const [Form, setFrom] = useState({})
    const handelChange = (e) => {
        setFrom({
            ...form,
            [e.target.name]: [e.target.value]

        })
        const onSubmit = (e) => {
            e.preventDefault();
            dispatch(Registration(form, navigate))
        }

    }

    return (
        <div><section class="signup">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">Sign up</h2>
                        <form method="POST" class="register-form" id="register-form">
                            <div class="form-group">
                                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" handelChange={handelChange} placeholder="Your Name" />
                            </div>
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" handelChange={handelChange} placeholder="Your Email" />
                            </div>
                            <div class="form-group">
                                <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" handelChange={handelChange} placeholder="Password" />
                            </div>
                            <div class="form-group">
                                <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass"handelChange={handelChange} placeholder="Repeat your password" />
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section></div>
    )
}

export default Register