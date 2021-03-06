import { Collection } from "@kaviar/x-ui";
import { Post } from "@root/api.types";
import { ObjectId } from "@kaviar/ejson";

export class PostsCollection extends Collection<Post> {
  getName() {
    return "posts";
  }

  getTransformMap() {
    return {
      _id: (v: string) => new ObjectId(v),
    };
  }
}
