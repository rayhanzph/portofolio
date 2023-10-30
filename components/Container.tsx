import React, { ReactNode } from 'react'
interface ContainerProps {
  children: ReactNode
}
const Container = ({ children }: ContainerProps) => {
  return (
    <div className=" w-screen h-screen overflow-hidden bg-[url(/background.webp)] bg-cover flex justify-center items-center p-6">
      <div className="w-full max-h-full md:max-w-3xl md:max-h-[640px] window flex flex-col">
        <div className="title-bar">
          <div className="title-bar-text text-base">My Portofolio</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body m-0 overflow-auto p-4 flex-grow">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Container
