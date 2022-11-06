import "./MyPayment.styles.css";

function MyPayment() {
  return (
    <div className="pay">
      <div className="lbox">
        <h3>PAYMENT NAVIGATION</h3>
        <p className="invoice">INVOICES</p>
        <p className="bnk">BANK DETAILS</p>
      </div>
      <div className="mbox">
        <p>Payment Date : Amount Paid :₹3150</p>
        <p>Payment Made for Project</p>
        <p>K10 Maths Text Book Solution</p>
        <p>K12 Maths Text Book Solution</p>
      </div>
      <div className="rbox">
        <h3>LifeTime Earnings</h3>
        <p>₹3150</p>
        <h3>This Month Earnings</h3>
        <p>₹0</p>
      </div>
    </div>
  );
}
export default MyPayment;
