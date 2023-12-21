export type ArticlesData = {
  id: number;
  title: string;
  description: string;
  author: string;
  post: string;
  image: string;
};

export type MoreDetailsData = {
  about: {
    describe: string;
    image: string;
  };
  footer: {
    describe: string;
  };
};
