import { FaFacebook, FaTelegram } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"

function Footer({logo, li, ul, text3, paragrf3, }) {
  return (
    <footer className="flex items-center justify-between container h-[400px] bg-[#F8F8F8]">
        <div>
            <img src={logo} className="w-[149px]" alt="logo" />

            <p className="text-[#4F5665] w-[340px] text-[16px] font-[400] mt-[20px] mb-[30px]">{text3}</p>
 
            <div className="flex items-center gap-[20px]">
                <FaFacebook color="#F53838" className="text-[30px] shadow-xl"/>
                <RiInstagramFill  color="#F53838" className="text-[30px] shadow-xl"/>
                <FaTelegram color="#F53838" className="text-[30px] shadow-xl"/>
            </div>

            <p className="text-[#AFB5C0]  text-[16px] font-[400] mt-[20px]">{paragrf3}</p>

        </div>

        <ul>
            <li className="text-[#0B132A]  text-[18px] mb-[10px] font-500] ">{ul}</li>
            {li.map((item , index) => (
                <li className="text-[#4F5665]  text-[16px] mt-[10px] font-400] " key={index}>{item.textsa}</li>
            ))

            }
        </ul>

        <ul>
            <li className="text-[#0B132A]  text-[18px] mb-[10px] font-500] ">{ul}</li>
            {li.map((item , index) => (
                <li className="text-[#4F5665]  text-[16px] mt-[10px] font-400] " key={index}>{item.textsa}</li>
            ))

            }
        </ul>

        <ul>
            <li className="text-[#0B132A]  text-[18px] mb-[10px] font-500] ">{ul}</li>
            {li.map((item , index) => (
                <li className="text-[#4F5665]  text-[16px] mt-[10px] font-400] " key={index}>{item.textsa}</li>
            ))

            }
        </ul>

    </footer>
  )
}

export default Footer