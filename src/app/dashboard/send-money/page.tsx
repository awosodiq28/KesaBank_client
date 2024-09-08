"use client";

import { useState } from "react";
import styles from "@/styles/Dashboard.module.css";
import Modal from "@/components/Modal";
import { bankList } from "@/helpers/banksList";

const SendMoney = () => {
  const [account_no, setAccount_no] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedBank, setSelectedBank] = useState("First Bank");
  const [trial, setTrial] = useState(0);

  const sendMoney = (e: any) => {
    e.preventDefault();
    if (trial < 1) {
      alert("Account number not found. \nPlease input correct account number");
      setTrial(trial + 1);
    } else {
      // setError('The pin you entered is incorrect');
      setOpenModal(true);
    }
  };

  const checkPin = (e: any) => {
    e.preventDefault();
    if (pin == "771947" && trial > 0) {
      setTrial(trial + 1);
      setError("");
    } else {
      setError("The pin you entered is incorrect");
    }
  };

  return (
    <div className={styles.details}>
      <div className={`${styles.con} ${styles.over}`}>
        <h6 className="tac">SEND MONEY</h6>
        <form onSubmit={sendMoney}>
          <label>
            <p>Account Number:</p>
            <input
              required
              type="number"
              value={account_no}
              onChange={(e) => setAccount_no(e.target.value)}
            />
          </label>
          <label>
            <p>Select Bank:</p>
            <select
              value={selectedBank}
              onChange={(e) => setSelectedBank(e.target.value)}
            >
              {bankList.map((bankName, index) => (
                <option key={index} value={bankName} style={{ color: "black" }}>
                  {bankName}
                </option>
              ))}
            </select>
          </label>
          <label>
            <p>Amount:</p>
            <input
              required
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          {/* <label>
							<p>Pin:</p>
							<input
								required
								type='number'
								value={pin}
								onChange={(e) => setPin(e.target.value)}
							/>
						</label> */}
          <label>
            <p>Note:</p>
            <textarea
              value={note}
              required
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </label>
          <button type="submit" className={styles.btn}>
            Send Money
          </button>
        </form>
      </div>
      <Modal openModal={openModal}>
        <div className={styles.modal_pin}>
          {/* <button className={styles.cancel} onClick={() => setOpenModal(false)}>
            X
          </button> */}
          {trial == 1 ? (
            <div className="">
              <h6
                style={{
                  backgroundColor: "#de9e27",
                  color: "white",
                  paddingLeft: "10px",
                  paddingBlock: "8px",
                  fontSize: "20px",
                }}
              >
                Funds Transfer
              </h6>
              <p style={{ paddingLeft: "10px" }}>
                Please enter the funds transfer COT code for this transfer
              </p>
            </div>
          ) : (
            <div className="">
              <h6
                style={{
                  backgroundColor: "#de9e27",
                  color: "white",
                  paddingLeft: "10px",
                  paddingBlock: "8px",
                  fontSize: "20px",
                }}
              >
                Funds Transfer
              </h6>
              <p style={{ paddingLeft: "10px" }}>Please enter IMF code</p>
            </div>
          )}
          <form
            onSubmit={checkPin}
            className="flex gap-3 items-center"
            style={{
              display: "flex",
              gap: 12,
              alignItems: "baseline",
              paddingInline: "10px",
              marginBottom: "12px",
            }}
          >
            <input
              required
              placeholder="COT Code"
              type="password"
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
                setError("");
              }}
            />
            <button
              type="submit"
              style={{
                paddingInline: "16px",
                paddingBlock: "12px",
                fontSize: "16px",
                color: "white",
                backgroundColor: "#0f80df",
                borderRadius: "4px",
                border: 0,
              }}
            >
              Authenticate
            </button>
          </form>
          {error && (
            <i
              // className={styles.pin_error}
              style={{
                display: "block",
                width: "fitContent",
                color: "red",
                marginLeft: "10px",
              }}
            >
              {error}
            </i>
          )}
          <div
            style={{
              paddingInline: "16px",
              display: "flex",
              marginRight: "10px",
              justifyContent: "end",
              marginBottom: "25px",
            }}
          >
            <button
              onClick={() => {
                setOpenModal(false);
                setError("");
                setPin("");
              }}
              style={{
                paddingInline: "16px",
                paddingBlock: "12px",
                fontSize: "16px",
                color: "white",
                backgroundColor: "#df3b0f",
                borderRadius: "4px",
                border: 0,
              }}
            >
              Cancel funds transfer
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default SendMoney;
