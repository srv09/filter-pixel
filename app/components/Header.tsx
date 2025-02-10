import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#323232] shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <Link
          href="https://www.filterpixel.com"
          className="flex items-center space-x-2"
        >
          <Image
            src="/logo.png"
            alt="FilterPixel Logo"
            width={180}
            height={40}
          />
          {/* <span className="text-xl font-bold text-primary">FilterPixel</span> */}
        </Link>
      </div>
    </header>
  );
}
