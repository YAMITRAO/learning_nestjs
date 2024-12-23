import * as React from "react";
import Button from "@mui/material/Button";

const Test = () => {
  return (
    <>
      <div className="pt-10">
        <Button
          disabled
          onClick={() => {
            console.log("Button is clicked...");
          }}
        >
          Hello
        </Button>
      </div>
    </>
  );
};

export default Test;
