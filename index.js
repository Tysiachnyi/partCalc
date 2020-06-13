document.getElementById('checkVal').addEventListener('click', () => {
  let num = document.getElementById('Value').value;
  let maxNum = 4950;

  let arr = Array.from({length: Math.floor(num/maxNum)}, () => maxNum);
  let left = Number(num%maxNum).toFixed(2);
  if(left !== 0) {
    arr.push(left);
  }
  let val =
    `
  <div class="row">
        <div class="center-align">
          <div class="card-panel indigo">
        <span class="white-text">
        ${arr}
        </span>
          </div>
        </div>
      </div>
  `;

  document.getElementById('arrayVal').innerHTML = val;
});


if (document.getElementById('checkVal').value.length === 0 ) {
  console.log('oops')
}
