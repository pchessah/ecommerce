function chunkArrayInGroups(arr, size) {
  const arr2 = [];
  function chunky(){
    arr2.push(arr.slice(i, i + size));
      console.log(arr.slice(i, i+size));
  }

  arr2.map(chunky)
    
   
   
    console.log( arr2);
  }

chunkArrayInGroups(["a", "b", "c", "d"], 2);
