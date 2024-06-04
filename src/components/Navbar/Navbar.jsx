import { useEffect, useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import {
  IoPricetagOutline,
  IoHomeOutline,
  IoDocumentsOutline,
} from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineRateReview } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineStorefront } from "react-icons/md";
import userDecode from "../../libs/userDecode";
import { getUuid } from "../../libs/localStrage";
import { MdManageAccounts } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
function Navbar() {
  const [navShow, setNavShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  // Toggle navigation menu visibility
  const toggleNav = () => {
    setNavShow(!navShow);
  };

  const [profileDestop, setProfileDestop] = useState(false);
  const [profileMobile, setProfileMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScroll(scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine active button based on the current route
  const getActiveButton = (route) => {
    return location.pathname === route ? "text-[#4C49ED]" : "";
  };

  const navigate = useNavigate();
  const signup = () => {
    navigate('/register');
  }


  return (
    <div className="w-full h-14 flex justify-center z-50 relative">
      <div
        className={`w-full justify-center flex bg-white h-16 fixed  ${scroll ? "shadow-lg" : " "
          }`}
      >
        <nav className="h-14 w-full max-w-screen-xl lg:flex lg:flex-row items-center flex flex-col pt-2">
          <div className="w-full lg:w-[20rem]">
            <div className="flex justify-between w-full items-center pl-4">
              {getUuid() ?
                <div className="relative lg:hidden block">
                  <div>
                    <div className="lg:pb-0 px-2 flex items-center h-full relative">
                      <div
                        onClick={() => {
                          setNavShow(false);
                          setProfileMobile(profilePrev => !profilePrev);
                        }}

                        className="flex items-center relative border-[2px] rounded-full border-[#4C49ED]">
                        <img className='rounded-full hover:brightness-90 w-[2.8rem] h-[2.8rem] object-cover' src={userDecode()?.user?.user_image || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"} alt="" />
                        <div className="absolute mt-2 right-[-3px]">
                          <RiArrowDropDownLine className=" rounded-full bg-gray-100 border-[2px] border-[#4C49ED]" size={15} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {
                    profileMobile ?
                      <div className="absolute w-[21rem]">
                        <div className="w-full bg-white border mt-3 px-3 pb-2 rounded-md shadow-2xl h-full">
                          <p className=" text-center text-sm my-2 font-bold text-[#33363F]">โปรไฟล์ของฉัน</p>
                          <hr />
                          <div className="w-full h-[3rem] flex items-center gap-2 text-[#4C49ED] mt-2 mb-2">
                            <MdOutlineStorefront className=" border rounded-full m-2 p-1 border-[#4C49ED]" size={40} />
                            <p className="font-bold text-xl" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '230px' }}>
                              {(userDecode())?.user?.store?.store_name}
                            </p>
                          </div>
                          <hr />
                          <div className=" w-full rounded-lg h-[10rem] flex justify-between items-center bg-[#aba8ff4c] mt-1 mb-1">
                            <div className=" w-full h-[3rem] flex flex-col items-center justify-center gap-2 pl-2">
                              <div className="w-full flex items-center gap-2">
                                <div className=" w-fit px-2 py-[2px] border rounded-md bg-[#5e5bff]">
                                  <p className="text-[1rem] text-white">{userDecode()?.user?.package.package_name}</p>
                                </div>
                                <div>
                                  <p className="text-[1rem] text-[#4C49ED]">คงเหลือ: <span className=" font-bold">{userDecode()?.user?.store.store_remaining}</span>  วัน</p>
                                </div>
                              </div>
                              <div className="border-[#4C49ED] border-[2px] rounded-full">
                                <img className='rounded-full w-[3rem] h-[3rem] object-cover' src={userDecode()?.user?.user_image || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"} alt="" />
                              </div>
                              <div>
                                <p className="text-xl pl-2">
                                  {
                                    ((userDecode()).user?.user_fname && (userDecode())?.user?.user_lname) ?
                                      ((userDecode()).user?.user_fname + " " + (userDecode())?.user?.user_lname) :
                                      ((userDecode()).user?.user_phone)
                                  }
                                  &nbsp;
                                  (
                                  {
                                    (userDecode())?.user.user_role === "owner" ? "เจ้าของ" :
                                      (userDecode())?.user.user_role === "manager" ? "ผู้จัดการ" :
                                        "พนักงาน"
                                  })
                                </p>
                              </div>
                            </div>
                          </div>

                          <button className="w-full flex items-center px-3 gap-2 h-12 mt-2 rounded-md text-black/70 hover:text-[#4C49ED] hover:bg-[#aba8ff4c]">
                            <MdManageAccounts size={30} />
                            <p className="mt-1 text-md">ตั้งค่าบัญชี</p>
                          </button>
                          {
                            (userDecode())?.user?.user_role === "owner" ? <button className="w-full flex items-center px-3 gap-2 h-12 mt-2 rounded-md text-black/70 hover:text-[#4C49ED] hover:bg-[#aba8ff4c]">
                              <MdPayment size={28} />
                              <p className="text-md">ค่าใช้จ่าย</p>
                            </button> : ""
                          }
                          {
                            (userDecode())?.user?.user_role === "owner" ? <button className="w-full flex items-center px-3 gap-2 h-12 mt-2 rounded-md text-black/70 hover:text-[#4C49ED] hover:bg-[#aba8ff4c]">
                              <IoSettingsSharp size={25} />
                              <p className="mt-1 text-md">ตั้งค่าร้านค้า</p>
                            </button> : ""
                          }
                          <button className="w-full border flex justify-center gap-2 items-center border-[#4C49ED] h-12 mt-5 rounded-md text-black/70 hover:bg-[#4C49ED] hover:text-white">
                            <TbLogout2 size={18} className="mt-[2px]" />
                            <p className="text-md">ออกจากระบบ</p>
                          </button>
                        </div>
                      </div> : ""
                  }
                </div>
                : <Link to="/" className=" cursor-pointer lg:hidden">
                  <span className="text-[2.2rem] font-bold text-[#4C49ED]">
                    POS
                  </span>
                  <span className="text-[2.2rem] font-bold">YAYEE</span>
                </Link>}
                
              {/* Logo for desktop */}
              <Link to="/" className=" cursor-pointer lg:flex hidden">
                <span className="text-[2.2rem] font-bold text-[#4C49ED]">
                  POS
                </span>
                <span className="text-[2.2rem] font-bold">YAYEE</span>
              </Link>

              {
                !navShow ?
                  <span>
                    <RiMenuLine
                      size={40}
                      color="#4C49ED"
                      className="cursor-pointer lg:hidden mr-3"
                      onClick={() => {
                        toggleNav();
                        setProfileMobile(false);
                      }}
                    />
                  </span>
                  :
                  <span>
                    <IoMdClose
                      size={40}
                      color="#4C49ED"
                      className="cursor-pointer lg:hidden mr-3"
                      onClick={() => toggleNav()}
                    />
                  </span>
              }
            </div>
          </div>
          <div
            className={`lg:flex w-full justify-start z-40 bg-white lg:justify-end  ${navShow ? "flex" : "hidden"
              }`}
          >
            <ul className="lg:flex lg:flex-row justify-between gap-1 flex flex-col  w-full lg:pt-1">
              <Link

                to="/" className={`cursor-pointer ${getActiveButton("/")} flex justify-center`}>
                <div className="flex items-center gap-2 lg:text-[.8rem] lg:pl-6 h-14 ">
                  <IoHomeOutline />
                  <p>หน้าหลัก</p>
                </div>
              </Link>
              <Link
                to="/pricing"
                className={`cursor-pointer ${getActiveButton("/pricing")} flex justify-center`}
              >
                <div className="flex items-center gap-2 lg:text-[.8rem] lg:pl-0  h-14">
                  <IoPricetagOutline className="" />
                  <p>ราคา</p>
                </div>
              </Link>
              <Link
                to="/docs"
                className={`cursor-pointer ${getActiveButton("/docs")} flex justify-center`}
              >
                <div className="flex items-center gap-2 lg:text-[.8rem] lg:pl-0 h-14">
                  <IoDocumentsOutline />
                  <p>คู่มือการใช้งาน</p>
                </div>
              </Link>
              <Link
                to="/news"
                className={`cursor-pointer ${getActiveButton("/news")} flex justify-center`}
              >
                <div className="flex items-center gap-2 lg:text-[.8rem] lg:pl-0 h-14">
                  <MdOutlineRateReview className="pt-[2px]" />
                  <p>ข่าวสาร</p>
                </div>
              </Link>
              <div className="cursor-pointer flex items-center justify-center gap-4 py-3 pb-8 px-5 lg:py-0">
                <a
                  href="https://www.facebook.com/profile.php?id=61552548386040"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook size={30} className="hover:scale-110" />
                </a>
                <div>
                  <a href="mailto:piyawat.posyayee@gmail.com">
                    <MdMail size={32} className="hover:scale-110" />
                  </a>
                </div>
                <div>
                  <a href="tel:+66955102451">
                    <FaPhoneFlip size={25} className="hover:scale-110" />
                  </a>
                </div>
              </div>
              {!getUuid() ? <div className="lg:flex">
                <div className="pb-5 lg:pb-0">
                  <div className="flex items-center gap-4 lg:text-[.8rem] px-2 h-9 lg:h-14">
                    <button onClick={() => signup()} className="lg:w-[125px] w-full h-[50px] lg:h-[46px] rounded-[6px] bg-[#DBDBDB] text-black hover:bg-[#b6b6b6]">
                      <p>สมัครเป็นร้านค้า</p>
                    </button>
                  </div>
                </div>
                <div className="pb-5 lg:pb-0">
                  <div className="flex items-center gap-4 lg:text-[.8rem] px-2 h-9 lg:h-14">
                    <a
                      className="lg:w-[125px] w-full h-[50px] lg:h-[46px] rounded-[6px] bg-[#4C49ED] text-white hover:bg-[#4c49edc0]"
                      href="https://sale.posyayee.shop"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="lg:w-[125px] w-full h-[50px] lg:h-[46px] rounded-[6px] bg-[#4C49ED] text-white hover:bg-[#4c49edc0]">
                        <p>เข้าสู่ระบบร้านค้า</p>
                      </button>
                    </a>
                  </div>
                </div>
              </div> :

                // for desktop
                <div className="lg:flex items-center h-full">
                  <div className="lg:flex pb-5 lg:pb-0 lg:flex-row flex-col w-full justify-center hidden">
                    <button className=" w-[6rem] text-[0.8rem] rounded-md underline">
                      <a                       
                      href="https://sale.posyayee.shop"
                      target="_blank"
                      rel="noopener noreferrer">เข้าสู่ระบบร้านค้า</a>
                    </button>
                    <div className="lg:w-[100px] w-full justify-center items-center flex h-[50px] lg:h-[46px] text-black/80 underline cursor-pointer">
                      <div className='relative w-[2.5rem] h-[2.5rem] border-[#4C49ED] border-[2px] rounded-full'>
                        <div
                          onClick={() => setProfileDestop(profilePrev => !profilePrev)}
                          className="flex items-center">
                          <img className='rounded-full hover:brightness-90 w-[2.3rem] h-[2.3rem] object-cover' src={userDecode()?.user?.user_image || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"} alt="" />
                          <div className="absolute mt-7 right-[-5px]"><RiArrowDropDownLine className=" rounded-full bg-gray-100 border-[2px] border-[#4C49ED]" size={15} /></div>
                        </div>

                        {/* drop profile */}
                        {profileDestop ?
                          <div className="w-[20rem] bg-white p-2 rounded-lg shadow-xl mt-3 absolute right-1 top-10 border">
                            <p className=" text-center text-sm my-2 font-bold text-[#33363F]">โปรไฟล์ของฉัน</p>
                            <hr />
                            <div className=" w-full h-[3rem] flex items-center gap-2 text-[#4C49ED] mt-2 mb-2">
                              <MdOutlineStorefront className=" border rounded-full m-2 p-1 border-[#4C49ED]" size={40} />
                              <p className="font-bold text-xl" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '230px' }}>
                                {(userDecode())?.user?.store?.store_name}
                              </p>
                            </div>
                            <hr />
                            <div className=" w-full rounded-lg h-[10rem] flex justify-between items-center bg-[#aba8ff4c] mt-1 mb-1">
                              <div className=" w-full h-[3rem] flex flex-col items-center justify-center gap-2 pl-2">
                                <div className="w-full flex items-center gap-2">
                                  <div className=" w-fit px-2 py-[2px] border rounded-md bg-[#5e5bff]">
                                    <p className="text-[1rem] text-white">{userDecode()?.user?.package.package_name}</p>
                                  </div>
                                  <div>
                                    <p className="text-[1rem] text-[#4C49ED]">คงเหลือ: <span className=" font-bold">{userDecode()?.user?.store.store_remaining}</span>  วัน</p>
                                  </div>
                                </div>
                                <div className="border-[#4C49ED] border-[2px] rounded-full">
                                  <img className='rounded-full w-[3rem] h-[3rem] object-cover' src={userDecode()?.user?.user_image || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"} alt="" />
                                </div>
                                <div>
                                  <p className="text-xl pl-2">
                                    {
                                      ((userDecode()).user?.user_fname && (userDecode())?.user?.user_lname) ?
                                        ((userDecode()).user?.user_fname + " " + (userDecode())?.user?.user_lname) :
                                        ((userDecode()).user?.user_phone)
                                    }
                                    &nbsp;
                                    (
                                    {
                                      (userDecode())?.user.user_role === "owner" ? "เจ้าของ" :
                                        (userDecode())?.user.user_role === "manager" ? "ผู้จัดการ" :
                                          "พนักงาน"
                                    })
                                  </p>
                                </div>
                              </div>
                            </div>

                            <button className="w-full flex items-center px-3 gap-2 h-12 mt-2 rounded-md text-black/70 hover:text-[#4C49ED] hover:bg-[#aba8ff4c]">
                              <MdManageAccounts size={30} />
                              <p className="mt-1 text-md">ตั้งค่าบัญชี</p>
                            </button>
                            {
                              (userDecode())?.user?.user_role === "owner" ? <button className="w-full flex items-center px-3 gap-2 h-12 mt-2 rounded-md text-black/70 hover:text-[#4C49ED] hover:bg-[#aba8ff4c]">
                                <MdPayment size={28} />
                                <p className="text-md">ค่าใช้จ่าย</p>
                              </button> : ""
                            }
                            {
                              (userDecode())?.user?.user_role === "owner" ? <button className="w-full flex items-center px-3 gap-2 h-12 mt-2 rounded-md text-black/70 hover:text-[#4C49ED] hover:bg-[#aba8ff4c]">
                                <IoSettingsSharp size={25} />
                                <p className="mt-1 text-md">ตั้งค่าร้านค้า</p>
                              </button> : ""
                            }
                            <button className="w-full border flex justify-center gap-2 items-center border-[#4C49ED] h-12 mt-5 rounded-md text-black/70 hover:bg-[#4C49ED] hover:text-white">
                              <TbLogout2 size={18} className="mt-[2px]" />
                              <p className="text-md">ออกจากระบบ</p>
                            </button>
                          </div>
                          : ""}

                      </div>
                    </div>
                  </div>
                </div>
              }
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
