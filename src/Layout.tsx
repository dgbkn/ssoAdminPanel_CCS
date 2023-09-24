import React, { ReactElement } from 'react'

interface NavButtonProps {
    element: ReactElement
    label: string
  }


export default function Layout(props) {
  return (
    <div className="flex flex-1 flex-col md:pl-64">
    <main className="flex-1">
        <div className="">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {"label" in props && <h1 className="text-4xl font-semibold  pb-10">{props.label} {":}"} </h1>}
          </div>
          <div className="mx-auto max-w-7xl">
            {/* Replace with your content */}
            {/* <div className="py-4">
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
            </div> */}
            {/* /End replace */}
            {props.element}
          </div>
        </div>
      </main>
    </div>
  );
}
