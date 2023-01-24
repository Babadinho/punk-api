export default interface BeerData {
  id?: number;
  name: string;
  tagline: string;
  image_url: string;
  description: string;
  ingredients: Ingredients;
}

interface Ingredients {
  malt: MaltIngredient[];
  hops: HopIngredient[];
  yeast: string;
  [key: string]: MaltIngredient[] | HopIngredient[] | string;
}

interface MaltIngredient {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
}

interface HopIngredient {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
  add: string;
  attribute: string;
}
