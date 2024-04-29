import ExampleUse from "./ExampleUse";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { CiBarcode } from "react-icons/ci";
import { GiCubeforce } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";
import { BsPrinter } from "react-icons/bs";
import { IoAnalytics } from "react-icons/io5";
import { MdOutlineHistory } from "react-icons/md";
import { IoIosLaptop } from "react-icons/io";
import { CiWifiOn } from "react-icons/ci";

function SystemAbility() {
  //Svg background
  const svgDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="600" viewBox="0 0 1440 620" fill="#4C49ED"><path d="M437.785 0.170405C-115.801 -4.70534 -267.416 96.2633 -274.025 147.357H-440.577L-506.999 620H3146.23H3179.94C3181.92 592.066 3184.7 496.095 3179.94 335.683C3173.99 135.168 3191.8 47.5022 2214.34 96.1617C1550.5 129.208 1129.77 6.26509 437.785 0.170405Z"/></svg>`
  )}`;

  // Framer Motion variants for animation
  const controls = useAnimation();
  // Use the controls to animate elements when the user scrolls
  useEffect(() => {
    // Function to handle scroll events and trigger animations
    const handleScroll = () => {
      const yOffset = window.scrollY;
      const triggerOffset = window.innerHeight / 10;

      if (yOffset > triggerOffset) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 50 }, { immediate: true });
      }
    };
    document.addEventListener("scroll", handleScroll);
    // Remove event listener when the component unmounts to prevent memory leaks
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);
  return (
    <div className="w-full md:mt-[50%]  z-0 mt-6 lg:mt-0">
      <div className="relative w-full">
        <div
          className="w-full h-full text-center relative"
          style={{
            backgroundImage: `url('${svgDataUri}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full z-30 lg:mt-12 text-white h-full lg:flex justify-center">
            <div className=" w-full justify-center flex">
              <div className="w-full justify-center mt-32 lg:mt-0 lg:pt-10 max-w-screen-xl md:text-left">
                <h1 className=" font-semibold md:text-[38px] text-[30px] md:pl-16">
                  ความสามารถของระบบ
                </h1>
                <div className=" lg:flex lg:flex-row flex-col gap-6 mt-6 justify-center w-full px-2 lg:px-0">
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={controls}
                    transition={{ duration: 0.5, delay: 1 * 0.05 }}
                    className="lg:w-[269px] w-full lg:h-[180px] h-[200px] bg-[#5E6CEC] rounded-md mb-3 lg:mb-0 flex items-center"
                  >
                    <div className=" w-full flex flex-col items-center justify-center text-[1.3rem]">
                      <div>
                        <CiBarcode size={125} />
                      </div>
                      <div>
                        <p>แสกนบาร์โค้ดขายสินค้า</p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={controls}
                    transition={{ duration: 0.5, delay: 2 * 0.05 }}
                    className="lg:w-[269px] w-full lg:h-[180px] h-[200px] bg-[#5E6CEC] rounded-md mb-3 lg:mb-0 flex items-center"
                  >
                    <div className=" w-full flex flex-col items-center justify-center text-[1.3rem]">
                      <div>
                        <GiCubeforce size={125} />
                      </div>
                      <div>
                        <p>จัดการสต็อก เพิ่ม/ลบ/แก้ไข</p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={controls}
                    transition={{ duration: 0.5, delay: 3 * 0.05 }}
                    className="lg:w-[269px] w-full lg:h-[180px] h-[200px] bg-[#5E6CEC] rounded-md mb-3 lg:mb-0 flex items-center"
                  >
                    <div className=" w-full flex flex-col items-center justify-center text-[1.3rem]">
                      <div>
                        <MdAttachMoney size={125} />
                      </div>
                      <div>
                        <p>ระบบการขาย เงินสด/เงินเชื่อ</p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={controls}
                    transition={{ duration: 0.5, delay: 4 * 0.05 }}
                    className="lg:w-[269px] w-full lg:h-[180px] h-[200px] bg-[#5E6CEC] rounded-md mb-3 lg:mb-0 flex items-center"
                  >
                    <div className=" w-full flex flex-col items-center justify-center text-[1.3rem]">
                      <div>
                        <IoPersonAddOutline size={125} />
                      </div>
                      <div>
                        <p>เพิ่มพนักงานขาย</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className=" lg:flex lg:flex-row flex-col gap-6 lg:mt-6 mt-3 justify-center w-full px-2 lg:px-0 mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={controls}
                    transition={{ duration: 0.5, delay: 5 * 0.05 }}
                    className=" lg:w-[269px] w-full lg:h-[180px] h-[200px] bg-[#5E6CEC] rounded-md mb-3 lg:mb-0 flex items-center"
                  >
                    <div className=" w-full flex flex-col items-center justify-center text-[1.3rem]">
                      <div>
                        <BsPrinter size={125} />
                      </div>
                      <div>
                        <p>พิมพ์ใบเสร็จหลังการขาย</p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={controls}
                    transition={{ duration: 0.5, delay: 6 * 0.05 }}
                    className=" lg:w-[269px] w-full lg:h-[180px] h-[200px] bg-[#5E6CEC] rounded-md mb-3 lg:mb-0"
                  >
                    <div className=" w-full flex flex-col items-center justify-center text-[1.3rem]">
                      <div>
                        <IoAnalytics size={132} />
                      </div>
                      <div>
                        <p>วิเคราะห์ยอดขาย</p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={controls}
                    transition={{ duration: 0.5, delay: 7 * 0.05 }}
                    className=" lg:w-[269px] w-full lg:h-[180px] h-[200px] bg-[#5E6CEC] rounded-md mb-3 lg:mb-0"
                  >
                    <div className=" w-full flex flex-col items-center justify-center text-[1.3rem]">
                      <div>
                        <MdOutlineHistory size={125} />
                      </div>
                      <div>
                        <p>เก็บประวัติการขาย</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" w-full max-w-screen-xl text-[white] md:pl-2">
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 6 * 0.05 }}
              >
                <h1 className="md:text-[20px] text-[22px] pb-3 md:pl-14 md:text-left">
                  ร้านค้าต้องมีก่อนใช้งานระบบ *
                </h1>
              </motion.div>
              <div className="md:flex md:flex-row md:gap-6 md:justify-start justify-center px-2 md:pb-12 pt-2 flex gap-2 md:pl-14">
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={controls}
                  transition={{ duration: 0.5, delay: 6 * 0.05 }}
                  className="w-[120px] md:h-[90px] h-[90px] bg-[#5E6CEC] rounded-md mb-3 lg:mb-0"
                >
                  <div className=" w-full flex flex-col items-center justify-center text-[.6rem] md:text-[.7rem]">
                    <div>
                      <IoIosLaptop color="white" size={60} clas />
                    </div>
                    <div>
                      <p>โน้ตบุ๊ก/คอมพิวเตอร์</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={controls}
                  transition={{ duration: 0.5, delay: 6 * 0.05 }}
                  className="w-[120px] md:h-[90px] h-[90px] bg-[#5E6CEC] rounded-md mb-3 lg:mb-0"
                >
                  <div className=" w-full flex flex-col items-center justify-center text-[.6rem]  md:text-[.8rem]">
                    <div>
                      <CiBarcode color="white" size={60} />
                    </div>
                    <div>
                      <p>เครื่องแสกนบาร์โค้ด</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={controls}
                  transition={{ duration: 0.5, delay: 6 * 0.05 }}
                  className="w-[120px] md:h-[90px] h-[90px] bg-[#5E6CEC] rounded-md mb-3 lg:mb-0"
                >
                  <div className=" w-full flex flex-col items-center justify-center text-[.6rem]  md:text-[.8rem]">
                    <div>
                      <CiWifiOn color="white" size={60} />
                    </div>
                    <div>
                      <p>อินเทอร์เน็ต</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ExampleUse />
    </div>
  );
}

export default SystemAbility;
