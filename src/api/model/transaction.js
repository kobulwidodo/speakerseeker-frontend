import { coreApi } from "..";

export const makeTransaction = (
  id,
  organization_name,
  phone,
  email,
  type,
  topic,
  goals,
  event_name,
  event_date,
  location,
  budget,
  payment_type,
  address = ""
) => {
  const param = {
    organization_name: organization_name,
    phone: phone,
    email: email,
    type: type,
    topic: topic,
    goals: goals,
    event_name: event_name,
    event_date: event_date,
    location: location,
    address: address,
    budget: budget,
    payment_type: payment_type,
  };
  console.log(param);
  return coreApi.post(`/transaction/${id}`, param);
};

export const getTransactionById = (id) => {
  return coreApi.get(`/transaction/${id}`);
};

export const getTransactionByUser = () => {
  return coreApi.get("/transaction/");
};
