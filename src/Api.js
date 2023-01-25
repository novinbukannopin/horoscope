import axios from "axios";
import { useEffect, useState } from "react";

export default function Parent() {
  const [data, setData] = useState([]);
  const [zodiac, setZodiac] = useState("");
  const [sign, setSign] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Info berdasarkan ${zodiac} ${sign}`);
    setZodiac(zodiac);
    setSign(sign);
  };

  const url = `https://aztro.sameerkumar.website/?sign=${zodiac}&day=${sign}`;

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios.post(url).then((response) => {
      setData(response.data);
    });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="zodiac"
          onChange={(e) => setZodiac(e.target.value)}
        />
        <input
          type="text"
          placeholder="sign"
          onChange={(e) => setSign(e.target.value)}
        />
        <button onSubmit={getData()}>cari</button>
      </form>
      <h2>{message}</h2>
      <div key={data.color}>
        <h3>Date Range : {data.date_range}</h3>
        <h3>Current Date : {data.current_date}</h3>
        <h3>Color : {data.color}</h3>
        <h3>Description : {data.description}</h3>
        <h3>Compatibilty :{data.compatibility}</h3>
        <h3>Mood : {data.mood}</h3>
        <h3>Lucky Number : {data.lucky_number}</h3>
        <h3>Lucky Time :{data.lucky_time}</h3>
      </div>
    </div>
  );
}
