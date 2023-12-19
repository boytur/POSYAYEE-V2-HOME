import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Step1() {
  const navigate = useNavigate();

  const [selectedPackage, setSelectedPackage] = useState(null);
  const handlePackageClick = (packageId) => {
    setSelectedPackage(packageId);
    localStorage.setItem("packageId", packageId);
  };

  const handelNextStep2 = () => {
    if (
      localStorage.getItem("packageId") == null ||
      localStorage.getItem("packageId") == ""
    ) {
      Swal.fire({
        title: "กรุณาเลือกแพ็คเกจค่ะ",
        icon: "question",
      });
    } else {
      navigate("/register/step2");
    }
  };

  return (
    <div style={{ height: "calc(100vh - 4.6rem)" }} className="w-full flex">
      <div className="w-full flex justify-center ">
        <div className=" max-w-screen-xl w-full">
          <div className=" md:text-[2rem] text-[1.4rem] text-center font-bold pt-5">
            <h1>เลือกแพ็คเกจให้เหมาะกับร้านของคุณ</h1>
          </div>
          <div className="lg:flex gap-4 items-center md:mx-10">
            {/*  */}
            <button
              d="1"
              onClick={() => handlePackageClick("1")}
              className="w-full items-end flex text-center h-[15rem] cursor-pointer px-2 md:px-0 "
            >
              <div
                className={`w-full h-[90%] border bg-white rounded-lg hover:bg-[#e4e3ff91] hover:border-[#4C49ED] ${
                  selectedPackage == "1"
                    ? "border-[#4C49ED] bg-[#e4e3ffeb] md:scale-105"
                    : ""
                }`}
              >
                <div className="flex flex-col">
                  <div className="pt-6">
                    <h1 className=" font-bold text-[1.5rem]">ทดลองใช้งาน</h1>
                    <h1 className=" font-bold text-[4rem] text-[#4C49ED]">
                      ฟรี
                    </h1>
                    <p>นาน 30 วัน</p>
                    <p className="text-[.7rem] text-[#fe0000]">
                      *ไม่มีการผูกบัตรหรือเก็บเงินใดๆทั้งสิ้น
                    </p>
                  </div>
                </div>
              </div>
            </button>
            {/*  */}
            <button
              id="2"
              className="w-full items-end flex text-center h-[15rem] cursor-pointer px-2 md:px-0"
            >
              <div
                onClick={() => handlePackageClick("2")}
                className={`w-full h-[90%] border bg-white rounded-lg hover:bg-[#e4e3ff91] hover:border-[#4C49ED] ${
                  selectedPackage == "2"
                    ? "border-[#4C49ED] bg-[#e4e3ffeb] md:scale-105"
                    : ""
                }`}
              >
                <div className="flex flex-col">
                  <div className="pt-6">
                    <h1 className=" font-bold text-[1.5rem]">ร้านชำเล็ก</h1>
                    <h1 className=" font-bold text-[4rem] text-[#4C49ED]">
                      ฿349
                    </h1>
                    <p>ต่อเดือน</p>
                  </div>
                </div>
              </div>
            </button>
            {/*  */}
            <button
              onClick={() => handlePackageClick("3")}
              id="3"
              className="w-full items-end flex text-center h-[15rem] cursor-pointer px-2 md:px-0"
            >
              <div
                className={`w-full h-[90%] border bg-white rounded-lg hover:bg-[#e4e3ff91] hover:border-[#4C49ED] ${
                  selectedPackage == "3"
                    ? "border-[#4C49ED] bg-[#e4e3ffeb] md:scale-105"
                    : ""
                }`}
              >
                <div className="flex flex-col">
                  <div className="pt-6">
                    <h1 className=" font-bold text-[1.5rem]">ร้านชำใหญ่</h1>
                    <h1 className=" font-bold text-[4rem] text-[#4C49ED]">
                      ฿499
                    </h1>
                    <p>นาน 30 วัน</p>
                  </div>
                </div>
              </div>
            </button>
            <br />
          </div>
          <div
            className={`w-full justify-center pt-5 md:mt-20 h-[10rem] ${
              localStorage.getItem("packageId") === null ||
              localStorage.getItem("packageId") === ""
                ? "hidden"
                : "flex"
            }`}
          >
            <div>
              <div className="text-center py-5">
                <p>STEP 1 OF 3</p>
              </div>
              <button
                onClick={() => handelNextStep2()}
                className="w-[20rem] h-[4rem] bg-[#4C49ED] rounded-md text-white hover:bg-[#4c49edcf] flex justify-center items-center gap-2"
              >
                <p>ขั้นตอนต่อไป</p>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step1;
