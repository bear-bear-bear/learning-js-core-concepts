/* 메소드 호출시 */
var a = {
  b: function () {
    console.log(this);
  },
};
a.b(); // 객체 a

var c = {
  d: {
    e: function () {
      console.log(this);
    },
  },
};
c.d.e(); // 객체 c.d

// ** 메소드 안에서 내부함수가 있을 때 **
var f = 10;
var obj = {
  f: 20,
  g: function () {
    console(this.f); // 20

    function h() {
      console.log(this.f); // 10
    }
    h();
  },
};
obj.g();

// ** 메소드 안에서 내부함수가 있을 때 우회 **
var f = 10;
var obj = {
  f: 20,
  g: function () {
    var self = this; // 우회
    console(this.f); // 20

    function h() {
      console.log(self.f); // 20
    }
    h();
  },
};
obj.g();
