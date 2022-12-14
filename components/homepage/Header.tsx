import Image from "next/legacy/image";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

function Header() {
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
      <div className="flex items-center justify-center md:w-1/5">
          <div className="relative h-10 w-12 opacity-75 transition hover:opacity-100">
            <Image
              src="https://res.cloudinary.com/dcqjb4hp2/image/upload/v1670663727/logo-dm-final_gkwnvv.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
      </div>

      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <Link href="https://www.youtube.com/c/DhruvMagodia">
          <YouTubeIcon className="icon" />
        </Link>
        <Link href="https://www.instagram.com/curly_chords/">
          <InstagramIcon className="icon" />
        </Link>
        <Link href="https://www.facebook.com/dhruv.magodia/">
          <FacebookIcon className="icon" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
