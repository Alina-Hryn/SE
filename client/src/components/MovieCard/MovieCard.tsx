import "./MovieCard.css";

export const MovieCard = () => {
  return (
    <div style={{ width: 200, paddingLeft: 40, paddingBottom: 40 }}>
      <img
        src={
          "https://www.lionnewspaper.com/wp-content/uploads/2020/01/Little-Women-Official-Poster-608x900.jpg"
        }
        alt={"Little Women Poster"}
        width={200}
        height={300}
      />
      <div className="movieName">
        <a>Little Women</a>
      </div>
    </div>
  );
};
