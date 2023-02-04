import React from "react";

interface headingProp {
  lable: string;
}

const Heading = (props: headingProp) => {
  return <h3>{props.lable}</h3>;
};

export default Heading;
