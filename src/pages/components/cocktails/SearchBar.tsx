import React, { ChangeEvent } from "react";
import { Input } from "@nextui-org/react";

interface Props {
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<Props> = ({ setSearchTerm }) => (
  <Input
    isClearable
    fullWidth
    color="primary"
    size="lg"
    placeholder="Search Cocktails"
    onChange={(e: ChangeEvent<HTMLInputElement>) =>
      setSearchTerm(e.target.value)
    }
    className="mb-4"
  />
);

export default SearchBar;
