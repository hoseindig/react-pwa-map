import style from "../style/MobileTabBar.module.scss";
const MobileTabBar = () => {
  return (
    <>
      <ul className={style.mainBox}>
        <li className={style.active}>item1</li>
        <li>item2</li>
        <li>item3</li>
      </ul>
    </>
  );
};

export default MobileTabBar;
