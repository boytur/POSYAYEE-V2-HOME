import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { CiLaptop } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { GiCubeforce } from "react-icons/gi";
import { CiEdit } from "react-icons/ci";
import { CgExtensionAdd } from "react-icons/cg";
import { IoAnalytics } from "react-icons/io5";
import Footer from "../Footer/Footer";

function ExampleUse() {
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
    <div>
      <div className="w-full h-full flex justify-center px-3">
        <div className="w-full max-w-screen-xl">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={controls}
              transition={{ duration: 0.5, delay: 1 * 0.05 }}
              className="font-bold md:text-[38px] text-[30px] md:pl-16 md:text-center text-center mt-4 text-[#4C49ED] m-4"
            >
              ภาพตัวอย่างการใช้งาน
            </motion.p>
          </div>
          <div className="flex flex-col">
            {/* แสกนบาร์โค้ด */}
            <div className=" w-full relative h-[760px] md:h-[900px]">
              <div className="w-full h-[500px]">
                <div className="flex">
                  <div className="flex items-center md:w-2/4 w-full">
                    <div className="relative flex mr-6">
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={controls}
                        transition={{ duration: 0.5, delay: 6 * 0.05 }}
                        className="md:w-16 w-10 md:h-16 h-10 flex justify-center items-center bg-[#4C49ED] blur-[70px]"
                      ></motion.div>
                      <CiLaptop
                        size={30}
                        color="#4C49ED"
                        className=" absolute ml-4 mt-4"
                      />
                    </div>
                    <div className="w-3/4 md:mb-6">
                      <p className="md:text-[20px] text-[15px] font-bold">
                        &nbsp;ขายของหน้าร้าน
                      </p>
                      <h1 className="md:text-[40px] text-[30px] font-bold text-[#4C49ED]">
                        แสกนบาร์โค้ด
                      </h1>
                      <label>
                        สามารถขายด้วยการแสกนบาร์โค้ดและการขายของที่ไม่มีบาร์โค้ดได้{" "}
                        <br className=" md:flex hidden" />
                        โดยของที่ไม่มีบาร์โค้ดจะขึ้นมาที่หน้าหลัก
                        สามารถค้นหาหรือกดเพื่อเพิ่มการขายได้ทันที
                      </label>
                    </div>
                  </div>
                  {/* right picture */}
                  <div className="flex justify-end  md:w-2/4 z-20">
                    <div className=" absolute w-[360px] h-[370px] hidden bg-white shadow-lg rounded-md md:flex justify-center ">
                      <div className="w-[340px] h-[200px] bg-[#D9D9D9] m-3 rounded-md">
                        <p>ภาพ Gif การแสกนบาร์โค้ด 1</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* เส้น */}
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={controls}
                  transition={{ duration: 1, delay: 7 * 0.05 }}
                  className="md:w-[5.5rem] w-[2rem] h-[130%] md:h-[95%] absolute flex"
                >
                  <div
                    style={{
                      background: `linear-gradient(180deg, #4C49ED 0%, rgba(76, 73, 237, 0.00) 100%)`,
                      animation: "gradientAnimation 1s linear infinite",
                    }}
                    className="w-1 md:h-full h-[80%] ml-7"
                  ></div>
                </motion.div>
                {/* Mobile */}
                <div className=" md:hidden pl-16 pr-3 pt-2 flex justify-center">
                  <div className="w-[300px] h-[300px] border flex justify-center p-2 rounded-md">
                    <div className="w-[300px] h-[200px] border rounded-sm">
                      ภาพ Gif การแสกนบาร์โค้ด Mobile 1
                    </div>
                  </div>
                </div>
                <div className=" md:hidden pl-16 pr-3 pt-2 flex justify-center">
                  <div className="w-[300px] h-[300px] border flex justify-center p-2 rounded-md">
                    <div className="w-[300px] h-[200px] border rounded-sm">
                      ภาพ Gif การแสกนบาร์โค้ด Mobile 2
                    </div>
                  </div>
                </div>
                <div className=" md:pl-[5.5rem] hidden md:block">
                  <img
                    className="w-[1920px] object-contain relative"
                    src="https://www.jacksonsquareshopping.co.uk/wp-content/uploads/2016/12/placeholder-1920x1080-copy.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute md:flex justify-start md:w-2/4 hidden">
                <div className="w-[360px] h-[370px] bg-white shadow-lg rounded-md flex justify-center">
                  <div className="w-[340px] h-[200px] bg-[#D9D9D9] m-3 rounded-md">
                    <p>ภาพ Gif การแสกนบาร์โค้ด 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ตั้งค่าพนักงาน*/}
          <div className=" w-full relative mt-12">
            <div className="w-full relative h-[760px] md:h-[400px]">
              <div className="flex">
                <div className="flex items-center md:w-2/4 w-full">
                  <div className="relative flex mr-6">
                    <div className="md:w-16 w-10 md:h-16 h-10 flex justify-center items-center bg-[#4C49ED] blur-[70px]"></div>
                    <GoPerson
                      size={30}
                      color="#4C49ED"
                      className=" absolute ml-4 mt-4"
                    />
                  </div>
                  <div className="w-3/4 md:mb-6">
                    <p className="md:text-[20px] text-[15px] font-bold">
                      &nbsp;ขายของหน้าร้าน
                    </p>
                    <h1 className="md:text-[40px] text-[30px] font-bold text-[#4C49ED]">
                      ตั้งค่าพนักงาน
                    </h1>
                    <label>
                      สามารถเพิ่มพนักงานได้ (สูงสุดตามแพ็คเกจที่ซื้อ)
                      และพนักงานแต่ละคน มีสิทธิ์เข้าถึงแค่หน้าการขาย
                      หน้าเพิ่มสต็อก และหน้าดูสต็อก
                      โดยไม่มีสิทธิ์เข้าถึงหน้าวิเคราะห์ การขาย
                      และพนักงานแต่ละคนมีรหัสผ่านเป็นของตัวเองไม่สามารถสวมรอยเป็น
                      พนักงานคนอื่นเพื่อขายได้
                    </label>
                  </div>
                </div>
                {/* right picture */}
                <div className="flex justify-end  md:w-2/4 z-20">
                  <div className=" absolute w-[360px] h-[370px] hidden bg-white shadow-lg rounded-md md:flex justify-center ">
                    <div className="w-[340px] h-[200px] bg-[#D9D9D9] m-3 rounded-md">
                      <p>Right box 1</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* เส้น */}
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={controls}
                transition={{ duration: 1, delay: 9 * 0.05 }}
                className="md:w-[5.5rem] w-[2rem] lg:h-[213%] md:h-[150%] h-[135%] absolute flex"
              >
                <div
                  style={{
                    background: `linear-gradient(180deg, #4C49ED 0%, rgba(76, 73, 237, 0.00) 100%)`,
                    animation: "gradientAnimation 1s linear infinite",
                  }}
                  className="w-1 md:h-full h-[80%] ml-7"
                ></div>
              </motion.div>
              {/* Mobile */}
              <div className=" md:hidden pl-16 pr-3 pt-2 flex justify-center">
                <div className="w-[300px] h-[300px] border flex justify-center p-2">
                  <div className="w-[300px] h-[200px] border">
                    GIF1ยิงบาร์โค้ด
                  </div>
                </div>
              </div>
              <div className=" md:hidden pl-16 pr-3 pt-2 flex justify-center">
                <div className="w-[300px] h-[300px] border flex justify-center p-2">
                  <div className="w-[300px] h-[200px] border">
                    GIF1ยิงบาร์โค้ด
                  </div>
                </div>
              </div>
              <div className=" md:pl-[5.5rem] hidden md:block">
                <img
                  className="w-[1920px] object-contain relative"
                  src="https://www.jacksonsquareshopping.co.uk/wp-content/uploads/2016/12/placeholder-1920x1080-copy.png"
                  alt=""
                />
              </div>
            </div>
            <div className="absolute md:flex justify-start md:w-2/4 hidden mt-32">
              <div className="w-[360px] h-[370px] bg-white shadow-lg rounded-md flex justify-center">
                <div className="w-[340px] h-[200px] bg-[#D9D9D9] m-3 rounded-md">
                  <p>Left bwadD ox 1</p>
                </div>
              </div>
            </div>
          </div>

          {/* ดูสินค้าทั้งหมดและใกล้หมด */}
          <div className=" w-full relative md:mt-[35rem] lg:mt-[35rem] mt-28">
            <div className="w-full relative h-[760px] md:h-[400px]">
              <div className="flex">
                <div className="flex items-center md:w-2/4 w-full">
                  <div className="relative flex mr-6">
                    <div className="md:w-16 w-10 md:h-16 h-10 flex justify-center items-center bg-[#4C49ED] blur-[70px]"></div>
                    <GiCubeforce
                      size={30}
                      color="#4C49ED"
                      className=" absolute ml-4 mt-4"
                    />
                  </div>
                  <div className="w-3/4 md:mb-6">
                    <p className="md:text-[20px] text-[15px] font-bold">
                      &nbsp;ดูสต็อกสินค้า
                    </p>
                    <h1 className="md:text-[40px] text-[30px] font-bold text-[#4C49ED]">
                      ดูสินค้าทั้งหมดและใกล้หมด
                    </h1>
                    <label>
                      สามารถเพิ่มพนักงานได้ (สูงสุดตามแพ็คเกจที่ซื้อ)
                      และพนักงานแต่ละคน มีสิทธิ์เข้าถึงแค่หน้าการขาย
                      หน้าเพิ่มสต็อก และหน้าดูสต็อก
                      โดยไม่มีสิทธิ์เข้าถึงหน้าวิเคราะห์ การขาย
                      และพนักงานแต่ละคนมีรหัสผ่านเป็นของตัวเองไม่สามารถสวมรอยเป็น
                      พนักงานคนอื่นเพื่อขายได้
                    </label>
                  </div>
                </div>
                {/* right picture */}
                <div className="flex justify-end  md:w-2/4 z-20">
                  <div className=" absolute w-[360px] h-[370px] hidden bg-white shadow-lg rounded-md md:flex justify-center ">
                    <div className="w-[340px] h-[200px] bg-[#D9D9D9] m-3 rounded-md">
                      <p>asdfas</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* เส้น */}
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={controls}
                transition={{ duration: 1, delay: 11 * 0.05 }}
                className="md:w-[5.5rem] w-[2rem] md:h-[210%] h-[95%] absolute flex"
              >
                <div
                  style={{
                    background: `linear-gradient(180deg, #4C49ED 0%, rgba(76, 73, 237, 0.00) 100%)`,
                    animation: "gradientAnimation 1s linear infinite",
                  }}
                  className="w-1 md:h-full h-full ml-7"
                ></div>
              </motion.div>
              {/* Mobile */}
              <div className=" md:hidden pl-16 pr-3 pt-2 flex justify-center">
                <div className="w-[300px] h-[300px] border flex justify-center p-2">
                  <div className="w-[300px] h-[200px] border">
                    GIF1ยิงบาร์โค้ด
                  </div>
                </div>
              </div>
              <div className=" md:hidden pl-16 pr-3 pt-2 flex justify-center">
                <div className="w-[300px] h-[300px] border flex justify-center p-2">
                  <div className="w-[300px] h-[200px] border">
                    GIF1ยิงบาร์โค้ด
                  </div>
                </div>
              </div>
              <div className=" md:pl-[5.5rem] hidden md:block">
                <img
                  className="w-[1920px] object-contain relative"
                  src="https://www.jacksonsquareshopping.co.uk/wp-content/uploads/2016/12/placeholder-1920x1080-copy.png"
                  alt=""
                />
              </div>
            </div>
            <div className="absolute md:flex justify-start md:w-2/4 hidden mt-32">
              <div className="w-[360px] h-[370px] bg-white shadow-lg rounded-md flex justify-center">
                <div className="w-[340px] h-[200px] bg-[#D9D9D9] m-3 rounded-md">
                  <p>asdfas</p>
                </div>
              </div>
            </div>
          </div>

          {/* แก้ไขและลบสินค้า */}
          <div className=" w-full relative md:mt-[35rem] lg:mt-[35rem] mt-36">
            <div className="w-full relative h-[760px] md:h-[400px]">
              <div className="flex">
                <div className="flex items-center md:w-2/4 w-full">
                  <div className="relative flex mr-6">
                    <div className="md:w-16 w-10 md:h-16 h-10 flex justify-center items-center bg-[#4C49ED] blur-[70px]"></div>
                    <CiEdit
                      size={30}
                      color="#4C49ED"
                      className=" absolute ml-4 mt-4"
                    />
                  </div>
                  <div className="w-3/4 md:mb-6">
                    <p className="md:text-[20px] text-[15px] font-bold">
                      &nbsp;ดูสต็อกสินค้า
                    </p>
                    <h1 className="md:text-[40px] text-[30px] font-bold text-[#4C49ED]">
                      แก้ไขและลบสินค้า
                    </h1>
                    <label>
                      สามารถเพิ่มพนักงานได้ (สูงสุดตามแพ็คเกจที่ซื้อ)
                      และพนักงานแต่ละคน มีสิทธิ์เข้าถึงแค่หน้าการขาย
                      หน้าเพิ่มสต็อก และหน้าดูสต็อก
                      โดยไม่มีสิทธิ์เข้าถึงหน้าวิเคราะห์ การขาย
                      และพนักงานแต่ละคนมีรหัสผ่านเป็นของตัวเองไม่สามารถสวมรอยเป็น
                      พนักงานคนอื่นเพื่อขายได้
                    </label>
                  </div>
                </div>
                {/* right picture */}
                <div className="flex justify-end  md:w-2/4 z-20">
                  <div className=" absolute w-[360px] h-[370px] hidden bg-white shadow-lg rounded-md md:flex justify-center ">
                    <div className="w-[340px] h-[200px] bg-[#D9D9D9] m-3 rounded-md">
                      <p>asdfas</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* เส้น */}
              <div className="md:w-[5.5rem] w-[2rem] h-full absolute flex">
                <div
                  style={{
                    background: `linear-gradient(180deg, #4C49ED 0%, rgba(76, 73, 237, 0.00) 100%)`,
                    animation: "gradientAnimation 1s linear infinite",
                  }}
                  className="w-1 md:h-[220%] h-[110%] ml-7"
                ></div>
              </div>
              {/* Mobile */}
              <div className=" md:hidden pl-16 pr-3 pt-2 flex justify-center">
                <div className="w-[300px] h-[300px] border flex justify-center p-2">
                  <div className="w-[300px] h-[200px] border">
                    GIF1ยิงบาร์โค้ด
                  </div>
                </div>
              </div>
              <div className=" md:hidden pl-16 pr-3 pt-2 flex justify-center">
                <div className="w-[300px] h-[300px] border flex justify-center p-2">
                  <div className="w-[300px] h-[200px] border">
                    GIF1ยิงบาร์โค้ด
                  </div>
                </div>
              </div>
              <div className=" md:pl-[5.5rem] hidden md:block">
                <img
                  className="w-[1920px] object-contain relative"
                  src="https://www.jacksonsquareshopping.co.uk/wp-content/uploads/2016/12/placeholder-1920x1080-copy.png"
                  alt=""
                />
              </div>
            </div>
            <div className="absolute md:flex justify-start md:w-2/4 hidden mt-32">
              <div className="w-[360px] h-[370px] bg-white shadow-lg rounded-md flex justify-center">
                <div className="w-[340px] h-[200px] bg-[#D9D9D9] m-3 rounded-md">
                  <p>asdfas</p>
                </div>
              </div>
            </div>
          </div>

          {/* เพิ่มสินค้ามีบาร์โค้ดและไม่มี */}
          <div className=" w-full relative md:mt-[35rem] lg:mt-[35rem] mt-32">
            <div className="w-full relative h-[760px] md:h-[400px]">
              <div className="flex">
                <div className="flex items-center md:w-2/4 w-full">
                  <div className="relative flex mr-6">
                    <div className="md:w-16 w-10 md:h-16 h-10 flex justify-center items-center bg-[#4C49ED] blur-[70px]"></div>
                    <CgExtensionAdd
                      size={30}
                      color="#4C49ED"
                      className=" absolute ml-4 mt-4"
                    />
                  </div>
                  <div className="w-3/4 md:mb-6">
                    <p className="md:text-[20px] text-[15px] font-bold">
                      &nbsp;เพิ่มสต็อกสินค้า
                    </p>
                    <h1 className="md:text-[40px] text-[30px] font-bold text-[#4C49ED]">
                      เพิ่มสินค้ามีบาร์โค้ดและไม่มี
                    </h1>
                    <label>
                      สามารถเพิ่มพนักงานได้ (สูงสุดตามแพ็คเกจที่ซื้อ)
                      และพนักงานแต่ละคน มีสิทธิ์เข้าถึงแค่หน้าการขาย
                      หน้าเพิ่มสต็อก และหน้าดูสต็อก
                      โดยไม่มีสิทธิ์เข้าถึงหน้าวิเคราะห์ การขาย
                      และพนักงานแต่ละคนมีรหัสผ่านเป็นของตัวเองไม่สามารถสวมรอยเป็น
                      พนักงานคนอื่นเพื่อขายได้
                    </label>
                  </div>
                </div>
                {/* right picture */}
                <div className="flex justify-end  md:w-2/4 z-20">
                  <div className=" absolute w-[360px] h-[370px] hidden bg-white shadow-lg rounded-md md:flex justify-center ">
                    <div className="w-[340px] h-[200px] bg-[#D9D9D9] m-3 rounded-md">
                      <p>asdfas</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* เส้น */}
              <div className="md:w-[5.5rem] w-[2rem] h-full absolute flex">
                <div
                  style={{
                    background: `linear-gradient(180deg, #4C49ED 0%, rgba(76, 73, 237, 0.00) 100%)`,
                    animation: "gradientAnimation 1s linear infinite",
                  }}
                  className="w-1 md:h-[210%] h-[100%] ml-7"
                ></div>
              </div>
              {/* Mobile */}
              <div className=" md:hidden pl-16 pr-3 pt-2 flex justify-center">
                <div className="w-[300px] h-[300px] border flex justify-center p-2">
                  <div className="w-[300px] h-[200px] border">
                    GIF1ยิงบาร์โค้ด
                  </div>
                </div>
              </div>
              <div className=" md:hidden pl-16 pr-3 pt-2 flex justify-center">
                <div className="w-[300px] h-[300px] border flex justify-center p-2">
                  <div className="w-[300px] h-[200px] border">
                    GIF1ยิงบาร์โค้ด
                  </div>
                </div>
              </div>
              <div className=" md:pl-[5.5rem] hidden md:block">
                <img
                  className="w-[1920px] object-contain relative"
                  src="https://www.jacksonsquareshopping.co.uk/wp-content/uploads/2016/12/placeholder-1920x1080-copy.png"
                  alt=""
                />
              </div>
            </div>
            <div className="absolute md:flex justify-start md:w-2/4 hidden mt-32">
              <div className="w-[360px] h-[370px] bg-white shadow-lg rounded-md flex justify-center">
                <div className="w-[340px] h-[200px] bg-[#D9D9D9] m-3 rounded-md">
                  <p>asdfas</p>
                </div>
              </div>
            </div>
          </div>

          {/* วิเคราะห์ยอดขาย */}
          <div className=" w-full relative md:mt-[35rem] lg:mt-[35rem] mt-36">
            <div className="w-full relative h-[760px] md:h-[400px]">
              <div className="flex">
                <div className="flex items-center md:w-2/4 w-full">
                  <div className="relative flex mr-6">
                    <div className="md:w-16 w-10 md:h-16 h-10 flex justify-center items-center bg-[#4C49ED] blur-[70px]"></div>
                    <IoAnalytics
                      size={30}
                      color="#4C49ED"
                      className=" absolute ml-4 mt-4"
                    />
                  </div>
                  <div className="w-3/4 md:mb-6">
                    <p className="md:text-[20px] text-[15px] font-bold">
                      &nbsp;เพิ่มสต็อกสินค้า
                    </p>
                    <h1 className="md:text-[40px] text-[30px] font-bold text-[#4C49ED]">
                      ดูยอดขายวิเคราะห์ยอดขาย
                    </h1>
                    <label>
                      สามารถเพิ่มพนักงานได้ (สูงสุดตามแพ็คเกจที่ซื้อ)
                      และพนักงานแต่ละคน มีสิทธิ์เข้าถึงแค่หน้าการขาย
                      หน้าเพิ่มสต็อก และหน้าดูสต็อก
                      โดยไม่มีสิทธิ์เข้าถึงหน้าวิเคราะห์ การขาย
                      และพนักงานแต่ละคนมีรหัสผ่านเป็นของตัวเองไม่สามารถสวมรอยเป็น
                      พนักงานคนอื่นเพื่อขายได้
                    </label>
                  </div>
                </div>
                {/* right picture */}
                <div className="flex justify-end  md:w-2/4 z-20">
                  <div className=" absolute w-[360px] h-[370px] hidden bg-white shadow-lg rounded-md md:flex justify-center ">
                    <div className="w-[340px] h-[200px] bg-[#D9D9D9] m-3 rounded-md">
                      <p>asdfas</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* เส้น */}
              <div className="md:w-[5.5rem] w-[2rem] h-full absolute flex">
                <div
                  style={{
                    background: `linear-gradient(180deg, #4C49ED 0%, rgba(76, 73, 237, 0.00) 100%)`,
                    animation: "gradientAnimation 1s linear infinite",
                  }}
                  className="w-1 md:h-[210%] h-[100%] ml-7"
                ></div>
              </div>
              {/* Mobile */}
              <div className=" md:hidden pl-16 pr-3 pt-2 flex justify-center">
                <div className="w-[300px] h-[300px] border flex justify-center p-2">
                  <div className="w-[300px] h-[200px] border">
                    GIF1ยิงบาร์โค้ด
                  </div>
                </div>
              </div>
              <div className=" md:hidden pl-16 pr-3 pt-2 flex justify-center">
                <div className="w-[300px] h-[300px] border flex justify-center p-2">
                  <div className="w-[300px] h-[200px] border">
                    GIF1ยิงบาร์โค้ด
                  </div>
                </div>
              </div>
              <div className=" md:pl-[5.5rem] hidden md:block">
                <img
                  className="w-[1920px] object-contain relative"
                  src="https://www.jacksonsquareshopping.co.uk/wp-content/uploads/2016/12/placeholder-1920x1080-copy.png"
                  alt=""
                />
              </div>
            </div>
            <div className="absolute md:flex justify-start md:w-2/4 hidden mt-32">
              <div className="w-[360px] h-[370px] bg-white shadow-lg rounded-md flex justify-center">
                <div className="w-[340px] h-[200px] bg-[#D9D9D9] m-3 rounded-md">
                  <p>asdfas</p>
                </div>
              </div>
            </div>
          </div>

          {/* เก็บประวัติการขาย */}
          <div className=" w-full relative md:mt-[35rem] lg:mt-[35rem] mt-36">
            <div className="w-full relative h-[760px] md:h-[400px]">
              <div className="flex">
                <div className="flex items-center md:w-2/4 w-full">
                  <div className="relative flex mr-6">
                    <div className="md:w-16 w-10 md:h-16 h-10 flex justify-center items-center bg-[#4C49ED] blur-[70px]"></div>
                    <IoAnalytics
                      size={30}
                      color="#4C49ED"
                      className=" absolute ml-4 mt-4"
                    />
                  </div>
                  <div className="w-3/4 md:mb-6">
                    <p className="md:text-[20px] text-[15px] font-bold">
                      &nbsp;ประวัติการขาย
                    </p>
                    <h1 className="md:text-[40px] text-[30px] font-bold text-[#4C49ED]">
                      ดูประวัติการขายย้อนหลัง
                    </h1>
                    <label>
                      สามารถเพิ่มพนักงานได้ (สูงสุดตามแพ็คเกจที่ซื้อ)
                      และพนักงานแต่ละคน มีสิทธิ์เข้าถึงแค่หน้าการขาย
                      หน้าเพิ่มสต็อก และหน้าดูสต็อก
                      โดยไม่มีสิทธิ์เข้าถึงหน้าวิเคราะห์ การขาย
                      และพนักงานแต่ละคนมีรหัสผ่านเป็นของตัวเองไม่สามารถสวมรอยเป็น
                      พนักงานคนอื่นเพื่อขายได้
                    </label>
                  </div>
                </div>
                {/* right picture */}
                <div className="flex justify-end  md:w-2/4 z-20">
                  <div className=" absolute w-[360px] h-[370px] hidden bg-white shadow-lg rounded-md md:flex justify-center ">
                    <div className="w-[340px] h-[200px] bg-[#D9D9D9] m-3 rounded-md">
                      <p>asdfas</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile */}
              <div className=" md:hidden pl-16 pr-3 pt-2 flex justify-center">
                <div className="w-[300px] h-[300px] border flex justify-center p-2">
                  <div className="w-[300px] h-[200px] border">
                    GIF1ยิงบาร์โค้ด
                  </div>
                </div>
              </div>
              <div className=" md:hidden pl-16 pr-3 pt-2 flex justify-center">
                <div className="w-[300px] h-[300px] border flex justify-center p-2">
                  <div className="w-[300px] h-[200px] border">
                    GIF1ยิงบาร์โค้ด
                  </div>
                </div>
              </div>
              <div className=" md:pl-[5.5rem] hidden md:block">
                <img
                  className="w-[1920px] object-contain relative"
                  src="https://www.jacksonsquareshopping.co.uk/wp-content/uploads/2016/12/placeholder-1920x1080-copy.png"
                  alt=""
                />
              </div>
            </div>
            <div className="absolute md:flex justify-start md:w-2/4 hidden mt-32">
              <div className="w-[360px] h-[370px] bg-white shadow-lg rounded-md flex justify-center">
                <div className="w-[340px] h-[200px] bg-[#D9D9D9] m-3 rounded-md">
                  <p>asdfas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default ExampleUse;