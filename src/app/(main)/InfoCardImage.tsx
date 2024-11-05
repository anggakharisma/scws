import { useState } from "react"

const InfoCardImage = ({
  children,
  image,
  description,
  span = 1,
  classCustom
}: {
  children: React.ReactNode,
  description: React.ReactNode,
  image: string,
  span?: number,
  classCustom: string
}) => {
  return (
    <div
      className={`${classCustom} col-span-1 lg:col-span-${span} bg-cover bg-center bg-no-repeat relative`}
      style={{
        backgroundImage: `url(${image})`,
        width: "100%",
        height: "100%"
      }}
    >
      {children}
      <div className="opacity-0 absolute z-20 top-0 left-0 bottom-0 right-0 px-8 py-4 bg-white hover:opacity-100 transition-all">
        {description}
      </div>
    </div>
  )
}

export default InfoCardImage
