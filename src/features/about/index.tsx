import * as React from "react";

import { SectionsLayout } from "@base/";

import AboutWebSite from "./about-web-site";
import WhatWeDo from "./whatWeDo";
import Heading from "./heading";
import AboutUs from "./about-us";

const About: React.FC = () => (
  <>
    <Heading />
    <SectionsLayout id="about" className="!py-0">
      <WhatWeDo />
      <AboutUs />
      <AboutWebSite />
    </SectionsLayout>
  </>
)

export default About
