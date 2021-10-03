import styles from "./SuccessPage.module.css";
import flightIcon2 from "./images/flights.jpeg";

const Success = () => {
  return (
    <div className={styles.success}>
      <h1 style={{ color: "black" }}>Thank You !</h1>
      <h2>Your Booking has been Confirmed</h2>
      <h2>Have a Safe and Happy Journey</h2>
      <img height="150px" src={flightIcon2} alt="" />
    </div>
  );
};
export { Success };
