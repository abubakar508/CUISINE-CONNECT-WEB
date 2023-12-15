import React from "react";
//Components
import SectionHeader from "@/components/SectionHeader";
import LowerSection from "@/components/LowerSection";

//constants
import { HeroImage, HeroImage2 } from "@/constants/image";

const page = () => {
  return (
    <div className=" font-montserrat">
      <SectionHeader
        containerStyles=" bg-gradient-to-b from-black to-slate-900 flex-col-reverse md:flex-row-reverse"
        imageUrl={HeroImage}
        imageStyles=" w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
        colorTitle=" Cuisine connect"
        textStyles=""
        subTextStyles=" lg:text-xl text-lg font-medium p-2 font-bold text-slate-400 "
        textContainerStyles=" text-6xl md:w-[700px]"
        title=" new offers"
        subTitle="Cuisine connect serves the needs of all chefs, aspiring cooks/chefs and those who pracitce cooking as a hobby. Ranging from all sorts of easy recipes to hard and time consuming delicacies, all iN Cuisine connect"
        width={100}
        height={100}
        altForImage="hero-1-image"
      />
       <SectionHeader
        containerStyles=" flex-col-reverse md:flex-row"
        imageUrl={HeroImage2}
        imageStyles=" w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
        colorTitle=" Cuisine connect"
        textStyles=""
        subTextStyles=" lg:text-xl text-base font-bold text-slate-400 "
        textContainerStyles=" text-6xl md:w-[700px]"
        title="seeming API integration"
        subTitle="Cuisine connect utlizes a robust application programming interface that soources meals and cuisines from its database with a range of desired definitions"
        width={100}
        height={100}
        altForImage="hero-1-image"
      />
      <SectionHeader
        containerStyles=" flex-col-reverse md:flex-row-reverse"
        imageUrl={HeroImage}
        imageStyles=" w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
        colorTitle=" Cuisine connect"
        textStyles=""
        subTextStyles=" lg:text-xl text-base font-bold text-slate-400 "
        textContainerStyles=" text-6xl md:w-[700px]"
        title="User Interface & User Experience"
        subTitle="A great interface and and experience that caters all round bringing the concept of the best UI and UX"
        width={100}
        height={100}
        altForImage="hero-1-image"
      />

<SectionHeader
        containerStyles=" flex-col-reverse md:flex-row-reverse"
        imageUrl={HeroImage2}
        imageStyles=" w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
        colorTitle=" Cuisine connect"
        textStyles=""
        subTextStyles=" lg:text-xl text-base font-bold text-slate-400"
        textContainerStyles=" text-6xl md:w-[700px]"
        title="learning easy!"
        subTitle="The codebase and ecosystem used in development of the mobile application has been easily explained in the sorurce code found in github"
        width={100}
        height={100}
        altForImage="hero-1-image"
      />
      <LowerSection />
    </div>
  );
};

export default page;
