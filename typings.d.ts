export interface Post {
  _id: string
  _createdAt: string
  title: {
    name: string
    image: string
  },
  description: string
  mainImage: {
    asset: {
      url: string
    }
  }
  author: {
    name: string
    image: string
  }
  slug: {
    current: string
  }
  body: [object]
}