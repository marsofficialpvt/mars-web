import "./formfill.css"
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import paperPlane from "../assets/paper-plane.png";
import { IoPaperPlane } from "react-icons/io5";
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
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 px-10 pb-10 relative z-10">
            <div className="1stgrid">

                <div className="flex ">
                <div className="text-4xl justify-start md:block">
                    <h1 className="text-gray-300">Contact</h1>
                </div>
            </div>
            <div className="text-base mt-4 text-white flex justify-start">
                <p className="font-normal ">Ready to transform your business with cutting-edge ERP and CRM solutions? Our team is here to help you every step of the way.</p>
            </div>

            <div className="font-normal flex flex-col gap-10 mt-5">
                {/* Email */}
                <div className="flex items-start gap-6">
                    <div className="w-13 h-13 rounded-xl bg-[rgb(50,6,6)] flex items-center justify-center">
                        <FaEnvelope className="text-2xl text-[rgb(239,164,164)]" />
                    </div>

                    <div>
                    <h2 className="flex items-start text-xl font-bold text-white">
                        Email
                    </h2>

                    <p className="text-base text-gray-300">
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

                    <p className="text-base text-gray-300">
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
                        <p className="flex items-start text-sm text-gray-300">
                            Cloud-Based Solutions
                        </p>
                        <p className="flex items-start text-sm text-gray-300">
                            Accessible Anywhere, Anytime
                        </p>
                    </div>
                </div>
            </div>

            </div>
            <div className="2grid text-base font-normal">
                <div className="border border-[rgba(255,255,255,0.12)] bg-[rgba(0,0,0,0.25)] backdrop-blur-xl rounded-3xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.25)]">
                    <div>
                        <form className="space-y-6">

                            <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="flex items-start block mb-2 text-white font-medium">
                                Full Name <p className="text-[rgb(255,0,0)]">*</p>
                                </label>

                                <input type="text" placeholder="your name" className="w-full p-4 rounded-xl bg-[rgba(50,6,6,0.4)] border border-[rgba(255,255,255,0.15)] text-white outline-none"/>
                            </div>
                            <div>
                                <label className="flex items-start block mb-2 text-white font-medium">
                                Email Address <p className="text-[rgb(255,0,0)]">*</p>
                                </label>
                                <input type="email" name="email" autoComplete="email" placeholder="name@gmail.com" className="w-full p-4 rounded-xl bg-[rgba(50,6,6,0.4)] border border-[rgba(255,255,255,0.15)] text-white outline-none"/>
                            </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="flex items-start block mb-2 text-white font-medium">
                                Company Name
                                </label>
                                <input type="text" placeholder="Your Company" className="w-full p-4 rounded-xl bg-[rgba(50,6,6,0.4)] border border-[rgba(255,255,255,0.15)] text-white outline-none"/>
                            </div>
                            <div>
                                <label className="flex items-start block mb-2 text-white font-medium">
                                Phone Number
                                </label>

                                <input type="text" placeholder="+91" className="w-full p-4 rounded-xl bg-[rgba(50,6,6,0.4)] border border-[rgba(255,255,255,0.15)] text-white outline-none"/>
                            </div>
                            </div>

                            <div>
                            <label className="flex items-start block mb-2 text-white font-medium">
                                Service Interested In *
                            </label>

                            <select className="w-full p-4 rounded-xl bg-[rgba(50,6,6,0.4)] border border-[rgba(255,255,255,0.15)] text-white outline-none">
                                <option>ERP Development</option>
                                <option>CRM Solutions</option>
                                <option>Web Development</option>
                                <option>Mobile App Development</option>
                            </select>
                            </div>

                            <div>
                            <label className="flex items-start block mb-2 text-white font-medium">
                                Project Details *
                            </label>
                            <textarea rows="6" placeholder="Tell us about your project..." className="w-full p-4 rounded-xl bg-[rgba(50,6,6,0.4)] border border-[rgba(255,255,255,0.15)] text-white outline-none resize-none"/>
                            </div>
                            <button type="submit" className="w-full py-5 rounded-3xl bg-gradient-to-r from-[rgb(215,72,72)] via-[rgb(175,86,86)] to-[rgb(196,99,57)] text-white text-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(255,120,120,0.2)]">        
                                <IoPaperPlane className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                Contact Us
                            </button>
                        </form>
                        <p className="text-sm text-[rgb(171,171,171)] mb-5 font-light">We'll get back to you within 24 hours. Your information is secure and will never be shared.</p>
                    </div>
                </div>

                
{/*---------------------------------------------------------------------------------------------*/}
            </div>
        </div>
    </div>
  );
}

export default Formfill;