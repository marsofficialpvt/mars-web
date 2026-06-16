import { FaInstagram, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Foter () {
    return (
        <footer className="bg-black text-white p-8">
            <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                {/* Left Section */}
                <div className="flex-1">
                <h1 className="text-4xl font-bold">
                    Multi Architecture & Research Solutions
                </h1>
                <p className="text-blue-500 text-2xl mt-4">MARS</p>

                <p className="text-gray-300 mt-4 max-w-md">
                    Building next-generation ERP and CRM solutions with Flutter.
                    Empowering educational institutions to scale and succeed.
                </p>
                </div>

                {/* Services */}
                <div>
                <h2 className="font-bold text-xl mb-4">Services</h2>

                <div className="space-y-2 text-gray-300">
                    <a href="#"><p className="hover:text-blue-500">Flutter Development</p></a>
                    <a href="#"><p className="hover:text-blue-500">School ERP & CRM</p></a>
                    <a href="#"><p className="hover:text-blue-500">Enterprise Solutions</p></a>
                    <a href="#"><p className="hover:text-blue-500">Custom CRM</p></a>
                </div>
                </div>

                {/* Company */}
                <div>
                <h2 className="font-bold text-xl mb-4">Company</h2>

                <div className="space-y-2 text-gray-300">
                    <a href="#"><p className="hover:text-blue-500">About Us</p></a>
                    <a href="#"><p className="hover:text-blue-500">Case Studies</p></a>
                    <a href="#"><p className="hover:text-blue-500">Careers</p></a>
                    <a href="#"><p className="hover:text-blue-500">Contact</p></a>
                </div>
                </div>

                {/* Connect */}
                <div>
                    <h2 className="font-bold text-xl mb-4">Connect</h2>
                    <div className="flex flex-row gap-6 md:ml-auto">
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                            <div className="w-10 h-10 bg-[rgb(42,42,42)] flex items-center justify-center group hover:bg-[rgba(253,121,255,0.25)] transition duration-300 rounded-md hover:scale-110">
                                    <FaInstagram className="text-2xl text-gray-500 group-hover:text-pink-500 transition duration-300 " />
                            </div>
                        </a>
                        <a href="#">
                            <div className="w-10 h-10 bg-[rgb(42,42,42)] flex items-center justify-center group hover:bg-[rgba(255,121,121,0.25)] transition duration-300 rounded-md hover:scale-110">  
                                    <MdEmail className="text-2xl text-gray-500 group-hover:text-red-500 transition duration-300 " />
                            </div>
                        </a>
                        <a href="#">
                            <div className="w-10 h-10 bg-[rgb(42,42,42)] flex items-center justify-center group hover:bg-[rgba(132,255,121,0.25)] transition duration-300 rounded-md hover:scale-110">
                                    <FaPhone className="text-xl text-gray-500 group-hover:text-green-500 transition duration-300 " />
                            </div>
                        </a>
                        </div>
                    <div className="space-y-2 text-gray-300">
                        <p>@mars.innovate</p>
                        <p>mars.official.pvt@gmail.com</p>
                    </div>
                </div>

            </div>
            <hr className="border-gray-700 my-6" />
                <div className="flex flex-col md:flex-row gap-6">
                    <div>
                        <p>
                            © 2026 Multi Architecture & Research Solutions (MARS).
                            All rights reserved.
                        </p>
                    </div>
                    <div className="flex flex-row gap-6 md:ml-auto">
                        <div>
                            <a href="#"><p className="hover:text-blue-500">Privacy Policy</p></a>
                        </div>
                        <div>
                            <a href="#"><p className="hover:text-blue-500">Terms of Service</p></a>
                        </div>
                        <div>
                            <a href="#"><p className="hover:text-blue-500">Cookie Policy</p></a>
                        </div>
                    </div>
                </div>
            </footer>
    )
}
export default Foter