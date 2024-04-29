import { Routes, Route, Link } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

function Register() {
  document.title = "POSYAYEE 🛒 สมัครสมาชิก";
  return (
    <div className="bg-white w-full h-full">
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
            <button className="lg:w-[125px] w-full h-[50px] lg:h-[46px] text-black/80 underline">
              <p>เข้าสู่ระบบร้านค้า</p>
            </button>
          </a>
        </div>
      </nav>

      <div className="flex justify-center items-center h-full">
        <Step1 />
      </div>

      <Routes>
        <Route path="step2" element={<Step2 />} />
        <Route path="step3" element={<Step3 />} />
      </Routes>
    </div>
  );
}

export default Register;
