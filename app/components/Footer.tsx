import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">FilterPixel</h3>
            <p className="text-sm text-gray-400">Transforming event experiences with AI-powered photo sharing.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm text-gray-400 mb-2">Email: sourav@filterpixel.com</p>
            <p className="text-sm text-gray-400">Phone: +91 (700) 169-4536</p>
            <p className="text-sm text-gray-400">Alternate: +91 (790) 607-3919</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/filterpixel/"
                className="text-gray-400 hover:text-white"
                target="_blank"
              >
                <Facebook />
              </Link>
              <Link
                href="https://x.com/FilterPixelHQ/"
                className="text-gray-400 hover:text-white"
                target="_blank"
                
              >
                <Twitter />
              </Link>
              <Link
                href="https://www.instagram.com/filterpixel/?hl=en"
                className="text-gray-400 hover:text-white"
                target="_blank"

              >
                <Instagram />
              </Link>
              <Link
                href="https://in.linkedin.com/company/filterpixel"
                className="text-gray-400 hover:text-white"
                target="_blank"

              >
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} FilterPixel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
