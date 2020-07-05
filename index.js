document.getElementById('checkVal').addEventListener('click', () => {
  let num = document.getElementById('Value').value;
  let maxNum = 4950;

  let arr = Array.from({length: Math.floor(num/maxNum)}, () => maxNum);
  let left = Number(num%maxNum).toFixed(2).toString().replace(".", ",");
  if(left !== 0) {
    arr.push(left);
  }
  console.log(arr);
  let val =
    `
  
        ${arr}
        
  `;

  document.getElementById('arrayVal').innerHTML = val;
});

document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    let num = document.getElementById('Value').value;
    let maxNum = 4950;

    let arr = Array.from({length: Math.floor(num/maxNum)}, () => maxNum);
    let left = Number(num%maxNum).toFixed(2).toString().replace(".", ",");
    if(left !== 0) {
      arr.push(left);
    }
    console.log(arr);
    let val =
      `
  
        ${arr}
        
  `;

    document.getElementById('arrayVal').innerHTML = val;
  }
})


if (document.getElementById('checkVal').value.length === 0 ) {
  console.log('oops')
}
