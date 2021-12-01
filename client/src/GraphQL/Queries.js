import {gql} from '@apollo/client'

export const GET_ALL_POSTS = gql`
    query {
    getAllPosts {
      id
      title
      description
    }
}`;

export const GET_ALL_TREASURE = gql`
    query {
    getAllTreasure {
      id
      challenge
      type
      coin{
        type
        diceNumber
        diceSize
      }
      item {
        type
        diceNumber
        diceSize
      }
      magicItemTable {
        type
        diceNumber
        diceSize
      }
      lowProbability
      highProbability
    }
}`;

export const GET_ALL_MAGIC_ITEMS = gql`
  query {
    getAllMagicItems {
      id
      table
      item
      lowProbability
      highProbability
    }
}`;


export const ROLL_TREASURE = gql`
query rollTreasure(
  $challenge: String!
  $type: String!
  $roll: Int!
) {
  rollTreasure(
    challenge: $challenge 
    type: $type       
    roll: $roll
    ) {
    challenge
    type
    coin {
      type
      diceNumber
      diceSize
      }
    item {
      type
      value
      diceNumber
      diceSize
      }
    magicItemTable {
      type
      diceNumber
      diceSize
      }
  }
}`;

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