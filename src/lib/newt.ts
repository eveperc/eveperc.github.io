import {createClient} from 'newt-client-js'

export interface Article {
  title:string
  slug:string
  body:string
  category:{
      _id:string
      name:string
      slug:string
    }
}
export interface Category {
  name:string,
  slug:string,
}

export const newtClient = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token:import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: 'cdn',
})
