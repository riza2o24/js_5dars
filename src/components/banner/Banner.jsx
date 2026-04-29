
function Banner({user, bannerText}) {
  return (
    <div className="flex items-center justify-center gap-[200px] container">
        {/* 1 */}
      <div className="flex items-center gap-[35px]">
        <img src={user} alt="user" />

        <div>
            {bannerText.map((item , index) => (
                <h3 key={index} className="text-[#0B132A]  text-[25px] font-[700]">{item.suma}</h3>
            ))}

            {bannerText.map((item , index) => (
                <p key={index}  className="text-[#4F5665]  text-[20px] font-[400]">{item.texts}</p>
            ))}
            
        </div>
      </div>

      <div className="w-[2px] h-[125px] bg-[#EEEFF2]" >

      </div>

        {/* 2 */}
      <div className="flex items-center gap-[35px]">
        <img src={user} alt="user" />

        <div>
            {bannerText.map((item , index) => (
                <h3 key={index} className="text-[#0B132A]  text-[25px] font-[700]">{item.suma}</h3>
            ))}

            {bannerText.map((item , index) => (
                <p key={index}  className="text-[#4F5665]  text-[20px] font-[400]">{item.texts}</p>
            ))}
            
        </div>
      </div>

        <div className="w-[2px] h-[125px] bg-[#EEEFF2]" ></div>

        {/* 3 */}
      <div className="flex items-center gap-[35px]">
        <img src={user} alt="user" />

        <div>
            {bannerText.map((item , index) => (
                <h3 key={index} className="text-[#0B132A]  text-[25px] font-[700]">{item.suma}</h3>
            ))}

            {bannerText.map((item , index) => (
                <p key={index}  className="text-[#4F5665]  text-[20px] font-[400]">{item.texts}</p>
            ))}
            
        </div>
      </div>
    </div>
  )
}

export default Banner