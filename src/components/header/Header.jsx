
 function Header({logo, navLink, nav_btns}) {
  return (
    <header className="flex items-center justify-between container h-[100px]">
      <img src={logo} alt="logo" />

      <nav>
        <ul className="flex items-center gap-[40px]">
            {navLink.map((item,index)=> (
                <li key={index} >
                    <a href={item.link} className="text-[#4F5665] text-[16px] font-[400] ">{item.title}</a>
                </li>
            ))}
        </ul>
      </nav>

      <div className="flex items-center gap-[30px]">
        {nav_btns.map((item, index)=> (
            <button key={index} className="text-[#F53855] text-[16px] font-[500] px-[45px] py-[13px] rounded-[60px] border-2 border-[#F53855] " >{item}</button>
        ))}
      </div>
    </header>
  )
}

export default Header