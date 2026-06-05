import "./formfill.css"
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import paperPlane from "../assets/paper-plane.png";
function Formfill() {
  return (
    <div className="relative min-h-screen bg-[rgba(82,0,0,0.77)] overflow-hidden">

        {/* Gradient Patch 1 */}
        <div
            className="absolute top-20 left-20 w-100 h-100 rounded-full
                    bg-gradient-to-r from-[rgb(255,143,143)] to-[rgb(253,207,207)]
                    blur-3xl opacity-20 float-blob"
        ></div>

        {/* Gradient Patch 2 */}
        <div
            className="absolute bottom-20 right-20 w-80 h-80 rounded-full
                    bg-gradient-to-r from-pink-500 to-orange-500
                    blur-3xl opacity-30 float-blob-2"
        ></div>
        <div 
            className="absolute top-1/2 left-10 w-96 h-96 rounded-full
                        bg-gradient-to-r from-[rgb(255,143,143)] to-[rgb(253,207,207)]
                        blur-3xl opacity-15 float-blob-3"
        ></div>
        <div
            className="absolute top-10 right-1/3 w-80 h-80 rounded-full
                        bg-gradient-to-r from-pink-500 to-orange-500
                        blur-3xl opacity-20 float-blob-4"
        ></div>
        <div
            className="absolute top-1/3 right-10 w-72 h-72 rounded-full
                        bg-gradient-to-r from-[rgb(255,143,143)] to-[rgb(253,207,207)]
                        blur-3xl opacity-20 float-blob-fast"
        ></div>
        {/* Content */}
        <div className="relative z-10 text-white p-10">
            <h1 className="text-6xl font-bold">
                Let's Build Something Amazing
            </h1>

            <div className="mt-1 p-1 rounded-lg">
                <p className="text-lg text-[rgb(196,196,196)]">
                Schedule a consultation with our experts to discuss your project requirements
                </p>
            </div>
        </div>
        <div className="m-3 p-2 ">
            <div className="flex ">
                <div className="text-4xl justify-start md:block">
                    <h1>Contact</h1>
                </div>
            </div>
            <div className="text-base mt-4 text-white flex justify-start">
                <p>Ready to transform your business with cutting-edge ERP and CRM solutions? Our team is here to help you every step of the way.</p>
            </div>

            <div className="flex flex-col gap-10 mt-5">

                {/* Email */}
                <div className="flex items-start gap-6">
                    <div className="w-13 h-13 rounded-xl bg-[rgb(50,6,6)] flex items-center justify-center">
                        <FaEnvelope className="text-2xl text-[rgb(239,164,164)]" />
                    </div>

                    <div>
                    <h2 className="flex items-start text-xl font-bold text-white">
                        Email
                    </h2>

                    <p className="text-base text-red-500">
                        Mars.official.pvt@gmail.com
                    </p>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-6">
                    <div className="w-13 h-13 rounded-xl bg-[rgb(50,6,6)] flex items-center justify-center">
                        <FaPhoneAlt className="text-2xl text-[rgb(239,164,164)]" />
                    </div>

                    <div>
                    <h2 className="flex items-start text-xl font-bold text-white">
                        Phone
                    </h2>

                    <p className="text-base text-red-500">
                        +91 6374356433
                    </p>
                    </div>
                </div>
                {/*location*/}
                <div className="flex items-start gap-6">
                    <div className="w-13 h-13 rounded-xl bg-[rgb(50,6,6)] flex items-center justify-center">
                        <IoLocationSharp className="text-3xl text-[rgb(239,164,164)]" />
                    </div>
                    <div>
                        <h2 className="flex items-start text-xl font-bold text-white bt-(-2)">
                            Service Model
                        </h2>
                        <p className="flex items-start text-sm text-red-500">
                            Cloud-Based Solutions
                        </p>
                        <p className="flex items-start text-sm text-gray-300">
                            Accessible Anywhere, Anytime
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="m-3">
            <button className="w-[100%] py-5 rounded-3xl bg-gradient-to-r from-[rgb(215,72,72)] via-[rgb(132, 54, 54)] to-[rgb(196,99,57)] text-white text-xl font-semibold flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(218,165,136,0.81))] hover:scale-[1.01] transition-all duration-300">
                <img src={paperPlane} alt="plane" />
                contact us
            </button>
        </div>
        <p className="text-sm text-[rgb(171,171,171)] mb-5 font-light">We'll get back to you within 24 hours. Your information is secure and will never be shared.</p>
    </div>
  );
}

export default Formfill;