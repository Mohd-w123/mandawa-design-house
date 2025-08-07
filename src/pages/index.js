import ConceptOfDrawing from "@/components/Global/HomeLayout/ConceptOfDrawing/ConceptOfDrawing";
import FurnitureDesigning from "@/components/Global/HomeLayout/FurnitureDesigning/FurnitureDesigning";
import Hero from "@/components/Global/HomeLayout/Hero/Hero";
import MandawaHomeImage from "@/components/Global/HomeLayout/MandawaHomeImage/MandawaHomeImage";
import ManufacturingSection from "@/components/Global/HomeLayout/ManufacturingSection/ManufacturingSection";
import OrganizationChart from "@/components/Global/HomeLayout/OrganizationChart/OrganizationChart";
import FurnitureCollection from "@/components/Global/HomeLayout/OurFurnitureCollection/FurnitureCollection";
import OurSetUp from "@/components/Global/HomeLayout/OurSetUp/OurSetUp";
import OurUnits from "@/components/Global/HomeLayout/OurUnits/OurUnits";
import ProductionDrawing from "@/components/Global/HomeLayout/ProductionDrawing/ProductionDrawing";
import VisionMission from "@/components/Global/HomeLayout/VisionMission/VisionMission";
import WoodenMachinery from "@/components/Global/HomeLayout/WoodenMachinery/WoodenMachinery";


export default function Home() {
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
   </>
  );
}
