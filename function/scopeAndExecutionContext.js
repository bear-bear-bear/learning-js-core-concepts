var a = 1;
function outer() {
  console.log(a); // 1

  function inner() {
    console.log(a); // undifined : inner안에서 선언된 var a의 선언만 위로 끌여올려진 후 콘솔 출력
    var a = 3;
  }

  inner();

  console.log(a); // 1
}
outer();
console.log(a); // 1
