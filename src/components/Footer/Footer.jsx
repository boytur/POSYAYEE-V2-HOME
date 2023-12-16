import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" w-full md:h-[250px] h-full md:mt-[34rem] mt-[10rem] relative bg-[#4C49ED]">
      <div className="w-full h-full md:flex justify-center pt-7 text-white pb-3">
        {/* menu */}
        <div className="w-full h-full pl-5 flex md:justify-center justify-start">
          <div className="md:pl-5">
            <h1 className="text-xl font-bold">เมนูหลัก</h1>
            <br />
            <div className="w-10 bg-white/20 rounded-xl h-1"></div>
            <br />
            <div className="flex flex-col gap-2 font-thin">
              <Link to="/">หน้าหลัก</Link>
              <Link to="/pricing">ราคา</Link>
              <Link to="/docs">คู่มือการใช้งาน</Link>
              <Link to="/news">ข่าวสาร</Link>
            </div>
          </div>
        </div>
        {/* contact */}
        <div className="w-full h-full pl-5 flex md:justify-center justify-start mt-4 md:mt-0">
          <div className="">
            <h1 className="text-xl font-bold">ติดต่อเรา</h1>
            <br />
            <div className="w-10 bg-white/20 rounded-xl h-1"></div>
            <br />
            <p className="pb-3">เบอร์โทรติดต่อ: 095-510-2451</p>
            <p className="pb-3">อีเมล: piyawat.posyayee@gmail.com</p>
            <p>Facebook: Posyayee-official</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
