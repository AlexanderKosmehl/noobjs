const tree = {
  val: 5,
  left: {
    val: 4,
    left: null,
    right: null
  },
  right: {
    val: 6,
    left: null,
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}

console.log(JSON.stringify(tree, null, 2))

const invertTree = (node) => {
  if (!node) return null

  return {
    val: node.val,
    left: invertTree(node.right),
    right: invertTree(node.left)
  }
}

const invertTreeInPlace = (node) => {
  if (!node) return

  let temp = node.left
  node.left = node.right
  node.right = temp

  invertTreeInPlace(node.left)
  invertTreeInPlace(node.right)
}

console.log(JSON.stringify(invertTree(tree), null, 2))

invertTreeInPlace(tree)
console.log(JSON.stringify(tree, null, 2))