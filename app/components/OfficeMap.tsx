// app/components/OfficeMap.tsx
"use client";

const OfficeMap = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Our London Office</h2>
      <div className="address-details mb-6">
        <p className="text-gray-400">
          330, 5 Kew Road<br />
          Richmond, London<br />
          TW9 2PR
        </p>
      </div>
      <div className="map-container relative w-full h-0 pb-[75%] md:pb-[56.25%] rounded-lg overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full border-0"
          src="https://maps.google.com/maps?width=408&amp;height=234&amp;hl=en&amp;q=5%20KEW%20ROAD%20LONDON+(NoCarbon%20UK)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="NoCarbon London Office Location"
        ></iframe>
      </div>
    </div>
  );
};

export default OfficeMap;



