import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../Shared/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const [token] = useToken(user || gUser);

  if (token) {
    navigate(from, { replace: true });
  }
  if (loading || gLoading) {
    return <Loading />;
  }
  let errorMassage;
  if (error || gError) {
    errorMassage = (
      <p className="text-sm text-red-900">
        {error?.massage || gError?.message}
      </p>
    );
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
  };

  return (
    <section className=" flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-extrabold text-center">PLEASE LOGIN</h2>

          <form onSubmit={onSubmit}>
            <label>
              <span className="label">Email</span>
            </label>
            <input
              className="input input-bordered w-full "
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
            />

            <label>
              <span className="label">Password</span>
            </label>
            <input
              className="input input-bordered w-full "
              type="password"
              autoComplete="off"
              name="password"
              placeholder="Password"
            />
            <p>{errorMassage}</p>
            <input className="btn  w-full mt-10" type="submit" value="LOGIN" />
          </form>
          <p>
            New to here?{" "}
            <Link className="text-primary" to="/signup">
              SIGNUP NOW
            </Link>
          </p>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn">
            Continue with Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
