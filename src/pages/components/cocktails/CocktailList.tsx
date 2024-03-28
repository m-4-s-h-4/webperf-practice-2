import { AutoSizer, List } from "react-virtualized";
import CocktailItem from "./CocktailItem";
import { Skeleton } from "@nextui-org/react";

interface Cocktail {
  strDrink: string;
  strDrinkThumb: string;
  [key: string]: any;
}

interface Props {
  cocktails: Cocktail[];
  isLoading: boolean;
}

function CocktailList({ cocktails, isLoading }: Props) {
  if (isLoading) {
    return (
      <div style={{ minHeight: "60rem" }}>
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} style={{ width: "100%", height: "420px" }} />
        ))}
      </div>
    );
  }

  const rowRenderer = ({
    key,
    index,
    style,
  }: {
    key: string;
    index: number;
    style: React.CSSProperties;
  }) => {
    const cocktail = cocktails[index];
    return <CocktailItem key={key} cocktail={cocktail} style={style} />;
  };

  return (
    <div style={{ minHeight: "60rem" }}>
      <AutoSizer>
        {({ width }) => (
          <List
            width={width}
            height={800}
            rowCount={cocktails.length}
            rowHeight={420}
            rowRenderer={rowRenderer}
          />
        )}
      </AutoSizer>
    </div>
  );
}

export default CocktailList;
