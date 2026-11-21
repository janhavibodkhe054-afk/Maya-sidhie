import React from "react";

export default function ContactMap() {
  const address =
    "Siddhalaxmi Mahila Gruh Udyog, Narishing Heights, Near Kadadi School, Bhavani Peth, Solapur, Maharashtra 413002";

  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    address
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="w-full overflow-hidden">
      <iframe
        title="Maya's LALA Food Products Location"
        src={mapUrl}
        className="
          block w-full border-0
          h-[300px]
          sm:h-[350px]
          lg:h-[400px]
        "
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}