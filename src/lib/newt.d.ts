export type PostItem = {
  _id: string
  _sys: {
    raw: {
      createdAt: string
      updatedAt: string
      firstPublishedAt: string
      publishedAt: string
    }
    customOrder: number
    createdAt: string
    updatedAt: string
  }
  title: string
  slug: string
  thumbnail: {
    _id: string
    altText: string
    description: string
    fileName: string
    fileSize: number
    fileType: string
    height: number
    metadata: {}
    src: string
    title: string
    width: number
  }
  date: string
  introduction: string
  content: string
  category: {
    _id: string
    _sys: {
      raw: any
      customOrder: number
      createdAt: string
      updatedAt: string
    }
    name: string
    slug: string
  }
  keyword: {
    _id: string
    _sys: any
    name: string
    slug: string
  }[]
  relation: {
    _id: string
    _sys: any
    title: string
    slug: string
    thumbnail: any
    date: string
    introduction: string
    content: string
    category: any
    keyword: any[]
    relation: any[]
    popular: boolean
  }[]
}

export type PostData = {
  skip: number
  limit: number
  total: number
  items: PostItem[]
}

export type CategoryData = {
  skip: number
  limit: number
  total: number
  items: {
    _id: string
    _sys: {
      raw: {
        createdAt: string
        updatedAt: string
        firstPublishedAt: string
        publishedAt: string
      }
      customOrder: number
      createdAt: string
      updatedAt: string
    }
    name: string
    slug: string
  }[]
}

export type CategoryItem = {
  _id: string
  _sys: {
    raw: {
      createdAt: string
      updatedAt: string
      firstPublishedAt: string
      publishedAt: string
    }
    customOrder: number
    createdAt: string
    updatedAt: string
  }
  name: string
  slug: string
}

export type KeywordData = {
  skip: number
  limit: number
  total: number
  items: {
    _id: string
    _sys: {}
    name: string
    slug: string
  }[]
}

export type KeywordItem = {
  _id: string
  _sys: {
    raw?: {
      createdAt: string
      updatedAt: string
      firstPublishedAt: string
      publishedAt: string
    }
    customOrder?: number
    createdAt?: string
    updatedAt?: string
  }
  name: string
  slug: string
}

export type RelationPost = {
  _id: string
  _sys: {
    raw: {}
    customOrder: number
    createdAt: string
    updatedAt: string
  }
  title: string
  slug: string
  thumbnail: {
    _id: string
    altText: string
    description: string
    fileName: string
    fileSize: number
    fileType: string
    height: number
    metadata: {}
    src: string
    title: string
    width: number
  }
  date: string
  introduction: string
  content: string
  category: {
    _id: string
    _sys: {}
    name: string
    slug: string
  }
  keyword: [{}]
  relation: [{}]
  popular: boolean
}
