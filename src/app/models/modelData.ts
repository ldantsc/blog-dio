export type ArticleData = {
  id: number;
  title: string;
  description: string;
  author: string;
  post: string;
  image: string;
};

export type NewsletterData = {
  id: number;
  title: string;
  description: string;
  post: string;
  image: string;
};

export type LatestData = {
  id: number;
  title: string;
  description: string;
  post: string;
  author: string;
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
