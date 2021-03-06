import Logo from "../../assets/images/Logo.png";
import Lunar from "../../assets/images/lunar.png";
import { HiMenuAlt3 } from "react-icons/hi";
const Header = () => {
  return (
    <div className="bg-gray text-white">
      <div className="container py-4 flex justify-between">
        <div>
          <img src={Logo} alt="" className=" w-64" />
        </div>
        <ul className="xl:flex items-center hidden ">
          {linkList.map((val, i) => (
            <li key={i}>
              <a href={val.link} className="block p-3 font-medium">
                {val.text}
              </a>
            </li>
          ))}
          <li>
            <button className="flex items-center bg-dark-400 rounded-md  py-2.5 px-4 ml-2 ">
              <img src={Lunar} alt="" className="w-4 mr-2" />
              <span className="font-medium">Buy at Lunar Exchange</span>
            </button>
          </li>
        </ul>
        <button className="xl:hidden text-3xl">
          <HiMenuAlt3 />
        </button>
      </div>
    </div>
  );
};

export default Header;

const linkList = [
  {
    text: "Home",
    link: "#",
  },
  {
    text: "Details",
    link: "#details",
  },
  {
    text: "Exchange",
    link: "#exchange",
  },
  {
    text: "Document",
    link: "#document",
  },
  {
    text: "Tokenomics",
    link: "#tokenomics",
  },

  {
    text: "Roadmap",
    link: "#roadmap",
  },
  {
    text: "FAQ",
    link: "#faq",
  },
  {
    text: "Donations",
    link: "#donations",
  },
];
