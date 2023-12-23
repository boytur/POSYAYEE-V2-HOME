import { useEffect, useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import {
  IoPricetagOutline,
  IoHomeOutline,
  IoDocumentsOutline,
} from "react-icons/io5";
import { FcPhone } from "react-icons/fc";
import { MdOutlineRateReview } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [navShow, setNavShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  // Toggle navigation menu visibility
  const toggleNav = () => {
    setNavShow(!navShow);
  };

  // Add scroll event listener to update scroll state
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Get the vertical scroll position
      const scrollY = window.scrollY;
      // Update the scroll state based on scroll position
      setScroll(scrollY > 0);
    };
    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts to prevent memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine active button based on the current route
  const getActiveButton = (route) => {
    return location.pathname === route ? "text-[#4C49ED]" : "";
  };

  const navigate = useNavigate();
  const signup = () =>{
    navigate('/register');
  }

  return (
    <div className="w-full h-14 flex justify-center z-50 relative">
      <div
        className={`w-full justify-center flex bg-white h-16 fixed  ${
          scroll ? "shadow-lg" : " "
        }`}
      >
        <nav className="h-14 w-full max-w-screen-xl lg:flex lg:flex-row items-center flex flex-col pt-2">
          <div className="w-full lg:w-[20rem]">
            <div className="flex justify-start w-full items-center pl-4">
              <span>
                <RiMenuLine
                  size={35}
                  color="#4C49ED"
                  className="cursor-pointer pt-1 lg:hidden"
                  onClick={() => toggleNav()}
                />
              </span>
              <Link to="/" className=" cursor-pointer">
                <span className="text-[2.2rem] font-bold text-[#4C49ED]">
                  POS
                </span>
                <span className="text-[2.2rem] font-bold">YAYEE</span>
              </Link>
            </div>
          </div>
          <div
            className={`lg:flex  w-full justify-start bg-white lg:justify-end  ${
              navShow ? "flex" : "hidden"
            }`}
          >
            <ul className="lg:flex lg:flex-row justify-between gap-1 flex flex-col  w-full lg:pt-1">
              <Link to="/" className={`cursor-pointer ${getActiveButton("/")}`}>
                <div className="flex items-center gap-2 lg:text-[.8rem] pl-6 lg:pl-0 h-14">
                  <IoHomeOutline />
                  <p>หน้าหลัก</p>
                </div>
              </Link>
              <Link
                to="/pricing"
                className={`cursor-pointer ${getActiveButton("/pricing")}`}
              >
                <div className="flex items-center gap-2 lg:text-[.8rem] pl-6 lg:pl-0  h-14">
                  <IoPricetagOutline className="" />
                  <p>ราคา</p>
                </div>
              </Link>
              <Link
                to="/docs"
                className={`cursor-pointer ${getActiveButton("/docs")}`}
              >
                <div className="flex items-center gap-2 lg:text-[.8rem] pl-6 md:pl-6 lg:pl-0 h-14">
                  <IoDocumentsOutline />
                  <p>คู่มือการใช้งาน</p>
                </div>
              </Link>
              <Link
                to="/news"
                className={`cursor-pointer ${getActiveButton("/news")}`}
              >
                <div className="flex items-center gap-2 lg:text-[.8rem] pl-6 md:pl-6 lg:pl-0 h-14">
                  <MdOutlineRateReview className="pt-[2px]" />
                  <p>ข่าวสาร</p>
                </div>
              </Link>
              <div className="cursor-pointer flex items-center gap-4 py-3 pb-8 px-5 lg:py-0">
                <a
                  href="https://www.facebook.com/profile.php?id=61552548386040"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-[25px] hover:scale-110"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
                    alt=""
                  />
                </a>
                <div>
                  <a href="mailto:piyawat.posyayee@gmail.com">
                    <img
                      className="w-[25px] hover:scale-110"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                      alt=""
                    />
                  </a>
                </div>
                <div>
                  <a href="tel:+66955102451">
                    <FcPhone size={27} className="w-[25px] hover:scale-110" />
                  </a>
                </div>
              </div>
              <li className="lg:flex">
                <li className="pb-5 lg:pb-0">
                  <div className="flex items-center gap-4 lg:text-[.8rem] px-2 h-9 lg:h-14">
                    <button onClick={()=> signup()} className="lg:w-[125px] w-full h-[50px] lg:h-[46px] rounded-[6px] bg-[#DBDBDB] text-black hover:bg-[#b6b6b6]">
                      <p>สมัครเป็นร้านค้า</p>
                    </button>
                  </div>
                </li>
                <li className="pb-[29rem] lg:pb-0">
                  <div className="flex items-center gap-4 lg:text-[.8rem] px-2 h-9 lg:h-14">
                    <a
                      className="lg:w-[125px] w-full h-[50px] lg:h-[46px] rounded-[6px] bg-[#4C49ED] text-white hover:bg-[#4c49edc0]"
                      href="https://sale.posyayee.shop"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="lg:w-[125px] w-full h-[50px] lg:h-[46px] rounded-[6px] bg-[#4C49ED] text-white hover:bg-[#4c49edc0]">
                        <p>เข้าสู่ระบบ (เดิม)</p>
                      </button>
                    </a>
                  </div>
                </li>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
