
import Image from "next/image";
import {
  FadeContainer,
  headingFromLeft,
  opacityVariant,
  popUp,
} from "@content/FramerMotionVariants";
// import { homeProfileImage } from "@utils/utils"; // not created yet
import homeProfileImage from "public/Logoi.png"
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import Ripples from "react-ripples";
import Metadata from "@components/MetaData";
import pageMeta from "@content/meta";
import { getPinnedSkills } from "@lib/dataFetch";
import SkillSection from "@components/Home/SkillsSection";
import AnimatedHeading from "@components/FramerMotion/AnimatedHeading";
import Contact from "@components/Contact";

export default function Home({ blogs, skills }) {
  return (
    <>
      <Metadata
        description={pageMeta.home.description}
        previewImage={pageMeta.home.image}
        keywords={pageMeta.home.keywords}
      />

      {/* Following is the new Code */}
      <div className="relative dark:bg-darkPrimary dark:text-gray-100 max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl mx-auto">
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={FadeContainer}
          viewport={{ once: true }}
          className="grid place-content-center py-20  min-h-screen"
        >
          <div className="w-full relative mx-auto flex flex-col items-center gap-10">
            <motion.div
              variants={popUp}
              className="relative w-44 h-44 xs:w-52 xs:h-52 flex justify-center items-center rounded-full before:absolute before:inset-0 before:border-t-4 before:border-b-4 before:border-black before:dark:border-white before:rounded-full before:animate-photo-spin"
            >
              <Image
                src={homeProfileImage}
                // className="rounded-full shadow filter saturate-0"
                width={800}
                height={800}
                alt="cover Profile Image"
                quality={100}
                priority={true}
              />
            </motion.div>

            <div className="w-full flex flex-col p-5 gap-3 select-none text-center ">
              <div className="flex flex-col gap-1">
                <motion.h1
                  variants={opacityVariant}
                  className="text-5xl lg:text-6xl font-bold font-permanent"
                >
                  Jason Frederick
                </motion.h1>
                <div className="flex flex-row justify-center items-center gap-2">
                <motion.p
                  variants={opacityVariant}
                  className="font-medium text-xs bg-darkRed rounded-md px-2 md:text-sm lg:text-lg text-white">
                  React/Native Developer
                </motion.p>
                <motion.p
                  variants={opacityVariant}
                  className="font-medium text-xs bg-darkBlue rounded-md px-2 md:text-sm lg:text-lg text-white">
                   Django Developer
                </motion.p>
                </div>
                
              </div>

              <motion.p
                variants={opacityVariant}
                className=" text-darkPrimary dark:text-gray-300 font-medium text-sm md:text-base text-center"
              >
                I am currently perusing my Bachelor Degree in Computer Science.
                I can code in Python, Java, Javascript, etc.
              </motion.p>
            </div>

            <motion.div className="rounded-md overflow-hidden" variants={popUp}>
              <Ripples className="w-full" color="rgba(0, 0, 0, 0.5)">
                <button
                  className="flex items-center gap-2 px-5 py-2 border-3 rounded-md border-gray-100 dark:border-gray-400 select-none  hover:bg-gray-100 dark:hover:bg-neutral-800 outline-none"
                  onClick={() => window.open("/resume")}
                >
                  <FiDownload />
                  <p>Resume</p>
                </button>
              </Ripples>
            </motion.div>
          </div>
        </motion.section>
        <SkillSection skills={skills} />
      <Contact />
      </div>

    </>
  );
}

export async function getStaticProps() {
  const skills = getPinnedSkills();
  return {
    props: { skills },
  };
}

export function HomeHeading({ title }) {
  return (
    <AnimatedHeading
      className="w-full font-bold text-3xl text-left my-2 font-inter"
      variants={headingFromLeft}
    >
      {title}
    </AnimatedHeading>
  );
}