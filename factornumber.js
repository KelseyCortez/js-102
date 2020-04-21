function factorAnumber(num) {
    let result = [];
   for (count = 0; count <= num; count++) {
       if (num % count === 0) {
           result.push(count);

       }

   }
   return result;
}
console.log(factorAnumber(10));
