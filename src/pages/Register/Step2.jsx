/* eslint-disable react/prop-types */
import { IoStorefrontOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

function Step2() {
  // Check if the name has been entered before to prevent skipping route step1
  const navigate = useNavigate();
  let packageId = localStorage.getItem("package_id");

  useEffect(() => {
    localStorage.setItem("store_name", store_name);
    if (packageId == null || packageId == "") {
      navigate("/register");
    }
  });

  const [labelName, setLabelName] = useState(
    localStorage.getItem("store_name") || "มาตั้งชื่อร้านของคุณกัน"
  );
  const [store_name, setstore_name] = useState(
    localStorage.getItem("store_name") || ""
  );

  //Validate data
  const handelNextStep2 = () => {
    //Check if store name empty
    if (!store_name || store_name.replace(" ", "") == "") {
      Swal.fire({
        title: "กรุณาใส่ข้อมูลให้ครบ",
        text: "ไม่มีชื่อร้าน กรุณาใส่ชื่อร้านค่ะ",
        icon: "question",
      });
    } else {
      localStorage.setItem("store_name", store_name);
      navigate("/register/step3");
      setLabelName(localStorage.getItem("store_name"));
    }
  };

  const resetstore_name = () => {
    localStorage.removeItem("store_name");
    setLabelName("มาตั้งชื่อร้านของคุณกัน");
    setstore_name("");
  };

  return (
    <div className="w-full justify-center bg-white" >
      <nav className="flex h-[4rem] w-full justify-between items-center md:px-10 px-2">
        <Link to = "/" className=" cursor-pointer">
          <span className="text-[2.2rem] font-bold text-[#4C49ED]">POS</span>
          <span className="text-[2.2rem] font-bold">YAYEE</span>
        </Link>
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
      <div className=" w-full flex justify-center">
        <div
          style={{ height: "calc(100vh - 5.2rem" }}
          className=" w-full max-w-screen-xl flex justify-center items-center"
        >
          <div>
            <div className=" w-full justify-center flex">
              <IoStorefrontOutline size={200} color="#4C49ED" />
            </div>
            <div className="text-center p-1 pt-3">
              <p className="text-[2rem] font-bold pt-3">{labelName}</p>
              <p className=" text-sm pt-1">STEP 2 OF 3</p>
              <p
                onClick={() => resetstore_name()}
                className={`text-[12px] underline text-[#fe0000] pt-1 cursor-pointer ${
                  localStorage.getItem("store_name") === "" ||
                  localStorage.getItem("store_name") === null
                    ? "hidden"
                    : "block"
                }
          }`}
              >
                ล้างข้อมูล
              </p>
            </div>
            <div className=" text-center pt-4 pb-2">
              <div className="relative gap-1 flex justify-center">
                <input
                  className="h-[3rem] w-[15rem] border pl-2 rounded-md text-[1.2rem] focus:outline-[#4C49ED]"
                  placeholder="ร้านค้าแม่ยาหยี"
                  type="text"
                  name="store_name"
                  id=""
                  required
                  value={store_name}
                  onChange={(e) => setstore_name(e.target.value)}
                />
                <button
                  onClick={() => handelNextStep2()}
                  className="w-[100px] h-[3rem] lg:h-[46px] text-white flex justify-center items-center gap-1 bg-[#4C49ED] hover:bg-[#4c49edcf] rounded-md"
                >
                  <p>ถัดไป</p>
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

export default Step2;