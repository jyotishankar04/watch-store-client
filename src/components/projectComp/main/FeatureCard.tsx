"use client";

import React, { useState } from "react";

interface FeatureProps {
  features: string[];
}
interface TechnicalDataProps {
  technicalData: {
    dimensions: {
      diameter: string;
      length: string;
      thickness: string;
    };
    movement: string;
    case: string;
    strap: string;
    warranty: string;
    dialColor: string;
    waterResistance: string;
    logWidth: string;
    crystal: string;
  };
}
interface PropTypes {
  technicalData: {
    dimensions: {
      diameter: string;
      length: string;
      thickness: string;
    };
    movement: string;
    case: string;
    strap: string;
    warranty: string;
    dialColor: string;
    waterResistance: string;
    logWidth: string;
    crystal: string;
  };
  features: string[];
}

const FeatureCard: React.FC<PropTypes> = ({ technicalData, features }) => {
  const [open, setOpen] = useState(0);

  return (
    <div className="w-full  bg-gray-100 pb-8 flex justify-center items-center">
      <div className="container m-auto flex flex-col justify-center items-center">
        <div className="grid grid-cols-2 gap-10 text-xl">
          <button
            onClick={() => setOpen(0)}
            className={` p-4 w-full duration-300 transition-transform uppercase`}
          >
            Features
            <div
              className={`pb-1  mt-4 bg-black duration-300 transition-transform  ${
                open == 0 ? "w-full" : "w-0"
              }`}
            ></div>
          </button>
          <button
            onClick={() => setOpen(1)}
            className={`duration-300 p-4 w-full uppercase `}
          >
            Technical Data
            <div
              className={`pb-1  mt-4 bg-black duration-300 transition-transform ${
                open == 1 ? "w-full" : "w-0"
              }`}
            ></div>
          </button>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          {open == 0 ? (
            <FeatureList features={features} />
          ) : (
            <TechnicalData technicalData={technicalData} />
          )}
        </div>
      </div>
    </div>
  );
};

const FeatureList: React.FC<FeatureProps> = ({ features }) => {
  return (
    <div className="w-full h-full grid grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <FeatureCardDiv content={feature} key={index} />
      ))}
    </div>
  );
};

const TechnicalData: React.FC<TechnicalDataProps> = ({ technicalData }) => {
  return (
    <div className=" w-6/12 m-auto h-full grid grid-cols-2 justify-center items-center">
      <div className="flex justify-start flex-col">
        <h1 className="text-2xl font-bold underline my-5">Dimensions</h1>
        <div className="flex flex-col gap-2 ml-5">
          <p className="text-xl ">
            Diameter : {technicalData.dimensions.diameter}
          </p>
          <p className="text-xl ">Length : {technicalData.dimensions.length}</p>
          <p className="text-xl ">
            Thickness : {technicalData.dimensions.thickness}
          </p>
        </div>
        <h1 className="text-2xl font-bold underline my-5">Movement</h1>
        <div className="flex flex-col gap-2 ml-5">
          <p className="text-xl ">{technicalData.movement}</p>
        </div>
      </div>
      <div className="flex justify-start flex-col gap-4 uppercase text-xl">
        <p>Case : {technicalData.case}</p>
        <p>Strap : {technicalData.strap}</p>
        <p>Warranty : {technicalData.warranty}</p>
        <p>Dial Color : {technicalData.dialColor}</p>
        <p>Water Resistance : {technicalData.waterResistance}</p>
        <p>Log Width : {technicalData.logWidth}</p>
        <p>Crystal : {technicalData.crystal}</p>
      </div>
    </div>
  );
};
const FeatureCardDiv: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <h1 className="w-full flex justify-center items-center text-xl hover:-translate-y-2 duration-300 p-3 bg-white rounded-lg ">
      {content}
    </h1>
  );
};
export default FeatureCard;
