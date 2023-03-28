import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from '../../features/user/userSlice';
const index = () => {
    const usersData = useSelector((state) => state.users);
    const dispatch = useDispatch();
const fetchUserData = async () => {
  console.log("start");
  // await wait(5000);
  dispatch(fetchUsers());
  console.log("end");
};

useEffect(() => {
  fetchUserData();
}, []);
  return (
    <div>
      {usersData.loading === true ? <p>LOADING</p> : null}
      {usersData.error && <p>{usersData.error}</p>}
      {usersData.users.length > 0 ? (
        <>
          {usersData.users.map((user) => (
            <>
              <p>
                {user.id} - {user.name}
              </p>
            </>
          ))}
        </>
      ) : null}
      <button onClick={() => fetchUserData()}>retry</button>
    </div>
  );
}

export default index

const wait = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};