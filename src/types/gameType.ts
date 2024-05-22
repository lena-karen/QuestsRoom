export type gameType = {
  coverImg: string;
  description: string;
  duration: number;
  id: number;
  level: Level;
  peopleCount: number[];
  previewImg: string;
  title: string;
  type: Type;
};

enum Type {
  horror = "horror",
  mystic = "mystic",
  adventures = "adventures",
  detective = "detective",
  sci_fi = "sci_fi",
}

enum Level {
  easy = "easy",
  medium = "medium",
  hard = "hard",
}
