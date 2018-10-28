const recursion = tree => {
  const treeWalk = (treeBranch, step = 0, arrTree = []) => {
    let i = step;
    const arr = arrTree;
    if (!arr[step]) {
      arr[step] = [];
    }

    arr[i].push(treeBranch.value);

    i += 1;

    if (treeBranch.left) {
      treeWalk(treeBranch.left, i, arr);
    }

    if (treeBranch.right) {
      treeWalk(treeBranch.right, i, arr);
    }

    return arr;
  };

  return treeWalk(tree);
};

module.exports = recursion;
