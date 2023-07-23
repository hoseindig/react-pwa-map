import { useSelector, useDispatch } from "react-redux";
// import { counteActions } from "../store";
const MainPage = () => {
  // const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  // const toggle = useSelector((state) => state.toggle);
  const appData = useSelector((state) => state.appData);
  debugger;
  // console.log(counter);
  return (
    <>
      <h1>Main page</h1>
      {/* <p>{counter && counter}</p> */}
      <p>{appData && appData.username}</p>
    </>
  );
};

export default MainPage;
