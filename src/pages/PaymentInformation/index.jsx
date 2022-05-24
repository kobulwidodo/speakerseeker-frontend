import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import gojek from "../../assets/images/gojek.svg";
import Button from "../../components/Button";
import { useParams } from "react-router-dom";
import { getTransactionById } from "../../api/model/transaction";

const PaymentInformation = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const fetchPayment = async () => {
    try {
      const res = await getTransactionById(id);
      setData(res.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchPayment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <Navbar />
      <Breadcrumb>
        <Breadcrumb.Item label="SPEAKERS" link="/speakers" />
        <Breadcrumb.Divider />
        <Breadcrumb.Item label="SPEAKERS PROFILE" />
        <Breadcrumb.Divider />
        <Breadcrumb.Item label="BOOKING" />
        <Breadcrumb.Divider />
        <Breadcrumb.Item label="PAYMENT" />
        <Breadcrumb.Divider />
        <Breadcrumb.Item label="PAYMENT INFORMATION" />
      </Breadcrumb>
      <div className="max-w-7xl mx-auto py-10 mt-10 px-14 border border-dashed rounded-3xl border-[#7098E0] bg-[#FEFEFE]">
        <div className="flex flex-row items-center gap-x-7">
          <div className="">
            <div className="flex justify-center">
              <img src={gojek} width="58" alt="" />
            </div>
            <img
              src={data.midtrans_transaction?.payment_data?.qr}
              alt=""
              width={250}
            />
            <p className="text-center text-xl text-[#565656]/60 font-medium">
              SCAN QR CODE
            </p>
          </div>
          <div className="">
            <h1 className="font-medium text-3xl">Payment Informations</h1>
            <p className="text-lg text-[#565656]/60 mt-2">
              Please scan the barcode to make payment
            </p>
            <div className="flex gap-x-5 mt-5 text-xl mb-7">
              <p>Transaction ID</p>
              <p>:</p>
              <p>SS{data.ID}</p>
            </div>
            <Button
              label="I Have Already Paid"
              isLink={true}
              to="/history-transaction"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentInformation;
