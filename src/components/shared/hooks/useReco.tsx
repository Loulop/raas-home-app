import React from "react";

const RECOMMENDATIONS = [
  "Content",
  "Product",
  "Service",
  "Music",
  "Movie",
  "News",
  "Book",
  "Business"
];

export default function useReco() {
  const [data, setData] = React.useState<string>(RECOMMENDATIONS[0]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      let index = RECOMMENDATIONS.indexOf(data);
      setData(RECOMMENDATIONS[(index + 1) % RECOMMENDATIONS.length]);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [data]);

  return data;
}
