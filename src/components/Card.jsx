import { useEffect, useState } from "react";

function Card() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl =
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

        const res = await fetch(apiUrl);
        const reply = await res.json();
        console.log(reply);
        // console.log(typeof reply);
        setData(reply);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-start p-4">
      {data &&
        data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-4 w-64 border border-gray-200"
          >
            <h3 className="text-lg font-semibold mb-2">Size: {item.size}</h3>
            <p className="text-gray-700">
              Hire Duration: {item.hire_per_days} days
            </p>
            <p className="text-gray-900 font-bold">
              Price: £{item.price_before_vat + item.vat}
            </p>
          </div>
        ))}
    </div>
  );
}

export default Card;
