import Image from "next/image";
interface Cocktail {
  strDrink: string;
  strDrinkThumb: string;
  [key: string]: any;
}

interface Props {
  cocktail: Cocktail;
  style?: React.CSSProperties;
}
function CocktailItem({ cocktail, style }: Props) {
  if (!cocktail) return <div>Loading...</div>;

  return (
    <div
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        marginBottom: "30px",
        backgroundColor: "#f4f4f4",
        padding: "10px",
        borderRadius: "30px",
      }}
      className="menu-thumb"
    >
      <Image
        src={`${cocktail.strDrinkThumb}/preview`}
        alt={cocktail.strDrink}
        width={300}
        height={300}
        className="img-fluid"
      />
      <div className="menu-info" style={{ marginLeft: "20px" }}>
        <h3>{cocktail.strDrink}</h3>
        <p>
          Ingredients:{" "}
          {Object.keys(cocktail)
            .filter((key) => key.includes("strIngredient") && cocktail[key])
            .map((ingredient) => cocktail[ingredient])
            .join(", ")}
        </p>
      </div>
    </div>
  );
}
export default CocktailItem;
