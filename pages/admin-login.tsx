import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "../components/auth/useAuth";

interface Inputs {
  email: string;
  password: string;
}

function adminLogin() {
  const { adminSignIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    await adminSignIn(email, password);
  };

  return (
    <div className="relative flex text-white h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Admin Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src="https://res.cloudinary.com/dcqjb4hp2/image/upload/v1671025966/bgimage_e3nums.jpg"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Admin Login</h1>
        <div className="text-[gray] text-sm">
          Want to login as a student?{" "}
          <Link href="/login">
            <button className="text-white hover:underline">Click here</button>
          </Link>
        </div>

        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className={`input ${errors.email && "border-b-2 border-red-500"}`}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light text-red-500">
                Please enter a valid email.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className={`input ${
                errors.password && "border-b-2 border-red-500"
              }`}
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light text-red-500">
                Please enter a valid password of at least six characters.
              </p>
            )}
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded bg-[#E50914] py-3 font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default adminLogin;
