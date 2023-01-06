import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "../../styles/MainContainer/MainContainer.module.css";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className={styles.page}>{children}</div>
      </div>

      <Footer />
    </>
  );
};
export default MainContainer;
