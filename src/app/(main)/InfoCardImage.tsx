interface InfoCardImageProps {
  children: React.ReactNode,
  description: React.ReactNode,
  image: string,
  span?: number,
  classCustom: string
}

export const InfoDetailsText = ({ children }: { children: React.ReactNode }) => (
  <h3 className='text-white font-medium md:text-2xl text-xl z-10 text-center'>{children}</h3>
)

const InfoCardImage = ({
  children,
  image,
  description,
  span = 1,
  classCustom
}: InfoCardImageProps) => {
  return (
    <div
      className={`${classCustom} col-span-1 lg:col-span-${span} bg-cover bg-center bg-no-repeat relative hover:cursor-pointer`}
      style={{
        backgroundImage: `url(${image})`,
        width: "100%",
        height: "100%"
      }}
    >
      {children}
      <div className="opacity-0 absolute z-20 top-0 left-0 bottom-0 right-0 px-8 py-4 bg-black hover:opacity-60 text-white transition-all">
        {description}
      </div>
    </div>
  )
}

export default InfoCardImage
