import React, { useState } from 'react';
const Comp2 = () => {
  const [compState, setCompState] = useState(0);
  return (
    <>
      <p>Comp2 State value is `${compState}`</p>
      <button onClick={() => setCompState(compState + 1)}> Update Comp2</button>
    </>
  );
};
export default Comp2;
