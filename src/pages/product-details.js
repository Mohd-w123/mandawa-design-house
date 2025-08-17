import BreadCrumb from "@/components/Global/BreadCrumb/BreadCrumb";
import ProductInfo from "@/components/Global/ProductDetail/ProductInfo/ProductInfo";
import MainLayout from "@/Layouts/MainLayout";
import React from "react";

const productDetails = () => {
  return (
    <>
      <BreadCrumb />
      <ProductInfo />
    </>
  );
};
productDetails.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default productDetails;
