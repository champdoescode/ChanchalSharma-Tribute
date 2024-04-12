import React from "react";
import GridRevers from "./GridRevers";
import NormalGrid from "./NormalGrid";
import Footer from "../HomePage/Footer";
import AllRightsReserved from "../HomePage/AllRightsReserved";

const BiographyPage = () => {
  return (
    <>
      <div className="w-full bg-[#171717] flex justify-center mt-24">
        <div className="w-11/12">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-4 mb-16 gap-16 ">
            <div className="grid-items">
              <img
                className="rounded-3xl"
                src="./images/Biography.jpeg"
                alt=""
              />
            </div>
            <div className="grid-items text-white flex flex-col justify-center w-full">
              <div className="text-5xl italic font-semibold tracking-wider">
                Pichai's Biography
              </div>
              <div className="border-b-2 w-3/12 my-8"></div>
              <div>
                <button className="bg-[#353333] px-12 rounded-md border border-neutral-600 py-2">
                  Know More!
                </button>
              </div>
            </div>
          </div>
          <div className="biography-list-container">
            <NormalGrid
              heading="Early Life and Education:"
              points={[
                "Pichai was born in Madurai, Tamil Nadu, India. His father was an electrical engineer, and his mother was a stenographer.",
                "He grew up in a middle-class household and displayed exceptional academic prowess from an early age.",
                "Pichai earned his Bachelor of Engineering degree in Metallurgical Engineering from the Indian Institute of Technology Kharagpur.",
                "He later pursued a Master of Science degree in Material Sciences and Engineering from Stanford University and further earned an MBA from the Wharton School of the University of Pennsylvania.",
              ]}
              image="./images/education.webp"
            />
            <NormalGrid
              heading="Career at Google:"
              points={[
                "Pichai joined Google in 2004, initially working on the development of the Google Toolbar and other software products.",
                "He played a key role in the development of Google Chrome, which was launched in 2008 and became one of the most popular web browsers globally.",
                "Over the years, Pichai took on increasing responsibilities within Google, overseeing various products and services, including Chrome, Chrome OS, Google Drive, and Gmail.",
                "In 2013, he was appointed as the Senior Vice President of Android, responsible for overseeing Google's mobile operating system",
                "Pichai gained widespread recognition for his leadership and technical acumen, eventually becoming the CEO of Google in August 2015, following the restructuring of Google into a subsidiary of Alphabet Inc.",
              ]}
              image="./images/Google1.jpeg"
            />
            <NormalGrid
              heading="Leadership at Google and Alphabet:"
              points={[
                "As CEO of Google, Pichai led the company through significant developments, including the expansion of its product portfolio, strategic acquisitions, and advancements in artificial intelligence and machine learning.",
                "Under his leadership, Google continued to dominate the search engine market and diversified its revenue streams through initiatives such as Google Cloud, Google Pixel smartphones, and Google Assistant.",
                "Pichai earned his Bachelor of Engineering degree in Metallurgical Engineering from the Indian Institute of Technology Kharagpur.",
                "In December 2019, Pichai became the CEO of Alphabet Inc., Google's parent company, succeeding Larry Page.",
              ]}
              image="./images/Alphabet.jpeg"
              />
            <NormalGrid
              heading="Philanthropy and Personal Life:"
              points={[
                  "Pichai and his wife, Anjali Pichai, have two children. They are known for their philanthropic efforts, including donations to various causes and organizations.",
                  "He has expressed a commitment to promoting diversity and inclusion in the tech industry and has advocated for initiatives to support underrepresented groups in STEM fields.",
                ]}
                image="./images/family.jpeg"
            />
          </div>
        </div>
      </div>
      <Footer quote="'It is important to follow your dreams and heart. Do something that excites you.'" />
      <AllRightsReserved />
    </>
  );
};

export default BiographyPage;
