import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
    return (
        <div className="mx-auto mt-60 flex justify-center">
              <ClipLoader
                  color={"#574216"}
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