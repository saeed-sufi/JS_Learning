let table = [];

for (let i = 0; i < 10; i++) {
  table.push([2**i, 2*i**2]);
}

console.table(table);
