import { createClient } from 'newt-client-js'
import type {PostItem} from './newt'

export const newtClient = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: 'cdn',
})

export async function getCategories() {
  const categories = await newtClient.getContents<PostItem>({
    appUid: "blog",
    modelUid: "article",
    query: {
      select: ["category"],
    },
  });
  return categories.items;
}
export async function getContents() {
  const postsData = await newtClient.getContents<PostItem>({
    appUid: "blog",
    modelUid: "article",
    query: {
      select: ["title", "slug", "content","category","thumbnail", "updatedAt"],
    },
  });
  return postsData.items;
}
