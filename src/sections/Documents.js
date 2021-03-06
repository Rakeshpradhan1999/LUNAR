import React from "react";
import Title from "../components/title";
import Doge from "../assets/images/doge.png";
const Documents = () => {
  return (
    <section className="document-bg py-14 md:py-20">
      <div className="container">
        <Title backtext="Documents" title="Our Documents" />
        <div className="grid md:grid-cols-2  mt-20 items-center">
          <div className="mb-20 md:mb-0">
            <img src={Doge} alt="" />
          </div>
          <div>
            <button className="bg-primary mx-auto mb-4 md:mb-10 block text-black font-bold py-2.5  px-10 rounded-md text-xl md:text-3xl">
              {" "}
              White Paper
            </button>
            <button className="mx-auto block capitalize bg-primary text-black font-bold py-2.5  px-10 rounded-md text-xl md:text-3xl">
              {" "}
              Audit (in progress)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;
