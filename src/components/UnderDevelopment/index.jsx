import './index.css';
function UnderDevelopment() {
  return (
    <div className="fixed z-50 flex items-center justify-center w-full mt-12 bg-[rgb(76,73,237)]">
        <h1 className="h-[1rem]  moving-text  py-[2rem] pb-12 w-full text-center text-lg font-bold text-white">
            เว็บไซต์นี้อยู่ระหว่างการพัฒนา
        </h1>
        <h1 className="h-[1rem]  moving-text  py-[2rem] pb-12 w-full text-center text-lg font-bold text-white">
            ขออภัยในความไม่สะดวก
        </h1>
    </div>
  )
}

export default UnderDevelopment;