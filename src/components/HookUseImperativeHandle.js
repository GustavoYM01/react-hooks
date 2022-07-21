import { useImperativeHandle, useRef } from "react";

import SomeComponent from "./SomeComponent";

const HookeUseImperativeHandle = () => {
  const componentRef = useRef();

  return (
    <div>
      <h2>useImperativeHandle</h2>
      <SomeComponent ref={componentRef} />
      <button onClick={() => componentRef.current.validate()}>Validar</button>
      <hr />
    </div>
  );
};

export default HookeUseImperativeHandle;
