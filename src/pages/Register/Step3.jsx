/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlinePhoneAndroid } from "react-icons/md";
// eslint-disable-next-line no-unused-vars
import Swal from "sweetalert2";
import Axios from "../../libs/Axios";
import OtpTimer from "otp-timer";

function Step3() {

  const navigate = useNavigate();
  let store_name = localStorage.getItem("store_name");

  const [loading, setLoading] = useState(false);
  const [otpExpiration, setOtpExpiration] = useState(15 * 60 * 1000);

  const [otpPopup, setOtpPopup] = useState(false);
  const [otpDetail, setOtpDetail] = useState();
  const [user, setUser] = useState();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputsRef = useRef([]);

  useEffect(() => {
    if (store_name == null || "") {
      navigate("/register");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store_name]);

  // Password visibility
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumberChange = (e) => {
    console.log("", e.target.value);
    const newValue = e.target.value;
    const phoneRegex = /^0[0-9]{0,9}$/;
    if (phoneRegex.test(newValue)) {
      setPhoneNumber(newValue);
      setPayLoad((prevPayload) => ({
        ...prevPayload,
        user_phone: newValue,
      }));
    }
  };

  const [payLoad, setPayLoad] = useState({
    store_name: localStorage.getItem("store_name"),
    package_id: parseInt(localStorage.getItem("package_id")),
    user_phone: phoneNumber,
    user_accepted: true,
    user_password: "",
    user_password_confirm: "",
  });

  //Validate data
  const handleNextStep3 = async () => {
    console.log(payLoad);
    if (!payLoad.user_password || !payLoad.user_password_confirm) {
      Swal.fire({
        title: "ยังไม่ได้กรอกรหัสผ่าน",
        text: "กรุณากรอกรหัสผ่านค่ะ",
        icon: "question",
      });
      return;
    }
    if (payLoad.user_password !== payLoad.user_password_confirm) {
      Swal.fire({
        title: "รหัสผ่านไม่ตรงกัน!",
        text: "กรุณากรอกรหัสผ่านให้ตรงกันค่ะ!",
        icon: "question",
      });
      return;
    }

    if (payLoad.user_password?.length < 6) {
      Swal.fire({
        title: "รหัสผ่านต้องมีความยาวมากกว่าเท่ากับ 6 ตัวค่ะ!",
        text: "กรุณากรอกรหัสผ่านให้ถูกต้องค่ะ",
        icon: "question",
      });
      return;
    }

    if ((!payLoad.user_phone || payLoad.user_phone[0] !== "0") || payLoad.user_phone.length !== 10) {
      Swal.fire({
        title: "เบอร์โทรศัพท์ไม่ถูกต้อง!",
        text: "กรุณากรอกเบอร์โทรศัพท์ใหัถูกต้อง",
        icon: "question",
      });
      return;
    }
    try {
      setLoading(true);
      const response = await Axios.post(`/api/auth/get-otp-register`, payLoad);
      if (response.status === 200) {
        setUser(response.data.user);
        setOtpDetail(response.data.otp);
        setLoading(false);
        setTimeout(() => {
          setOtpPopup(false);
          Swal.fire({
            icon: "warning",
            title: "รหัส OTP หมดอายุ",
            text: "กรุณากดส่ง OTP ใหม่",
          });
        }, otpExpiration);
        setOtpPopup(true);
      }

      setPhoneNumber("");
      setPayLoad({
        store_name: "",
        package_id: "",
        user_phone: "",
        user_accepted: false,
        user_password: "",
        user_password_confirm: "",
      });
    }
    catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  // Verify OTP 
  const handleVerifyOtp = async () => {
    if (!user || !otpDetail || !otp) {
      return;
    }
    try {
      const verifyOtp = await Axios.post(`/api/auth/register`, {
        store_name: user.store_name,
        package_id: user.package_id,
        user_phone: user.user_phone,
        user_password: user.user_password,
        user_accepted: user.user_accepted,
        pin: otp.join(''),
        token: otpDetail?.result?.token,
      });

      if (verifyOtp.status === 201) {
        setOtpPopup(false);
        Swal.fire({
          title: verifyOtp.data.message,
          icon: 'success',
        }).then((result) => {
          if (result.isConfirmed || result.isDismissed) {
            window.location.href = '/';
            window.location.reload();
          }
        });
      }
    } catch (err) {
      console.error("Err while verify otp: ", err);
      Swal.fire({
        'title': err.response.data.message,
        'icon': 'error',
        text: 'กรุณาลองใหม่อีกครั้ง'
      });
    }
  }

  const handleChange = (index, event) => {
    const otpCopy = [...otp];
    otpCopy[index] = event.target.value;

    if (event.target.value.length === 1 && index < 5) {
      inputsRef.current[index + 1].focus();
    }

    setOtp(otpCopy);
  };

  const handleKeyDown = (index, event) => {

    const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];
    if (!event.key.match(/^\d$/) && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <div className="bg-white w-full">
      {/* OTP Popup */}
      {otpPopup ?
        <div className=" w-full h-full absolute z-50">
          <div className=" bg-black/70 w-full">
            <div className="w-full flex justify-center">
              <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-12">
                <div className="relative bg-white px-5 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                  <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                      <div className="font-semibold text-3xl">
                        <p>ยืนยันเบอร์โทรศัพท์</p>
                      </div>
                      <div className="flex flex-row text-sm font-medium text-gray-400">
                        <p>รหัส OTP ได้ส่งไปที่ {user.user_phone}</p>
                      </div>
                      <p className="text-[1.5rem] text-black"> Refno: {otpDetail?.result?.ref}</p>
                      <div className="flex gap-2">
                        <p className="text-[1rem] text-black"> เหลือเวลาอีก:</p>
                        <OtpTimer
                          minutes={14}
                          text=" นาที"
                          ButtonText="Resend"
                        // resend={submit}
                        />
                      </div>
                    </div>
                    <div>
                      <form action="" method="post">
                        <div className="flex flex-col space-y-16">
                          <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs gap-1">
                            {otp.map((value, index) => (
                              <div className="w-20 h-14" key={index}>
                                <input
                                  ref={el => inputsRef.current[index] = el}
                                  className="w-full h-full flex flex-col items-center justify-center text-center px-2 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                  type="text"
                                  maxLength="1"
                                  value={value}
                                  onChange={event => handleChange(index, event)}
                                  onKeyDown={event => handleKeyDown(index, event)}
                                />
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-col space-y-5">
                            <div>
                              {!otp.some(value => value === '') && (
                                <div
                                  onClick={() => handleVerifyOtp()}
                                  className="cursor-pointer flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-[#4C49ED] border-none text-white text-sm shadow-sm"
                                >
                                  ยืนยันเบอร์โทรศัพท์
                                </div>
                              )}
                            </div>
                            <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                              <p>ฉันยังไม่ได้รับ OTP ง่ะ?</p>{' '}
                              <div
                                className="flex flex-row items-center text-[#4C49ED] hover:underline"
                              >
                                ส่ง OTP ใหม่
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        : ""
      }
      {/*  */}
      <nav className="flex h-[4rem] w-full justify-between items-center md:px-10 px-2">
        <Link to="/" className=" cursor-pointer">
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
                  <MdOutlinePhoneAndroid size={100} color="#4C49ED" />
                </div>
                <div className="text-center">
                  <h1 className=" text-[1.6rem] font-bold">
                    กรอกเบอร์โทรศัพท์และรหัสผ่าน
                  </h1>
                  <p className="pt-1 text-sm px-1">
                    เบอร์โทรศัพท์และรหัสผ่านจะช่วยให้คุณสามารถเข้าสู่ระบบหน้าร้านได้
                  </p>
                  <p className="pt-2 text-sm">STEP 3 OF 3</p>
                </div>
              </div>
              {/* Email */}
              <div className="w-full md:px-6 px-10 md:mb-0">
                <p
                  className="block tracking-wide text-gray-600 text-sm mb-2 text-left pl-1"
                >
                  เบอร์โทรศัพท์
                </p>
                <input
                  value={phoneNumber}
                  onChange={
                    handlePhoneNumberChange
                  }
                  className="appearance-none block w-full text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-[#4C49ED] bg-white"
                  id="email"
                  type="number"
                  autoComplete="none"
                  placeholder="09X-XXX-XXXX"
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
                    value={payLoad.user_password}
                    onChange={(e) =>
                      setPayLoad({
                        ...payLoad,
                        user_password: e.target.value,
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
                    value={payLoad.user_password_confirm}
                    onChange={(e) =>
                      setPayLoad({
                        ...payLoad,
                        user_password_confirm: e.target.value,
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
                  className=" bg-[#4C49ED] w-full hover:bg-[#4c49edcf] h-full rounded-md flex items-center justify-center gap-2"
                >
                  {loading ? <span className="loader bg-white"></span>
                    : <><p>ขั้นตอนต่อไป</p><FaArrowRight /></>}
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
