import React from "react";
import SimpleComponent from "../hocExercises/simpleComponent";
import withFunctions from "./withFunctions";

const HocWithFunctions = () => {
    const ComponentWithHoc = withFunctions(SimpleComponent);

    return <ComponentWithHoc />;
};

export default HocWithFunctions;
