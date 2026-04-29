import logo from "./assets/logo.png"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import heroLogo from "./assets/qwet.png"
import Banner from "./components/banner/Banner"
import user from "./assets/user.png"
import Hero2 from "./components/hero2/Hero2"
import Carta from "./components/carta/Carta"
import yes from "./assets/card.png"
import illus from "./assets/illus.png"
import Cartaa from "./assets/cartaa.png"
import Sponsored from "./assets/Sponsored.png"
import Footer from "./components/footer/Footer"
import { FaShoppingCart } from "react-icons/fa";

const nav_menu =[
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Features",
    link: "/features"
  },
  {
    title: "Pricing",
    link: "/pricing"
  },
  {
    title: "Testimonials",
    link: "/testimonials"
  },
  {
    title: "Help",
    link: "/help"
  }
]



const btns = ["Sign In ", "Sign up"]


// hero
const text="Want anything to be easy with LaslesVPN."

const paragrf="Provide a network for alll your needs with ease and fun using LaslesVPN discover interesting features from us."

const btn="Get Started"


// banner
const bannerText=[
  {
    suma:"90+",
    texts:"Users"
  }

]

// hero2
const hero22="We Provide Many Features You Can Use"
const hero3="You can explore the features that we provide with fun and have their own functions each feature."
const hero4="We Provide Many Features You Can Use"


// carta
const text2="Huge Global Network of Fast VPN"
const paragrf2="See LaslesVPN everywhere to make it easier for you when you move locations."


// footer
const text3="LaslesVPN is a private virtual network that has unique features and has high security."
const paragrf3="©2020LaslesVPN"
const ul="Product"
const li=[

  {textsa:"Download "},
  {textsa:"Pricing"},
  {textsa:"Locations"},
  {textsa:"Server"},
  {textsa:"Countries"},
  {textsa:"Blog"}
]


function App() {

  return (
    <>
      <Header logo={logo} navLink={nav_menu} nav_btns={btns} />
      <Hero text={text} btn={btn} paragrf={paragrf} heroLogo={heroLogo}/>
      <Banner bannerText={bannerText} user={user}/>
      <Hero2 card={yes} hero22={hero22}  hero3={hero3} hero4={hero4} illus={illus}/>
      <Carta Cartaa={Cartaa} Sponsored={Sponsored} text2={text2} paragrf2={paragrf2}/>
      <Footer logo={logo} text3={text3} paragrf3={paragrf3} ul={ul} li={li} />
    </>
  )
}

export default App
