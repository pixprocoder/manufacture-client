import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  if (gUser || user) {
    navigate(from, { replace: true });
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  if (loading || gLoading) {
    return <Loading />;
  }
  return (
    <section className=" flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-extrabold text-center">PLEASE LOGIN</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <span className="label">Email</span>
            </label>
            <input
              className="input input-bordered w-full "
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />

            <label>
              {errors.email?.type === "required" && (
                <span className="label">{errors.email.massage}</span>
              )}
            </label>

            <label>
              <span className="label">Password</span>
            </label>
            <input
              className="input input-bordered w-full "
              name="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && "password  is required"}
            {/* <p>{errorMassage}</p> */}
            <input
              className="btn btn-secondary w-full mt-10"
              type="submit"
              value="LOGIN"
            />
          </form>
          <p>
            New to here?{" "}
            <Link className="text-primary" to="/signup">
              SIGNUP NOW
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-secondary"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
