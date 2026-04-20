import React from "react";

const WarningBanner = () => {
  return (
    <div style={styles.banner}>
      <p style={styles.text}>
        ⚠️ This is a student project for educational purposes only. ⚠️ It is not
        affiliated with Coinbase or any financial institution.
      </p>
    </div>
  );
};

const styles = {
  banner: {
    width: "100%",
    backgroundColor: "#f5d27a",
    color: "#5a3b00",
    padding: "12px 16px",
    textAlign: "center",
    borderBottom: "1px solid #f5d27a",
    position: "sticky",
    top: 0,
    zIndex: 9999,
  },
  text: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "700",
  },
};

export default WarningBanner;