export interface ICategories {
  id: number;
  title: string;
}

export interface ICategoryProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}
