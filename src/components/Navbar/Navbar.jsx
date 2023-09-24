import { Img, useColorModeValue } from "@chakra-ui/react";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Navigation } from "./Navigation";
// import Logo from "./Logo";
import ColorModeToggle from "./ColorModeToggle";

export function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const bgNav = useColorModeValue("bg-gray-50", "bg-gray-800");
  const bgNavBar = useColorModeValue("bg-gray-100", "bg-gray-800");
  const textColor = useColorModeValue("text-black", "text-white");
  const ringColor = useColorModeValue("ring-black", "ring-white");

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden "
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className={`relative flex w-full max-w-xs flex-1 flex-col ${bgNav} `}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className={
                        "ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:" +
                        ringColor
                      }
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className={"h-6 w-6 " + textColor}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-0 flex-1 overflow-y-auto pb-4">
                  <nav className="space-y-1 px-2">
                    <Navigation />
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className={`flex min-h-0 flex-1 flex-col ${bgNav}`}>
          <div className="flex flex-1 flex-col overflow-y-auto pb-4">
            <nav className="flex-1 space-y-1 px-2">
              <Navigation />
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col md:pl-64 lg:invisible">
        <div
          className={`fixed top-0 z-10 ${bgNavBar} pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden flex backdrop-filter backdrop-blur-sm bg-opacity-20 right-0 left-0 `}
        >
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          {/* <Logo height={50} className="ml-auto" marginRight={'36vw'} padding={1} /> */}

          <Img
            src="https://www.ccstiet.com/static/home/images/ccs_logo.png"
            className="logoImage" alt="CCS_LOGO"
          ></Img>

          <ColorModeToggle />
        </div>
        <div className="mt-10"></div>

        {/* <main className="flex-1">
            <div className="py-6">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
              </div>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <div className="py-4">
                  <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
                </div>
              </div>
            </div>
          </main> */}
      </div>
    </>
  );
}
