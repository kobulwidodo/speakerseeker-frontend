import React, { useEffect, useRef, useState } from "react";
import vina from "../../assets/images/vina.png";
import searchIcon from "../../assets/images/send.svg";
import dotGreen from "../../assets/images/dot_green.svg";
import {
  addDoc,
  collection,
  orderBy,
  onSnapshot,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import { firestoreDb } from "../../firebase/init";
import Message from "../../components/Message";
import { useUserContext } from "../../context/UserContext";
import { Link, useParams } from "react-router-dom";
import { getImage, getSpeakerById } from "../../api/model/speaker";

const formData = {
  message: {
    value: "",
    required: true,
  },
};
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState(formData);
  const [speaker, setSpeaker] = useState({});
  const { userInfo } = useUserContext();
  const { id } = useParams();
  const bottomListRef = useRef();

  const msgRef = collection(firestoreDb, "messages");
  const q = query(
    msgRef,
    where("userId", "==", userInfo?.ID ?? 1),
    where("receiverId", "==", `S${id}`),
    orderBy("createdAt")
  );
  onSnapshot(q, (querySnapshot) => {
    let msg = [];
    querySnapshot.forEach((doc) => {
      msg.push(doc.data());
    });
    setMessages(msg);
  });

  const fetchSpeaker = async () => {
    try {
      const res = await getSpeakerById(id);
      setSpeaker(res.data.data);
    } catch (error) {}
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: {
        ...data[e.target.name],
        value: e.target.value,
      },
    });
  };

  const validateData = () => {
    let errorsData = {};
    Object.keys(data).forEach((key) => {
      const dataCheck = data[key];
      if (dataCheck.required) {
        if (!dataCheck.value) {
          errorsData = {
            ...errorsData,
            [key]: `${key + " tidak boleh kosong"}`,
          };
        }
      }
    });
    setErrors(errorsData);
    return Object.keys(errorsData).length < 1;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateData()) {
      await addDoc(collection(firestoreDb, "messages"), {
        createdAt: Timestamp.fromDate(new Date()),
        receiverId: `S${id}`,
        sender: "USER",
        text: data.message.value,
        userId: userInfo.ID,
      });
      setData(formData);
      bottomListRef.current.scrollIntoView({ behavior: "smooth" });
      try {
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  useEffect(() => {
    fetchSpeaker();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setTimeout(() => {
      bottomListRef.current.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  }, [id]);

  return (
    <>
      <div className="border flex justify-between px-10 items-center py-5 sticky top-0 bg-white">
        <div className="flex flex-row gap-x-5 items-center">
          <img
            src={getImage(speaker?.img_path)}
            width={60}
            height={60}
            alt=""
          />
          <div className="">
            <h1 className="font-medium text-xl">{speaker?.name}</h1>
            <div className="flex gap-x-1 items-center">
              <p className="text-[#b3b0b0] text-sm">Active Now</p>
              <img src={dotGreen} alt="" />
            </div>
          </div>
        </div>
        <Link to="/speakers" className="hover:text-blue-600">
          Back
        </Link>
      </div>
      <div className="flex flex-col mb-28 px-10 py-5">
        {messages.map((msg, i) => (
          <Message
            text={msg.text}
            createdAt={
              (msg.createdAt.toDate().getHours() <= 9
                ? "0" + msg.createdAt.toDate().getHours()
                : msg.createdAt.toDate().getHours()) +
              ":" +
              (msg.createdAt.toDate().getMinutes() <= 9
                ? "0" + msg.createdAt.toDate().getMinutes()
                : msg.createdAt.toDate().getMinutes()) +
              " " +
              (msg.createdAt.toDate().getHours() >= 12 ? " PM" : " AM")
            }
            sender={msg.sender}
            key={i}
          />
        ))}
      </div>
      <div className="" ref={bottomListRef}></div>
      <div className="relative">
        <div className="px-10 py-5 fixed w-full bottom-0 bg-white">
          <form
            action=""
            className="flex flex-row flex-auto gap-x-5 items-center"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <input
              type="text"
              className="appearance-none bg-transparent py-4 px-7 w-full flex-auto focus:outline-none rounded-full bg-[#F6F6F6]"
              placeholder="Send Message"
              name="message"
              value={data.message.value}
              onChange={handleChange}
            />
            <button
              type="submit"
              name="submit"
              className="bg-[#7098E0] p-4 rounded-full"
            >
              <img src={searchIcon} width={20} height={20} alt="" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chat;
