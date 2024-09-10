"use client";

import { useState } from "react";
import styles from "@/styles/Dashboard.module.css";
import Modal from "@/components/Modal";
import { bankList } from "@/helpers/banksList";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const SendMoney = () => {
  const [account_no, setAccount_no] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedBank, setSelectedBank] = useState("First Bank");
  const [trial, setTrial] = useState(0);
  const [isLoading, setIsloading] = useState(false);

  const sendMoney = (e: any) => {
    setIsloading(true);
    e.preventDefault();
    setTimeout(whatever, 1);

    setIsloading(false);
  };

  function whatever() {
    if (trial < 1) {
      alert("Account number not found. \nPlease input correct account number");
      setTrial(1);
    } else {
      // setError('The pin you entered is incorrect');
      setOpenModal(true);
    }
  }

  const checkPin = (e: any) => {
    setIsloading(true);
    e.preventDefault();
    setTimeout(pinnnn, 1);
    setIsloading(false);
  };

  function pinnnn() {
    if (pin == "771947" && trial == 1) {
      setTrial(trial + 1);
      setError("");
      setPin("");
    } else if (pin == "USA77541" && trial == 2) {
      setOpenModal(false);
      alert(
        "Transaction failed \ncontact customer care - customercare@countycu.com"
      );
    } else {
      setError("The Code you entered is incorrect.");
    }
  }

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
          <Button
            type="submit"
            className="max-w-40 mx-auto block mb-4 bg-blue-950"
            disabled={isLoading}
          >
            Send Money
          </Button>
        </form>
      </div>
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="">
          {trial == 1 ? (
            <DialogHeader>
              <DialogTitle>Funds Transfer</DialogTitle>
              <DialogDescription>
                Please enter the funds transfer COT code for this transfer
              </DialogDescription>
            </DialogHeader>
          ) : (
            <DialogHeader>
              <DialogTitle>Funds Transfer</DialogTitle>
              <DialogDescription>Please enter IMF code</DialogDescription>
            </DialogHeader>
          )}
          <div>
            {/* <button className={styles.cancel} onClick={() => setOpenModal(false)}>
            X
          </button> */}
            <form
              onSubmit={checkPin}
              className="flex gap-3 items-center w"
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
            {error && <i className="mb-4 block text-red-800 ml-2.5">{error}</i>}
            {trial == 1 ? (
              <p className="mb-4 text-teal-800 ml-2.5">
                Don't have COT code? Please contact us via
                customercare@countycu.com
              </p>
            ) : (
              <p className="mb-4 text-teal-800 ml-2.5">
                Don't have IMF code? Please contact us via
                customercare@countycu.com
              </p>
            )}

            {/* <div
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
                  setTrial(1);
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
            </div> */}
          </div>
          <DialogFooter>
            <button
              onClick={() => {
                setOpenModal(false);
                setTrial(1);
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
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default SendMoney;
