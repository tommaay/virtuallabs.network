import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heading, Text } from "@/components/ui/typography";

export function Footer() {
  return (
    <footer className="bg-black mx-auto py-12 md:py-16 w-full">
      <div className="mx-auto px-4 w-full max-w-7xl container">
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-12">
          {/* Logo and Newsletter Section */}
          <div className="flex flex-col gap-8 lg:col-span-7">
            <Link href="/" className="inline-block">
              <Image
                src="/virtual_logo.avif"
                alt="Virtual Labs Logo"
                width={140}
                height={48}
                className="w-auto h-12"
              />
            </Link>
            <div className="flex flex-col gap-4 max-w-xl">
              <Heading variant="h3" size="base">
                Join our newsletter to stay up to date on features and releases.
              </Heading>
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-zinc-900 border-zinc-800 text-white placeholder:text-gray-500"
                />
                <Button>Join!</Button>
              </div>
            </div>
          </div>

          {/* Resources and Social Links */}
          <div className="lg:justify-self-end lg:col-span-5">
            <div className="gap-8 grid grid-cols-2">
              {/* Resources */}
              <div className="flex flex-col gap-4">
                <Heading variant="h3" size="base">
                  Resources
                </Heading>
                <nav className="flex flex-col gap-3">
                  <Link href="/media" className="hover:text-primary transition-colors">
                    Media
                  </Link>
                  <Link href="/terms" className="hover:text-primary transition-colors">
                    Terms
                  </Link>
                  <Link href="/blog" className="hover:text-primary transition-colors">
                    Blog
                  </Link>
                  <Link href="/career" className="hover:text-primary transition-colors">
                    Career
                  </Link>
                  <Link
                    className="hover:text-primary transition-colors"
                    href="https://drive.google.com/drive/folders/10lm5MHawXizU5TjiFgLdRfhGrJTUoumR?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Brand Kit
                  </Link>
                </nav>
              </div>

              {/* Social */}
              <div className="flex flex-col lg:justify-self-end gap-4">
                <Heading variant="h3" size="base">
                  Social
                </Heading>
                <nav className="flex flex-col gap-3">
                  <Link
                    href="https://discord.com/invite/x9PPR2PAEf"
                    className="inline-flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/icons/discord.png"
                      alt="Discord"
                      width={20}
                      height={20}
                      className="w-4 h-4"
                    />
                  </Link>
                  <Link
                    href="https://twitter.com/0xVirtualLabs"
                    className="inline-flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src="/icons/x.avif" alt="X" width={20} height={20} className="w-4 h-4" />
                  </Link>
                  <Link
                    href="https://zealy.io/c/virtuallabs-9746/questboard"
                    className="inline-flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/icons/zealy.avif"
                      alt="Zealy"
                      width={20}
                      height={20}
                      className="w-4 h-4"
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/0xvirtuallabs/"
                    className="inline-flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/icons/linkedin.avif"
                      alt="LinkedIn"
                      width={20}
                      height={20}
                      className="w-4 h-4"
                    />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@0x_VirtualLabs"
                    className="inline-flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/icons/youtube.avif"
                      alt="Youtube"
                      width={20}
                      height={20}
                      className="w-4 h-4"
                    />
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
