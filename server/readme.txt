Graphql Queries

query {
  getPost (id: "619e3ca3c6a2f9ce2fe53328") {
    title
    description
  }
}

query {
  getAllPosts {
    id
    title
    description
  }
}

mutation {
  createPost(post: {
    title: "second post"
    description: "This is the # description..."
  }) {
    id
    title
    description
  }
}

mutation {
  deletePost(id: "619e3ca3c6a2f9ce2fe53328")
}

mutation {
  updatePost(
    id: "619e3c5dc6a2f9ce2fe53325",
    post: {
      title: "first post"
      description: "This is the description..."}
  ) {
    id
    title
    description
  }
}

mutation {
  updatePost(
    id: "619e3c5dc6a2f9ce2fe53325",
    post: {
      description: "This is the new description..."}
  ) {
    id
    title
    description
  }
}