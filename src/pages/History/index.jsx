import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import searchIcon from "../../assets/images/search.svg";
import { getTransactionByUser } from "../../api/model/transaction";
import NumberFormat from "react-number-format";
import moment from "moment";
import Status from "../../components/Status";

const History = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const fetchHistory = async () => {
    try {
      const res = await getTransactionByUser();
      setData(res.data.data);
      console.log(query);
    } catch (error) {}
  };

  useEffect(() => {
    fetchHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <Breadcrumb>
        <Breadcrumb.Item label="TRANSACTION" link="#" />
      </Breadcrumb>
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="flex flex-row justify-between">
          <h1 className="font-medium text-3xl">My Transactions</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-row gap-x-5 px-4 border-2 rounded-full text-base py-3 border-[#E5E5E5] mt-5 sm:mt-0"
          >
            <img src={searchIcon} className="w-4" alt="" />
            <input
              type="text"
              className="appearance-none bg-[#FEFEFE] w-full flex-auto focus:outline-none"
              placeholder="Search for speakers"
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>
        <table className="table-auto mt-10 w-full text-left">
          <thead>
            <tr className="border border-[#E9F2FF]">
              <th className="font-semibold text-sm py-4 pl-5">ID Number</th>
              <th className="font-semibold text-sm py-4 px-3">
                Transaction Date
              </th>
              <th className="font-semibold text-sm py-4 px-3">
                Speaker's Name
              </th>
              <th className="font-semibold text-sm py-4 px-3">Speaking To</th>
              <th className="font-semibold text-sm py-4 px-3">Event Date</th>
              <th className="font-semibold text-sm py-4 px-3">FEE</th>
              <th className="font-semibold text-sm py-4 pr-5">
                Status Booking
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((trx, key) => (
              <tr className="odd:bg-[#E9F2FF]" key={key}>
                <td className="font-medium text-sm py-4 pl-5 text-center">
                  SS-{trx.ID}
                </td>
                <td className="font-medium text-sm py-4 px-3">
                  {moment(trx.CreatedAt).format("DD/MM/YYYY")}
                </td>
                <td className="font-medium text-sm py-4 px-3">
                  {trx.speaker?.name}
                </td>
                <td className="font-medium text-sm py-4 px-3">
                  {trx.event_name}
                </td>
                <td className="font-medium text-sm py-4 px-3">
                  {moment(trx.event_date).format("DD/MM/YYYY")}
                </td>
                <td className="font-medium text-sm py-4 px-3">
                  {
                    <NumberFormat
                      value={trx.budget - 1000}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  }
                </td>
                <td className="font-medium text-sm py-4 pr-5">
                  {<Status status={trx.midtrans_transaction?.status} />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default History;
