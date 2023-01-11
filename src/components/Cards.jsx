import Card from "./Card";
/* nos renderiza varios card */
const Cards = ({ ...char }) => {
  return (
    <div>
      <Card {...char} />
    </div>
  );
};

export default Cards;
