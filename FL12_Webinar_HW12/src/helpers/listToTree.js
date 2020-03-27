export const listToTree = data => {
  const map = {};
  const roots = []
  let node;
  let i;

  for (i = 0; i < data.length; i += 1) {
    map[data[i].id] = i;
    data[i].children = [];
  }
  for (i = 0; i < data.length; i += 1) {
    node = data[i];

    if (!!node.rm_id) {
      data[map[node.rm_id]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}