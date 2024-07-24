import React from 'react';

interface MapProps {
  address: string;
}

const Map: React.FC<MapProps> = ({ address }) => {
  const encodedAddress = encodeURIComponent(address);
  const src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDiQiYHMGffsfYp5Ra0yHPS_wtgj2R9OZA&q=${encodedAddress}`;

  return (
    <iframe
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src={src}
    ></iframe>
  );
};

export default Map;