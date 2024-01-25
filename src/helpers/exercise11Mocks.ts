import { User } from "@/components/exercise11/Exercise11";

export const bubo: User = {
  userId: 378634,
  avatarImg: "Bubo.png",
  userName: "Bubo",
  followers: 1,
  following: 3,
  sharedPosts: [
    {
      postId: 33,
    },
  ],
};

export const buba: User = {
  userId: 368734,
  avatarImg: "Buba.png",
  userName: "Buba",
  followers: 2,
  following: 1,
  posts: [
    {
      postId: 33,
      content: "Mi nuevo producto!",
      img: "zafira-card.png",
      likes: [{ userId: 378634 }],
    },
  ],
};

export const eldenRing: User = {
  userId: 111111,
  avatarImg: "Elden.png",
  userName: "Elden Ring",
  followers: 0,
  following: 3,
  posts: [
    {
      postId: 22,
      content: "This is Godrick",
      img: "Godrick.png",
      likes: [{ userId: 378634 }, { userId: 368734 }],
      comments: [
        {
          userId: 368734,
          coment: "Siiiiiiiii",
        },
      ],
    },
  ],
};
