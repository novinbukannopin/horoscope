import axios from "axios";
import { useEffect, useState } from "react";

export default function Parent() {
  const [data, setData] = useState([]);
  const [zodiac, setZodiac] = useState("");
  const [sign, setSign] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // setMessage(`Info berdasarkan ${zodiac} untuk ${sign}`);
    setZodiac(zodiac);
    setSign(sign);
  };

  useEffect(() => {
    const url = `https://aztro.sameerkumar.website/?sign=${zodiac}&day=${sign}`;
    const getData = () => {
      axios.post(url).then((response) => {
        setData(response.data);
      });
    };
    getData();
  }, [sign, zodiac]);

  return (
    <div className="container">
      <div className="w-full pb-5 pt-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group row mb-3">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Zodiac
            </label>
            <div class="col-sm-10">
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                onChange={(e) => setZodiac(e.target.value)}
              >
                <option selected>Zodiakmu apa sihhh</option>
                <option>Aries</option>
                <option>Taurus</option>
                <option>Gemini</option>
                <option>Cancer</option>
                <option>Leo</option>
                <option>Virgo</option>
                <option>Libra</option>
                <option>Scorpio</option>
                <option>Sagittarius</option>
                <option>Capricorn</option>
                <option>Aquarius</option>
                <option>Pisces</option>
              </select>
            </div>
          </div>
          <div className="form-group row mb-3">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Sign
            </label>
            <div class="col-sm-10">
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                onChange={(e) => setSign(e.target.value)}
              >
                <option selected>Buat kapan ?</option>

                <option>Today</option>
                <option>Tomorrow</option>
                <option>Yesterday</option>
              </select>
            </div>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary btn">cari</button>
          </div>
        </form>
      </div>

      <table className="table table-striped ">
        <div key={data.mood} className="row">
          <tbody>
            <tr className="row">
              <th className="col-6">Date Range</th>
              <td className="col">{data.date_range}</td>
            </tr>
            <tr className="row">
              <th className="col-6">Current Date</th>
              <td className="col">{data.current_date}</td>
            </tr>
            <tr className="row">
              <th className="col-6">Color</th>
              <td className="col">{data.color}</td>
            </tr>
            <tr className="row">
              <th className="col-6">Compatibility</th>
              <td className="col">{data.compatibility}</td>
            </tr>
            <tr className="row">
              <th className="col-6">Mood</th>
              <td className="col">{data.mood}</td>
            </tr>
            <tr className="row">
              <th className="col-6">Lucky Time</th>
              <td className="col">{data.lucky_time}</td>
            </tr>
            <tr className="row">
              <th className="col-6">Lucky Number</th>
              <td className="col">{data.lucky_number}</td>
            </tr>
            <tr className="row">
              <th className="col-6">Description</th>
              <td className="col">{data.description}</td>
            </tr>
          </tbody>
        </div>
      </table>
    </div>
  );
}
