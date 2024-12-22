import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
    return (
        <div>
              <ClipLoader
                  color={"#FFFF00"}
                    loading={true}
                    // cssOverride={override}
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
              />
        </div>
    );
};

export default Spinner;