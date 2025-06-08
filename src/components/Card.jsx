import { useEffect, useState } from "react";

function Card() {
  // State to store fetched skip data
  const [data, setData] = useState(null);

  // State to track which card is toggled (for mobile interaction)
  const [toggledCardId, setToggledCardId] = useState(null);

  // Map of skip IDs to their respective image URLs
  const imageUrls = {
    17933:
      "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg",
    17934:
      "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg",
    17935:
      "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/6-yarder-skip.jpg",
    17936:
      "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/8-yarder-skip.jpg",
    17937:
      "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/10-yarder-skip.jpg",
    17938:
      "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/12-yarder-skip.jpg",
    17939:
      "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/16-yarder-skip.jpg",
    15124:
      "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg",
    15125:
      "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/40-yarder-skip.jpg",
  };

  // On component mount: check localStorage or fetch data from API
  useEffect(() => {
    const savedData = localStorage.getItem("skipData");
    if (savedData) {
      // Use cached data if available
      setData(JSON.parse(savedData));
    } else {
      // Fetch from API and cache in localStorage
      async function fetchData() {
        try {
          const apiUrl =
            "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";
          const res = await fetch(apiUrl);
          const reply = await res.json();
          setData(reply);
          localStorage.setItem("skipData", JSON.stringify(reply));
        } catch (err) {
          console.log(err.message);
        }
      }
      fetchData();
    }
  }, []);

  // Handles mobile tap interaction: toggles the detail overlay
  const handleMobileTap = (id) => {
    setToggledCardId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-black text-white w-full m-0 p-0">
      {/* Header */}
      <div className="text-center p-4">
        <h1 className="font-bold text-4xl sm:text-2xl">
          Choose Your Skip Size
        </h1>
        {/* Show different paragraphs depending on device width */}
        <p className="hidden md:block">
          Select the skip size that best suits your needs
        </p>
        <p className="md:hidden text-sm text-gray-300 mt-2">
          (Tap a card to view skip details)
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 pb-6">
        {data &&
          data.map((item, index) => {
            // Use mapped image URL or fallback image
            const backgroundImageUrl = imageUrls[item.id]
              ? imageUrls[item.id]
              : `https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=`;

            // Check if this card is currently toggled on mobile
            const isToggled = toggledCardId === item.id;

            return (
              <div
                key={index}
                className="relative group aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-gray-800"
                onClick={() => handleMobileTap(item.id)}
              >
                {/* Background Image Layer */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${backgroundImageUrl})` }}
                ></div>

                {/* Slide-In Overlay: visible on hover (desktop) or tap (mobile) */}
                <div
                  className={`
                    absolute inset-0 text-white p-4 transition-transform duration-300 ease-in-out flex flex-col justify-center
                    bg-black/80 
                    transform
                    ${
                      isToggled ? "translate-x-0" : "translate-x-full"
                    }  // Slide in if toggled (mobile)
                    group-hover:translate-x-0                         // Slide in on hover (desktop)
                  `}
                >
                  <h3 className="text-lg sm:text-xl font-bold lg:text-3xl pb">
                    Size: {item.size}
                  </h3>
                  <p className="text-sm sm:text-base mt-1 lg:text-3xl py-10 sm:p-0 xs:p-0">
                    Hire Duration: {item.hire_period_days} days
                  </p>
                  <p className="text-base sm:text-lg mt-1 font-semibold lg:text-3xl">
                    Price: £{item.price_before_vat + item.vat}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Card;
