import { useEffect, useState } from "react";
import styles from './Wines.module.css';

type Wine = {
  image: string;
  wine: string;
  winery: string;
  rating: {
    average: number;
  };
};

const Wines = () => {
  const [wines, setWines] = useState<Wine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.sampleapis.com/wines/whites")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data: Wine[]) => {
        const filteredWines = data.filter(wine => wine.rating.average >= 4.8);
        setWines(filteredWines);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      {wines.map(({ image, wine, winery, rating }) => (
        <div
          className={styles.wineCard}
          key={wine}
          style={{
            backgroundColor: rating.average >= 4.9 ? "#fed330" : "#45aaf2",
            color: rating.average >= 4.9 ? "#4b6584" : "#fed330"
          }}
        >
          <img src={image} alt={wine} />
          <p>{wine}</p>
          <p>Winery: {winery}</p>
          <p
            style={{
              fontSize: "20px",
              color: rating.average >= 4.9 ? "#ff3838" : "#fffa65"
            }}
          >
            Rating: {rating.average}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Wines;
