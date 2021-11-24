import {gql} from '@apollo/client'

export const GET_ALL_POSTS = gql`
    query {
    getAllPosts {
      id
      title
      description
    }
}
`

// query {
//     getPost (id: "619e3ca3c6a2f9ce2fe53328") {
//       title
//       description
//     }
//   }
//   
//   query {
//     getAllPosts {
//       id
//       title
//       description
//     }
//   }