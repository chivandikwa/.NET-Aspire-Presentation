import React from "react";
import { Image } from "cloudinary-react";

const cloudName = "dfuprvex4";

export const AspireDashboard: React.FunctionComponent = () => {
  return <Image cloudName={cloudName} publicId={`aspire`} width="700" />;
};

export const AspireBanner: React.FunctionComponent = () => {
  return <Image cloudName={cloudName} publicId={`banner`} />;
};

export const Demo: React.FunctionComponent = () => {
  return <Image cloudName={cloudName} publicId={`demo`} width="800" />;
};


export const Rolling: React.FunctionComponent = () => {
  return <Image cloudName={cloudName} publicId={`rolling`} width="300" />;
};
