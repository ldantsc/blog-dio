export type ArticlesData = {
  id: number;
  title: string;
  description: string;
  author: string;
  post: {
    postId: number;
    description: string;
  }
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
