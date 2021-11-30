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








query {
  getMagicItem (id: "61a539d6c2ca066f1b2b1f73") {
    lowProbability
    highProbability
  }
}

query {
  getAllMagicItems {
    id
    item
    lowProbability
    highProbability
  }
}

mutation {
  createMagicItem(magicItem: {
    table: "A"
    item: "Potion of healing"
    lowProbability: 1
    highProbability: 50
  }) {
    id
    table
    item
    lowProbability
    highProbability
  }
}

mutation {
  createMagicItem(magicItem: {
    table: "A"
    item: "Spell scroll (cantrip)"
    lowProbability: 51
    highProbability: 60
  }) {
    id
    table
    item
    lowProbability
    highProbability
  }
}

mutation {
  createMagicItem(magicItem: {
    table: "A"
    item: "Potion of climbing"
    lowProbability: 61
    highProbability: 70
  }) {
    id
    table
    item
    lowProbability
    highProbability
  }
}

mutation {
  createMagicItem(magicItem: {
    table: "A"
    item: "Spell scroll (1st level)"
    lowProbability: 71
    highProbability: 90
  }) {
    id
    table
    item
    lowProbability
    highProbability
  }
}

mutation {
  createMagicItem(magicItem: {
    table: "A"
    item: "Spell scroll (2nd level)"
    lowProbability: 91
    highProbability: 94
  }) {
    id
    table
    item
    lowProbability
    highProbability
  }
}

mutation {
  createMagicItem(magicItem: {
    table: "A"
    item: "potion of greater healing"
    lowProbability: 95
    highProbability: 98
  }) {
    id
    table
    item
    lowProbability
    highProbability
  }
}

mutation {
  createMagicItem(magicItem: {
    table: "A"
    item: "Bag of holding"
    lowProbability: 99
    highProbability: 99
  }) {
    id
    table
    item
    lowProbability
    highProbability
  }
}

mutation {
  createMagicItem(magicItem: {
    table: "A"
    item: "Driftglobe"
    lowProbability: 100
    highProbability: 100
  }) {
    id
    table
    item
    lowProbability
    highProbability
  }
}

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
}

mutation {
  updateTreasure (
    id: "61a63bebce856fa15b5f5e33",
    treasure: {
    type: "i"
    item: {}
    lowProbability: 1
    highProbability: 30
  }){
    id
    challenge
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
}

mutation {
  deleteTreasure (id: "61a637cbac999ad137778fd0")
}

mutation {
  createTreasure (treasure: {
    challenge: "0_4"
    type: "i"
    coin: {
      type: "cp"
      diceNumber: 5
      diceSize: 6
    }
    lowProbability: 1
    highProbability: 30
  }) {
    id
    coin {
      type
    }
    item {
      type
    }
    magicItemTable {
      type
    }
    lowProbability
    highProbability
  }
}
