import MetaData from "@components/MetaData";
import PageTop from "@components/PageTop";
import AnimatedDiv from "@components/FramerMotion/AnimatedDiv";
import { opacityVariant } from "@content/FramerMotionVariants";
import pageMeta from "@content/meta";

export default function About({ about }) {
  return (
    <>
      <MetaData
        title={pageMeta.about.title}
        description={pageMeta.about.description}
        previewImage={pageMeta.about.image}
        keywords={pageMeta.about.keywords}
      />

      <section className="pageTop">
        <PageTop pageTitle="About me"></PageTop>
        <AnimatedDiv
          variants={opacityVariant}
    >
        </AnimatedDiv>
       
      </section>
    </>
  );
}

