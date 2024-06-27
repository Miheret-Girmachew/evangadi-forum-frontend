// import React, { useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import axios from "../../axios/axiosConfig";
// import "./account.css";

// function Register() {
//   const navigate = useNavigate();
//   const userNameDom = useRef();
//   const firstNameDom = useRef();
//   const lastNameDom = useRef();
//   const emailDom = useRef();
//   const passwordDom = useRef();

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const usernameValue = userNameDom.current.value;
//     const firstValue = firstNameDom.current.value;
//     const lastValue = lastNameDom.current.value;
//     const emailValue = emailDom.current.value;
//     const passValue = passwordDom.current.value;
//     if (
//       !usernameValue ||
//       !firstValue ||
//       !lastValue ||
//       !emailValue ||
//       !passValue
//     ) {
//       alert("please provide all rewuired informations");
//       return;
//     }
//     // console.log((userNameDom.current.style.backgroundColor = "red"));
//     // console.log(userNameDom.current.value);

//     try {
//       await axios.post("/users/register", {
//         username: usernameValue,
//         firstname: firstValue,
//         lastname: lastValue,
//         email: emailValue,
//         password: passValue,
//       });
//       alert("registered successfuly, please login");
//       navigate("/login");
//     } catch (error) {
//       alert("something went wrong");
//       console.log(error.response);
//     }
//   }
//   return (
//     <div className="container">
//       <div className="row justify-content-center align-items-center vh-100">
//         <div className="col-md-6">
//           <div className="authfy-panel panel-login text-center p-4 shadow">
//             <div className="authfy-heading mb-4">
//               <h3 className="auth-title"> Join the network </h3>
//               <p>
//                 Already have an account?{" "}
//                 <Link to="/login" className="lnk-toggler small-text">
//                   Sign in
//                 </Link>
//               </p>
//               <form onSubmit={handleSubmit}>
//                 <div>
//                   <span>Username:</span>
//                   <input
//                     ref={userNameDom}
//                     type="text"
//                     id="username"
//                     placeholder="username"
//                   />
//                 </div>
//                 <br />
//                 <div>
//                   <span> First Name: </span>
//                   <input
//                     ref={firstNameDom}
//                     type="text"
//                     id="firstName"
//                     placeholder="First Name"
//                   />
//                 </div>

//                 <br />
//                 <div>
//                   <span> Last Name: </span>
//                   <input
//                     ref={lastNameDom}
//                     type="text"
//                     id="lastName"
//                     placeholder="Last Name"
//                   />
//                 </div>

//                 <br />
//                 <div>
//                   <span> Email: </span>
//                   <input
//                     ref={emailDom}
//                     type="email"
//                     id="email"
//                     placeholder="email"
//                   />
//                 </div>

//                 <div>
//                   <span> Password: </span>
//                   <input
//                     ref={passwordDom}
//                     type="password"
//                     id="password"
//                     placeholder="password"
//                   />
//                 </div>
//                 <div class="form-group ">
//                   <p class="term-policy text-muted small">
//                     I agree to the{" "}
//                     <Link
//                       to="/legal/privacy/"
//                       target="_blank"
//                       className="small-text">
//                       privacy policy
//                     </Link>{" "}
//                     and{" "}
//                     <Link
//                       to="/legal/terms/"
//                       target="_blank"
//                       className="small-text ">
//                       terms of service
//                     </Link>
//                   </p>
//                 </div>

//                 <Button type="submit" className="btn btn-primary btn-block">
//                   Agree and Join
//                 </Button>
//               </form>{" "}
//               <div className="mt-3">
//                 <Link
//                   className="lnk-toggler small-text"
//                   data-panel=".panel-login"
//                   to="/login">
//                   Already have an account?
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div class="col-md-6 col-12 col-sm-6 authfy-panel panel-signup">
//           <div class="padd-text fadeInLeft justify-content-center align-items-center vh-100">
//             <small class="small-text mt-5">About</small>
//             <h2 class="title-h2 text-gradient">Evangadi Networks Q&A</h2>
//             <p class="font-p mg-bt-30">
//               No matter what stage of life you are in, whether you’re just
//               starting elementary school or being promoted to CEO of a Fortune
//               500 company, you have much to offer to those who are trying to
//               follow in your footsteps.
//             </p>
//             <p class="font-p mg-bt-30">
//               Wheather you are willing to share your knowledge or you are just
//               looking to meet mentors of your own, please start by joining the
//               network here.
//             </p>
//             <a
//               href="#"
//               class="btn btn-blue lnk-toggler"
//               data-panel=".panel-signup">
//               HOW IT WORKS
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "../../axios/axiosConfig";
import "./account.css";

function Register() {
  const navigate = useNavigate();
  const userNameRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = userNameRef.current.value.trim();
    const firstname = firstNameRef.current.value.trim();
    const lastname = lastNameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!username || !firstname || !lastname || !email || !password) {
      alert("Please provide all required information");
      return;
    }

    try {
      // http://localhost:5000/api/users/register
      await axios.post("/users/register", {
        username,
        firstname,
        lastname,
        email,
        password,
      });
      alert("Registered successfully. Please login.");
      navigate("/login");
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="container ">
      <div className="row justify-content-center align-items-center vh-50">
        <div className="col-md-6">
          <div className="authfy-panel panel-login text-center p-4 shadow">
            <div className="authfy-heading mb-4">
              <h3 className="auth-title">Join the Network</h3>
              <p>
                Already have an account?
                <Link to="/login" className="lnk-toggler small-text">
                  Sign in
                </Link>
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  ref={userNameRef}
                  type="text"
                  className="form-control mb-3"
                  placeholder="Username"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  ref={firstNameRef}
                  type="text"
                  className="form-control mb-3"
                  placeholder="First Name"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  ref={lastNameRef}
                  type="text"
                  className="form-control mb-3"
                  placeholder="Last Name"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  ref={emailRef}
                  type="email"
                  className="form-control mb-3"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  ref={passwordRef}
                  type="password"
                  className="form-control mb-3"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="form-group form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="termsCheck"
                  required
                />
                <label className="form-check-label " htmlFor="termsCheck">
                  I agree to the
                  <Link
                    to="/legal/privacy/"
                    target="_blank"
                    className="small-text">
                    privacy policy
                  </Link>
                  and
                  <Link
                    to="/legal/terms/"
                    target="_blank"
                    className="small-text">
                    terms of service
                  </Link>
                </label>
              </div>

              <Button type="submit" className="btn btn-primary btn-block">
                Agree and Join
              </Button>
            </form>

            <div className="mt-3">
              <Link className="lnk-toggler small-text" to="/login">
                Already have an account? Sign in
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-12 col-sm-6 authfy-panel panel-signup">
          <div className="padd-text fadeInLeft justify-content-center align-items-center vh-100">
            <small className="small-text mt-5">About</small>
            <h2 className="title-h2 text-gradient">Evangadi Networks Q&A</h2>

            <p className="font-p mg-bt-30">
              Evangadi Networks Q&A is a platform where users can ask and answer questions, share knowledge, and engage in discussions on various topics.
            </p>

            <p className="font-p mg-bt-30">
            It provides a space for users to connect, collaborate, and learn from each other, fostering a community of learners and experts alike.
            </p>

            <a
              href="#"
              className="btn btn-blue lnk-toggler"
              data-panel=".panel-signup">
              HOW IT WORKS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
