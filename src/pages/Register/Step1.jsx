import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const packages = [
  {
    id: 2,
    packageName: "ร้านกาแฟ",
    packagePrice: 245,
    packageDes: "สินค้า 250 ชนิด พนักงาน 1 คน",
  },
  {
    id: 3,
    packageName: "ร้านชำเล็ก",
    packagePrice: 349,
    packageDes: "สินค้า 1,000 ชนิด พนักงาน 3 คน",
  },
  {
    id: 4,
    packageName: "ร้านชำใหญ่",
    packagePrice: 499,
    packageDes: "สินค้า 3,000 ชนิด พนักงาน 5 คน",
  }
]

function Step1() {

  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(localStorage.getItem("package_id"));

  const handlePackageClick = (packageId) => {
    setSelectedPackage(packageId);
    localStorage.setItem("package_id", packageId);
  };

  const handelNextStep2 = () => {
    if (
      localStorage.getItem("package_id") == null ||
      localStorage.getItem("package_id") == ""
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
    <div className="w-full h-full flex">
      <div className="w-full flex justify-center h-full">
        <div className=" max-w-screen-xl w-full">
          <div className="md:text-[2rem] text-[1.4rem] text-center font-bold pt-5">
            <h1>เลือกแพ็คเกจให้เหมาะกับร้านของคุณ</h1>
          </div>

          <div className="lg:flex lg:flex-row md:flex md:flex-row flex flex-col items-center md:mx-10 mt-5">
            {packages.map((p) => (
              <div
                key={p.id}
                onClick={() => handlePackageClick(p.id)}
                className="w-full items-end flex text-center h-full cursor-pointer px-2 md:px-0 m-2"
              >
                <div
                  className={`w-full h-[80%] border bg-white rounded-lg  hover:border-[#4C49ED] ${selectedPackage === p.id
                    ? "border-[#4C49ED] border-[2px] bg-[#cccafd71]"
                    : ""
                    }`}
                >
                  <div className="flex flex-col">
                    <div className="pt-4">
                      <h1 className="font-bold text-[1.5rem]">{p.packageName}</h1>
                      <h1 className="font-bold text-[3.3rem] text-[#4C49ED]">
                        ฿{p.packagePrice}
                      </h1>
                      <p>ต่อเดือน</p>
                      <p className="text-[.7rem] mb-3">
                        {p.packageDes}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <br />
          </div>
          <div
            onClick={() => handlePackageClick(1)}
            className="w-full items-end flex text-center h-[15rem] cursor-pointer px-2 md:px-10 mb-6"
          >
            <div
              className={`w-full md:h-[90%] h-full border bg-white rounded-lg  hover:border-[#4C49ED] ${selectedPackage === 1
                ? "border-[#4C49ED] border-[2px] bg-[#cccafd71] "
                : ""
                }`}
            >
              <div className="flex flex-col">
                <div className="pt-2">
                  <h1 className="font-bold text-[1.5rem]">ทดลองใช้งาน</h1>
                  <h1 className="font-bold text-[4rem] text-[#4C49ED]">
                    ฟรี
                  </h1>
                  <p>นาน 30 วัน</p>
                  <p className="text-[.7rem] mb-3">
                    เพิ่มสินค้าได้มากถึง 100 ชนิด
                  </p>
                  <p className="text-[.7rem] text-[#fe0000]">
                    *ไม่มีการผูกบัตรหรือเก็บเงินใดๆทั้งสิ้น
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`w-full justify-center md:mt-5 pb-5 mt-0 ${localStorage.getItem("package_id") === null ||
              localStorage.getItem("package_id") === ""
              ? "hidden"
              : "flex"
              }`}
          >
            <div>
              <div className="text-center py-2">
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
