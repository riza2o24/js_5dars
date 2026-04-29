 
function Hero({text, btn, paragrf, heroLogo}) {
  return (
    <div>
      <div className="flex items-center justify-between container h-[600px]">
        <div>
          <h1 className="text-[#0B132A] text-[50px] font-[700]  w-[500px]">{text}</h1>

          <p className="text-[#4F5665] text-[16px] font-[500]  w-[400px] mt-[24px] mb-[50px]">{paragrf}</p>

          <button className="py-[17px] px-[77px] text-[#fff] bg-[#F53838] rounded-[10px] text-[16px] font-[700]">{btn}</button>
        </div>

        <img src={heroLogo} alt="logo" />
      </div>
    </div>
  )
}

export default Hero