import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Pricing() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScroll(scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-full h-full flex justify-center px-3 md:px-0 bg-[#F9FAFB]">
        {/* Destops */}
        <div className="md:flex justify-center w-full pt-4 hidden">
          <div className="w-full text-center">
            <h1 className="text-3xl font-bold">ราคา</h1>
            <div className="pb-5">
              <p className="pt-4">
                ดูราคาเช่าโปรแกรมในแต่ละเดือนและเลือกให้เหมาะกับร้านของคุณหรือทดลองใช้งาน
                30 วัน{" "}
                <span className="text-[#fe0000] underline">
                  ฟรีไม่มีค่าใช้จ่าย{" "}
                </span>
                ใดๆทั้งสิ้น
              </p>
            </div>
            <div className="w-full h-full md:flex justify-center">
              <div
                className={`w-full h-[4rem] md:fixed text-white top-[4rem] gap-1 bg-white max-w-screen-xl ${
                  scroll ? "hidden md:flex" : "flex md:hidden"
                }`}
              >
                <div
                  style={{ borderBottom: "3px solid #4C49ED" }}
                  className="w-full h-full bg-[#E4E3FF] text-2xl font-bold flex items-center text-[#4C49ED]"
                >
                  <p className="pl-3">ฟรี </p>
                </div>
                <div
                  style={{ borderBottom: "3px solid #4C49ED" }}
                  className="w-full h-full bg-[#E4E3FF] text-2xl font-bold flex items-center text-[#4C49ED]"
                >
                  <p className="pl-3">ร้านชำเล็ก</p>
                </div>
                <div
                  style={{ borderBottom: "3px solid #4C49ED" }}
                  className="w-full h-full bg-[#E4E3FF] text-2xl font-bold flex items-center text-[#4C49ED]"
                >
                  <p className="pl-3">ร้านชำใหญ่</p>
                </div>
              </div>
              <div className=" w-full h-[1080px] md:flex max-w-screen-xl pt-3 gap-1">
                <div className="w-full h-full items-end flex">
                  <div className=" w-full h-[90%] border bg-white rounded-lg">
                    <div className="flex flex-col pt-[3.2rem]">
                      <div className="pt-14">
                        <h1 className=" font-bold text-[1.5rem]">
                          ทดลองใช้งาน
                        </h1>
                        <h1 className=" font-bold text-[4rem] text-[#4C49ED]">
                          ฟรี
                        </h1>
                        <p>นาน 30 วัน</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full items-end flex">
                  <div
                    className={`${
                      scroll
                        ? "w-full h-[90%] border bg-white rounded-lg flex justify-center pt-4"
                        : "w-full h-full border bg-white rounded-lg flex justify-center pt-4"
                    }`}
                  >
                    <div className="flex flex-col">
                      <div className="w-[157px] h-[35px] bg-[#C0FFD6] mt-8 rounded-[16px] flex items-center justify-center">
                        <p>แนะนำสำหรับคุณ</p>
                      </div>
                      <div className="pt-7">
                        <h1 className=" font-bold text-[1.5rem]">ร้านชำเล็ก</h1>
                        <h1 className=" font-bold text-[4rem] text-[#4C49ED]">
                          ฿349
                        </h1>
                        <p>ต่อเดือน</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full items-end flex">
                  <div className=" w-full h-[90%] border  bg-white rounded-lg">
                    <div className="flex flex-col pt-[3.2rem]">
                      <div className="pt-14">
                        <h1 className=" font-bold text-[1.5rem]">ร้านชำใหญ่</h1>
                        <h1 className=" font-bold text-[4rem] text-[#4C49ED]">
                          ฿499
                        </h1>
                        <p>ต่อเดือน</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mibile */}
      <Footer />
    </div>
  );
}

export default Pricing;