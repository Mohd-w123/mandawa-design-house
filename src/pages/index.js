import ConceptOfDrawing from "@/components/Global/HomePage/ConceptOfDrawing/ConceptOfDrawing";
import DesigningSoftware from "@/components/Global/HomePage/DesigningSoftware/DesigningSoftware";
import FurnitureDesigning from "@/components/Global/HomePage/FurnitureDesigning/FurnitureDesigning";
import Hero from "@/components/Global/HomePage/Hero/Hero";
import MandawaHomeImage from "@/components/Global/HomePage/MandawaHomeImage/MandawaHomeImage";
import ManufacturingSection from "@/components/Global/HomePage/ManufacturingSection/ManufacturingSection";
import OrganizationChart from "@/components/Global/HomePage/OrganizationChart/OrganizationChart";
import OurClients from "@/components/Global/HomePage/OurClients/OurClients";
import FurnitureCollection from "@/components/Global/HomePage/OurFurnitureCollection/FurnitureCollection";
import OurSetUp from "@/components/Global/HomePage/OurSetUp/OurSetUp";
import OurUnits from "@/components/Global/HomePage/OurUnits/OurUnits";
import ProductionDrawing from "@/components/Global/HomePage/ProductionDrawing/ProductionDrawing";
import VisionMission from "@/components/Global/HomePage/VisionMission/VisionMission";
import WhyChooseUs from "@/components/Global/HomePage/WhyChooseUs/WhyChooseUs";
import WoodenMachinery from "@/components/Global/HomePage/WoodenMachinery/WoodenMachinery";

import MainLayout from "@/Layouts/MainLayout";


 function Home() {
  return (
   <>
   <Hero/>
   <MandawaHomeImage/>
    <VisionMission/>
   <FurnitureCollection/>
   <OrganizationChart/>
   <OurUnits/>
    <ManufacturingSection/>
    <WoodenMachinery/>
   <OurSetUp/>
   <FurnitureDesigning/>
   <ConceptOfDrawing/>
   <ProductionDrawing/>
   <DesigningSoftware/>
   <OurClients/>
   <WhyChooseUs/>   
   </>
  );
}


Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};


export default Home