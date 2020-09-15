import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FunctionComponent = () => {
  const history = useHistory();
  return (
    <>
      <h1> Information Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde aperiam
        ex, iure laudantium labore commodi numquam accusamus. Voluptas,
        reprehenderit incidunt ex, ad numquam commodi quo nesciunt perspiciatis
        laborum molestiae aliquam? Iste quaerat sapiente deleniti numquam unde
        ratione porro libero quos mollitia commodi excepturi possimus aliquam
        expedita beatae, doloribus a illo molestiae facilis ea aperiam ab vel?
        Quos distinctio explicabo sequi!
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        {" "}
        Back to todo list
      </button>
    </>
  );
};
