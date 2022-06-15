
export const Container = ({ children, className }) => {
  return (
    <div className={`px-4 py-20 mx-auto max-w-[80%] xl:max-w-7xl ${className}`}>
      {children}
    </div>
  )
}
