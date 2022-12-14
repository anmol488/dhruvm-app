import Image from "next/legacy/image";
import Link from "next/link";
import Button from "./Button";

function Landing() {
  return (
    <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
      <div className="space-y-8">
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Powered
          </span>
          <span className="block">By Talent</span>
          <span className="block">Driven By Music</span>
        </h1>

        <div className="space-x-8 font-bold">
          <Link href="/login">
            <Button title="Login/Apply" />
          </Link>
        </div>
      </div>

      <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]">
        <Image
          src="https://res.cloudinary.com/dcqjb4hp2/image/upload/v1671017174/bg-image_flvom4.svg"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
}

export default Landing;