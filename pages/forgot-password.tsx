import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function forgotPassword() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await sendPasswordResetEmail(email);
    setSuccess(true);
  };

  return (
    <div className="relative flex text-white h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Forgot Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src="https://res.cloudinary.com/dcqjb4hp2/image/upload/v1671025966/bgimage_e3nums.jpg"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />

      <form
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
        onSubmit={onSubmit}
      >
        <h1 className="text-4xl font-semibold">Forgot Password</h1>
        <div className="text-[gray] text-sm">
          Want to go back?{" "}
          <Link href="/login">
            <button className="text-white hover:underline">Click here</button>
          </Link>
        </div>

        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              required
              type="email"
              placeholder="Email"
              className="input"
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded bg-[#E50914] py-3 font-semibold"
        >
          Send Reset Link
        </button>

        {success ? (
          <div className="text-sm text-green-500">
            A reset link has been sent to your email...
          </div>
        ) : (
          " "
        )}
      </form>
    </div>
  );
}

export default forgotPassword;
