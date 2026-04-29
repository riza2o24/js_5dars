
function Carta({Cartaa, text2 , paragrf2, Sponsored}) {
  return (
    <div className="container text-center ">
      <h3 className="text-[#0B132A] text-[35px] font-[500] w-[383px] m-auto">{text2}</h3>

      <p className="text-[#4F5665] text-[16px] font-[500] mt-[20px] mb-[155px] m-auto w-[555px]">{paragrf2}</p>

      <img src={Cartaa} className="mb-[35px] m-auto" alt="carta" />

      <img src={Sponsored} alt="spsdf" className="m-auto" />
    </div>
  )
}

export default Carta