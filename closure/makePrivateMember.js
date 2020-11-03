/* Let's make private member with closure ! */

/* 다음과 같은 규칙을 가진 자동차 게임이 있다. */

// 차량별로 연료량 및 연비는 랜덤
// 유저별로 차량 하나씩 고르면 게임 시작
// 각 유저는 자신의 턴에 주사위를 굴려 랜덤하게 나온 숫자만큼 이동함
// 만약 연료가 부족하면 이동 불가
// 가장 멀리 간 사람이 승리

// 이 파일에선 프로토타입으로, 간단하게 차량 한 대 만의 기능을 만든다.
// 1. 주여진 연료와 연비를 바탕으로
// 2. 특정 숫자만큼 이동하고
// 3. 연료 부족시에는 이동할 수 없게 만든다.

/* BAD😅 차량 객체로 생성 */
/* 사용자가 'car.power = 1000' 같은 코드로 이른바 '치트'를 사용할 수 있는 코드 */
var car = {
  fuel: 10, // 연료 (l)
  power: 2, // 연비 (km / l)
  total: 0,

  run: function (km) {
    var wasteFuel = km / this.power;

    if (this.fuel < wasteFuel) {
      console.log("이동 불가");
      return;
    }
    console.log("주행시작😎");

    this.fuel -= wasteFuel;
    this.total += km;
  },
};

/* GOOD!😎 클로저로 생성 */
/* 클로저는 '선언 순간'에 값이 정해지기 때문에 사용자가 값을 임의로 변경할 수 없다! */
var createCar = function (_fuel, _power) {
  var fuel = _fuel;
  var power = _power;
  var total = 0;

  return {
    run: function (km) {
      var wasteFuel = km / power;

      if (fuel < wasteFuel) {
        console.log("이동 불가");
        return;
      }
      console.log("주행시작😎");

      fuel -= wasteFuel;
      total += km;
    },
  };
};

var car = createCar(10, 2); // wasteFuel(남은연료) 변수의 값은 20으로 설정됨

car.run(10); // 주행 - wasteFuel 10
car.run(10); // 주행 - wasteFuel 0
car.run(10); // 이동 불가
