const InfoCardImage = ({
  children,
  image,
  classCustom
}: {
  children: React.ReactNode,
  image: string,
  classCustom: string
}) => {
  return (
    <div
      className={`${classCustom} bg-cover bg-center bg-no-repeat hover:border-2 hover:border-primary`}
      style={{
        backgroundImage: `url(${image})`,
        width: "100%",
        height: "100%"
      }}
    >
      {children}
    </div>
  )
}

export default InfoCardImage
