import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { icecreamOrdered, icecreamRestocked } from '../../features/icecream/icecreamSlice';
const index = () => {
    const icecreamData = useSelector((state) => state.icecream);
    const dispatch = useDispatch();

  return (
    <div>
      <div>Icecream amount- {icecreamData.numOfIcecream}</div>
      <button onClick={() => dispatch(icecreamOrdered(4))}>
        Buy a icecream
      </button>
      <button onClick={() => dispatch(icecreamRestocked(10))}>
        restoke a icecream
      </button>
    </div>
  );
}

export default index