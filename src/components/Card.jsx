import { useEffect, useState } from "react";

function Card() {
  const [data, setData] = useState(null);
  useEffect(() => {
    // Try loading from localStorage
    const savedData = localStorage.getItem("skipData");
    if (savedData) {
      setData(JSON.parse(savedData));
      console.log("In Local Storage!");
    } else {
      // Fetch from API if nothing in localStorage
      async function fetchData() {
        try {
          const apiUrl =
            "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";
          const res = await fetch(apiUrl);
          const reply = await res.json();
          setData(reply);
          // Save to localStorage
          localStorage.setItem("skipData", JSON.stringify(reply));
          console.log("Fetched from API");
        } catch (err) {
          console.log(err.message);
        }
      }
      fetchData();
    }
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {data &&
        data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-4 border border-gray-200"
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
