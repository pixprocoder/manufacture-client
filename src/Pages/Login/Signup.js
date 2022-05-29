import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [updateProfile, updating, uError] = useUpdateProfile(auth);
  const [token] = useToken(user || gUser);

  if (token) {
    navigate("/");
  }

  if (loading || gLoading || updating) {
    return <p>Loading ..</p>;
  }
  let errorMassage;
  if (error || gError || uError) {
    errorMassage = <p>{error?.message || gError?.message || uError}</p>;
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };

  return (
    <section className=" flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-extrabold text-center">
            PLEASE SIGN UP
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <span className="label">Name</span>
            </label>
            <input
              className="input input-bordered w-full "
              type="name"
              name="name"
              placeholder="Name"
              {...register("name", { required: true })}
            />
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
              <span className="label">Password</span>
            </label>
            <input
              className="input input-bordered w-full "
              type="password"
              autoComplete="off"
              name="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errorMassage}
            <input
              className="btn btn-secondary w-full mt-10"
              type="submit"
              value="SIGN UP"
            />
          </form>

          <p>
            Already have an account?{" "}
            <Link className="text-primary" to="/login">
              LOGIN NOW
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

export default Signup;
