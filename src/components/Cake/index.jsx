import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cakeOrdered, cakeRestocked } from "../../features/cake/cakeSlice";
const index = () => {
  const cakeData = useSelector((state) => state.cake);
  const dispatch = useDispatch();
  const doSomething = () => {};
  return (
    <div>
      <div>cake amount- {cakeData.numOfCake}</div>
      <button onClick={() => dispatch(cakeOrdered(4))}>Buy a cake</button>
      <button onClick={() => dispatch(cakeRestocked(10))}>
        restoke a cake
      </button>
    </div>
  );
};

export default index;
