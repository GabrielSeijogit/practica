import { buba, bubo, eldenRing } from "@/helpers/exercise11Mocks";

export interface Like {
    userId: number;
}

export interface Comment {
    userId: number
    coment: string
}

export interface Post {
    postId: number;
    content: string;
    img?: string;
    likes?: Like[];
    comments?: Comment[]
}

export interface SharedPost {
    postId: number
}

export interface User {
    userId: number;
    avatarImg: string
    userName: string;
    followers: number;
    following: number;
    posts?: Post[];
    sharedPosts?: SharedPost[]
}

const users: User[] = [bubo, buba, eldenRing]

export const Exercise11 = () => {
    return (
        <div>Exercise11</div>
    )
}
