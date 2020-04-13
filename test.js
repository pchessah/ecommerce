function chunkArrayInGroups(arr, size) {
    
    let arr2 = [];
    for (let i = 0; i < arr.length; i += size) {
      arr2.push(arr.slice(i, i + size));
      console.log(arr.slice(i, i+size));
    }
    return ( arr2);
  }

chunkArrayInGroups(["a", "b", "c", "d"], 2);
