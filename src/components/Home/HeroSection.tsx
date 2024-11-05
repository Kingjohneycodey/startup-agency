import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

const navigation = [
  { name: "Service", href: "#" },
  { name: "About us", href: "#" },
  { name: "Benefits", href: "#" },
  { name: "  FAQ ?", href: "#" },

];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-[#F7F6F2] min-h-screen">
      <header className="fixed left-0 inset-x-0 top-0 z-50 bg-white">
        <nav
          className="flex items-center justify-between p-6 lg:px-16"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <Image
                className="h-8 w-auto"
                src="/images/Logo.svg"
                alt=""
                width={50}
                height={50}
              />

              <h1 className="text-black text-2xl">Tech Agency</h1>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">

            <Link href="">      
             <button className="px-6 py-2 bg-[#1F253F] text-white rounded-lg hover:bg[#1F333F] transition flex items-center gap-2">
            Book a Strategy Call <FiArrowUpRight />
          </button></Link>
          </div>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Nottey</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Left Side Text Content */}
      <div className="md:w-1/2 space-y-4 text-left">
        <h1 className="text-4xl md:text-5xl font-[500] text-gray-800 max-w-md">
          Providing Support for Startups
        </h1>
        <p className="text-lg text-gray-600 max-w-lg pt-1 pb-8">
          Empowering visionary entrepreneurs with the capital and support needed
          to transform innovative ideas into successful businesses.
        </p>
        <div className="space-x-4 flex items-center gap-2">
          <button className="px-6 py-3 bg-[#1F253F] text-white font-semibold rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
            Get Started   <FiArrowUpRight />
          </button>
          <button className="px-6 py-3 bg-[#EAE68B] text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition flex items-center gap-2">
            Learn More   <FiArrowUpRight />
          </button>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <Image
          src={"/images/hero.svg"}
          alt="Hero"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
