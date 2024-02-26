
// main
// UsersSPinner
const UsersSpinner = () => {
  return (
    <div className="flex-grow flex justify-center mt-7 relative">
        <div className="relative flex items-center justify-center h-max top-9">
            <div className="absolute w-[75px] h-[75px] rounded-full border-2 border-emerald-700 border-r-transparent animate-spin flex items-center justify-center">
            </div>
            <div className="absolute w-[50px] h-[50px] rounded-full border-2 border-emerald-700 border-l-transparent animate-anti-spin flex items-center justify-center"></div>
            <div className="absolute w-[25px] h-[25px] rounded-full border-2 border-emerald-700 border-r-transparent animate-spin flex items-center justify-center"></div>
        </div>
    </div>
  )
}

export default UsersSpinner