import React, { useState } from 'react';
const Comp1 = () => {
  const [compState, setCompState] = useState(0);
  return (
    <>
      <p>Comp1 State value is `${compState} Ram`</p>
      <button onClick={() => setCompState(compState + 1)}> Update Comp1</button>
    </>
  );
};
export default Comp1;
