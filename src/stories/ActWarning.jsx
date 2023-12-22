import React, { useState } from "react";

export const ActWarning = () => {
  const [showMessage, shouldShowMessage] = useState(false);

  return (
    <>
      <button onClick={() => shouldShowMessage(true)}>Show message</button>
      {showMessage && "Demo message"}
    </>
  );
};
