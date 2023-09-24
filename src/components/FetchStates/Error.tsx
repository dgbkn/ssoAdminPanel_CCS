import React, { ReactElement } from 'react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'


interface ErrorProps{
  message: string
  label: string
}

  export const Error = (props: ErrorProps) => {
  return (
    <div style={{ padding: "10px" }}>
      <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
          </div>
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <h3 className="text-base font-semibold leading-6 ">
              {props.label}
            </h3>
            <div className="mt-2">
              <p className="text-sm ">
                {props.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
