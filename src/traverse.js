const traverseNode = ({ node, parent, visitor }) => {
  //console.log(node);
  const methods = visitor[node.type];

  if (methods && methods.enter) {
    methods.enter({ node, parent });
  }

  if (node.arguments) {
    traverseArray({ array: node.arguments, parent: node, visitor });
  }

  if (methods && methods.exit) {
    methods.exit({ node, parent });
  }
};

function traverse(node, visitor) {
  traverseNode({ node, visitor });
}

module.exports = { traverse };

function traverseArray({ array, visitor, parent }) {
  array.forEach((node) => traverseNode({ node, parent, visitor }));
}
