/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaArrowRight, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Swal from "sweetalert2";

function Step3() {
  const navigate = useNavigate();
  let storeName = localStorage.getItem("storeName");

  //Check if store Name = null
  useEffect(() => {
    if (storeName == null || "") {
      navigate("/register");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeName]);

  // Password visibility
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  //Validate data
  const handleNextStep3 = () => {
    if (!payLoad.storeOwnEmail.includes("@")) {
      Swal.fire({
        title: "กรุณาใส่ข้อมูลให้ถูกต้องค่ะ!",
        text: "อีเมลไม่ถูกต้องค่ะ",
        icon: "question",
      });
    } else if (payLoad.storeOwnPassword !== payLoad.storeOwnPasswordConfirm) {
      Swal.fire({
        title: "รหัสผ่านไม่ตรงกัน!",
        text: "กรุณากรอกรหัสผ่านให้ตรงกันค่ะ",
        icon: "question",
      });
    }
  };

  const [payLoad, setPayLoad] = useState({
    storeName: localStorage.getItem("storeName"),
    Package_packageId: localStorage.getItem("packageId"),
    storeOwnEmail: "",
    storeOwnPassword: "",
    storeOwnPasswordConfirm: "",
  });

  // eslint-disable-next-line no-unused-vars
  const handleRegister = async () => {
    console.log(payLoad);
  };

  return (
    <div className="bg-white w-full">
      <nav className="flex h-[4rem] w-full justify-between items-center md:px-10 px-2">
        <div className=" cursor-pointer">
          <span className="text-[2.2rem] font-bold text-[#4C49ED]">POS</span>
          <span className="text-[2.2rem] font-bold">YAYEE</span>
        </div>
        <div className="rounded-[6px] hover:scale-105 underline">
          <a
            className="lg:w-[125px] w-full h-[50px] lg:h-[46px]"
            href="https://sale.posyayee.shop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="lg:w-[125px] w-fulle h-[50px] lg:h-[46px] text-black/80 underline">
              <p>เข้าสู่ระบบร้านค้า</p>
            </button>
          </a>
        </div>
      </nav>
      <hr />
      <div className="w-full flex justify-center">
        <div
          style={{ height: "calc(100vh - 5.2rem" }}
          className=" w-full max-w-screen-xl"
        >
          {/* Register emsil and pass */}
          <div className="w-full flex justify-center h-full">
            <div className="max-w-xl w-full">
              <div className="w-full pt-4">
                <div className="flex justify-center">
                  <MdAlternateEmail size={100} color="#4C49ED" />
                </div>
                <div className="text-center">
                  <h1 className=" text-[2rem] font-bold">
                    กรอกอีเมลและรหัสผ่าน
                  </h1>
                  <p className="pt-1 text-sm">
                    อีเมลและรหัสผ่านจะช่วยให้คุณสามารถเข้าสู่ระบบหน้าร้านได้
                  </p>
                  <p className="pt-2 text-sm">STEP 3 OF 3</p>
                </div>
              </div>
              {/* Email */}
              <div className="w-full md:px-6 px-10 md:mb-0">
                <p
                  className="block tracking-wide text-gray-600 text-sm mb-2 text-left pl-1"
                  htmlFor="username"
                >
                  อีเมล
                </p>
                <input
                  onChange={(e) =>
                    setPayLoad({ ...payLoad, storeOwnEmail: e.target.value })
                  }
                  className="appearance-none block w-full text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-[#4C49ED] bg-white"
                  id="email"
                  placeholder="example@gmail.com"
                />
              </div>
              {/* Password */}
              <div className="w-full md:px-6 px-10">
                <p
                  className="block tracking-wide text-gray-600 text-sm mb-2 text-left pl-1"
                  htmlFor="password"
                >
                  รหัสผ่าน
                </p>
                <div className="relative">
                  <input
                    onChange={(e) =>
                      setPayLoad({
                        ...payLoad,
                        storeOwnPassword: e.target.value,
                      })
                    }
                    className="appearance-none block w-full text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-[#4C49ED] bg-white text"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="******************"
                  />
                  <span
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </span>
                </div>
              </div>

              {/* Password confirm */}
              <div className="w-full md:px-6 px-10">
                <p
                  className="block tracking-wide text-gray-600 text-sm mb-2 text-left pl-1"
                  htmlFor="password"
                >
                  ยืนยันรหัสผ่าน
                </p>
                <div className="relative">
                  <input
                    onChange={(e) =>
                      setPayLoad({
                        ...payLoad,
                        storeOwnPasswordConfirm: e.target.value,
                      })
                    }
                    className="appearance-none block w-full text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-[#4C49ED] bg-white text"
                    id="passwordConfirm"
                    type={showPassword ? "text" : "password"}
                    placeholder="******************"
                  />
                  <span
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </span>
                </div>
              </div>

              {/* Next step */}
              <div className="w-full md:px-6 px-10 h-[3.5rem] mt-10 text-white">
                <button
                  onClick={() => handleNextStep3()}
                  className=" bg-[#4C49ED] w-full h-full rounded-md flex items-center justify-center gap-2 hover:scale-105"
                >
                  <p>ขั้นตอนต่อไป</p>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step3;
