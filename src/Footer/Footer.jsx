import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaDribbbleSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-24 mx-5 my-4">
      <div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex  flex-col gap-5">
            <div>
              <h1 className="text-1xl md:text-2xl archivo logo font-semibold text-green-500">Sales<span className="text-white">Insight</span><span className="text-green-500">Pro</span></h1>
            </div>
            <div className="flex gap-2">
              <FaSquareXTwitter className="text-green-500 text-3xl cursor-pointer" />
              <FaFacebookSquare className="text-green-500 text-3xl cursor-pointer" />
              <FaLinkedin className="text-green-500 text-3xl cursor-pointer" />
              <FaDribbbleSquare className="text-green-500 text-3xl cursor-pointer" />
              <FaYoutubeSquare className="text-green-500 text-3xl cursor-pointer" />
            </div>
            <div>
              <p className="text-white">Join our newsletter to stay up to date with all future Releases.</p>
            </div>
            <div className=" py-2 rounded-lg  flex  flex-col lg:flex-row gap-3 ">
              <input type="text" placeholder="Enter your Mail" className="input" />
              <button type="submit" className="bg-green-500 px-4 py-1 rounded-lg">Subscribe</button>
            </div>
            <div className="flex text-white gap-1 my-2 flex-col text-xs  lg:text-sm lg:flex-row ">
              <p>By subscribing you confirm that you’ve read and agree to our</p>
              <p className="text-green-500 underline  cursor-pointer">Terms & Conditions.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 lg:gap-x-3 grid-cols-1 gap-y-10">
            <div className="flex  flex-col gap-1">
              <div>
                <p className="text-green-500 text-xl archivo">PAGES</p>
              </div>
              <div className="text-white text-sm  flex flex-col gap-3 lg:gap-1">
                <p className="cursor-pointer hover:text-green-600  transition-colors delay-75  ease-in duration-7">Home</p>
                <p className="cursor-pointer hover:text-green-600  transition-colors delay-75  ease-in duration-7">Features</p>
                <p className="cursor-pointer hover:text-green-600  transition-colors delay-75  ease-in duration-7">Pricing</p>
                <p className="cursor-pointer hover:text-green-600  transition-colors delay-75  ease-in duration-7">Blog</p>
                <p className="cursor-pointer hover:text-green-600  transition-colors delay-75  ease-in duration-7">Contact</p>
                <p className="cursor-pointer hover:text-green-600  transition-colors delay-75  ease-in duration-7">Book Demo</p>
              </div>
            </div>
            <div className="flex  flex-col gap-1">
              <div>
                <p className="text-green-500 text-xl archivo">CMS PAGES</p>
              </div>
              <div className="text-white text-sm  flex flex-col gap-3 lg:gap-1">
                <p className="cursor-pointer hover:text-green-600  transition-colors delay-75  ease-in duration-7">Blog Single</p>
                <p className="cursor-pointer hover:text-green-600  transition-colors delay-75  ease-in duration-7">Blog Categories</p>
                <p className="cursor-pointer hover:text-green-600  transition-colors delay-75  ease-in duration-7">Team Member Single</p>
                <p className="cursor-pointer hover:text-green-600  transition-colors delay-75  ease-in duration-7">Job Listing Single</p>
                <p className="cursor-pointer hover:text-green-600  transition-colors delay-75  ease-in duration-7">Product Single</p>
                <p className="cursor-pointer hover:text-green-600  transition-colors delay-75  ease-in duration-7">Product Categories</p>
              </div>
            </div>
            <div className="flex  flex-col gap-1">
              <div>
                <p className="text-green-500 text-xl archivo">ADMIN PAGES</p>
              </div>
              <div className="text-white text-sm  flex flex-col gap-3 lg:gap-1">
                <p className="cursor-pointer hover:text-green-600  transition-colors delay-75  ease-in duration-7">Instructions</p>
                <p className="cursor-pointer hover:text-green-600  transition-colors delay-75  ease-in duration-7">Style Guide</p>
                <p className="cursor-pointer hover:text-green-600  transition-colors delay-75  ease-in duration-7">Licenses</p>
                <p className="cursor-pointer hover:text-green-600  transition-colors delay-75  ease-in duration-7">Changelog</p>
                <p className="cursor-pointer hover:text-green-600  transition-colors delay-75  ease-in duration-7">Buy Template</p>
              </div>
            </div>

          </div>
        </div>

        <div>
          <p className="h-[2px] light my-5 w-full"></p>
          <div className="flex justify-between flex-col lg:flex-row gap-1">
            <div>
              <p className="text-white">© 2024 SalesInsightPro. All rights reserved.</p>
            </div>
            <div className="flex gap-2">
              <p className="text-green-500  underline cursor-pointer">Privacy Policy</p>
              <p className="text-green-500  underline cursor-pointer">Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer