import {
    fromLeftVariant,
    opacityVariant,
  } from "../content/FramerMotionVariants";
  import AnimatedHeading from "./FramerMotion/AnimatedHeading";
  import AnimatedText from "./FramerMotion/AnimatedText";
  
  export default function PageTop({ pageTitle, headingClass, children }) {
    return (
      <div className="w-full flex flex-col gap-3 py-5 select-none mb-10">
        <AnimatedHeading
          variants={fromLeftVariant}
          className={`text-4xl  md:text-5xl font-permanent text-neutral-900 dark:text-neutral-200 ${headingClass}`}
        >
          {pageTitle}
        </AnimatedHeading>
        <AnimatedText
          variants={opacityVariant}
          className="font-medium text-lg text-darkPrimary dark:text-gray-400"
        >
          {children}
        </AnimatedText>
      </div>
    );
  }