(function () {
  let duration = 50

  $('.actions').on('click', 'button', function (e) {
    let $button = $(e.currentTarget) // button
    let speed = $button.attr('data-speed')
    $button.addClass('active')
      .siblings('.active').removeClass('active')
    switch (speed) {
      case 'slow':
        duration = 20
        break
      case 'normal':
        duration = 10
        break
      case 'fast':
        duration = 3
        break
    }
  })

  function writeCode(prefix, code, fn) {
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id
    id = setTimeout(function run() {
      n += 1
      container.innerHTML = code.substring(0, n)
      styleTag.innerHTML = code.substring(0, n)
      container.scrollTop = container.scrollHeight
      if (n < code.length) {
        id = setTimeout(run, duration)
      } else {
        fn && fn()
      }
    }, duration)
  }



  let code = `/*
 * OK, there we go
 */
div {
  position: absolute;
  transform-origin: left top;
}
.pig_container {
width: 800px;
height: 800px;
top: 100px;
left: 300px;
}

/*
 * make pig head
 */
.pig_head {
width: 300px;
  height: 200px;
  top: 100px;
  left: 100px;
  border-radius: 95% 50% 50% 50%/ 87% 80% 68% 50%;
  border: 6px solid #ef96c2;
  background-color: #ffb3da;
  transform: rotate(30deg);
  z-index: 100;
  box-sizing: border-box;
}
.pig_head_white_left_bottom {
  width: 200px;
  height: 154px;
  bottom: -7px;
  left: -38px;
  background-color: #fff;
  box-sizing: border-box;
}
.pig_head_white_left_top {
/*	width: 200px;
  height: 64px;
  bottom: 84px;
  left: 52px;
  background-color: #ffb3da;
  box-sizing: border-box;*/

  width: 200px;
  height: 66px;
  bottom: 84px;
  background-color: #ffb3da;
  box-sizing: border-box;
  top: 166px;
  left: 134px;
  transform: rotate(34deg);
  z-index: 103;
}
.left_eye, .right_eye, .face, .mouth {
  z-index: 104;
}
.pig_nose {
width: 51px;
  height: 70px;
  top: 147px;
  left: 107px;
  border-radius: 72% 72% 72% 72%/ 72% 72% 72% 72%;
  border: 6px solid #ef96c2;
  background-color: #ffb3da;
  transform: rotate(36deg);
  z-index: 103;
  box-sizing: border-box;
}
.pig_nose_bottom {
width: 88px;
  height: 13px;
  top: 209px;
  left: 84px;
  border-radius: 50% 50% 50% 50%/ 0% 0% 100% 100%;
  border: 6px solid #ef96c2;
  background-color: #ffb3da;
  transform: rotate(35deg);
  z-index: 102;
  box-sizing: border-box;
  border-top-color: #ffb3da;
}
.pig_jaw {
width: 97px;
  height: 104px;
  top: 249px;
  left: 141px;
  border-radius: 0% 0% 0% 76%/ 0% 0% 0% 74%;
  border: 6px solid #ef96c2;
  background-color: #ffb3da;
  transform: rotate(22deg);
  z-index: 100;
  box-sizing: border-box;
  border-top-color: #ffb3da;
  border-right-color: #ffb3da;
}
.pig_jaw_right {
width: 13px;
  height: 6px;
  background-color: #ef96c2;
  top: 373px;
  left: 186px;
  transform: rotate(19deg);
  z-index: 100;
}
.left_eye_bg {
width: 29px;
  height: 29px;
  top: 177px;
  left: 170px;
  border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
  border: 6px solid #fff;
  background-color: #fff;
  z-index: 101;
  box-sizing: border-box;
}
.left_eye_ball {
width: 10px;
  height: 10px;
  top: 181px;
  left: 171px;
  border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
  border: 6px solid #000;
  background-color: #000;
  z-index: 101;
  box-sizing: border-box;
}
.left_eye_border {
width: 34px;
  height: 34px;
  top: 174px;
  left: 166px;
  border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
  border: 6px solid #ef96c2;
  background-color: transparent;
  z-index: 101;
  box-sizing: border-box;
}

.right_eye_bg {
width: 28px;
  height: 28px;
  top: 194px;
  left: 205px;
  border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
  border: 6px solid #fff;
  background-color: #fff;
  z-index: 101;
  box-sizing: border-box;
}
.right_eye_ball {
width: 10px;
  height: 10px;
  top: 199px;
  left: 208px;
  border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
  border: 6px solid #000;
  background-color: #000;
  z-index: 101;
  box-sizing: border-box;
}
.right_eye_border {
width: 35px;
  height: 37px;
  top: 191px;
  left: 202px;
  border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
  border: 6px solid #ef96c2;
  background-color: transparent;
  z-index: 101;
  box-sizing: border-box;
}

.mouth_bottom {
width: 97px;
  height: 45px;
  top: 273px;
  left: 154px;
  border-radius: 50% 50% 50% 50%/ 0% 0% 100% 100%;
  border: 6px solid #d44b81;
  background-color: #000;
  z-index: 101;
  box-sizing: border-box;
  transform: rotate(19deg);
}
.mouth_middle {
width: 98px;
  height: 27px;
  top: 272px;
  left: 154px;
  border-radius: 0% 0% 50% 50%/ 0% 0% 100% 100%;
  border: 6px solid #d44b81;
  background-color: #ffb3da;
  z-index: 101;
  box-sizing: border-box;
  transform: rotate(19deg);
  border-top-color: #ffb3da;
}
.mouth_top {
      width: 135px;
  height: 66px;
  top: 231px;
  left: 149px;
  border-radius: 50% 50% 50% 50%/ 0% 0% 100% 100%;
  background-color: #ffb3da;
  z-index: 101;
  transform: rotate(13deg);

/*	width: 131px;
  height: 55px;
  top: 231px;
  left: 152px;
  border-radius: 50% 50% 50% 50%/ 0% 0% 100% 100%;
  background-color: #ffb3da;
  z-index: 101;
  transform: rotate(19deg);*/
}
.face {
width: 49px;
  height: 59px;
  top: 243px;
  left: 269px;
  border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
  background-color: #ff96ce;
  transform: rotate(26deg);
}

.nose_kong_left {
width: 12px;
  height: 12px;
  top: 179px;
  left: 93px;
  border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
  background-color: #da6c9b;
  z-index: 104;
}
.nose_kong_right {
width: 12px;
  height: 12px;
  top: 182px;
  left: 109px;
  border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
  background-color: #da6c9b;
  z-index: 104;
}

.ear_left {
  width: 24px;
  height: 52px;
  top: 126px;
  left: 226px;
  border: 6px solid #ef96c2;
  border-radius: 50% 50% 50% 50%/ 35% 40% 50% 50%;
  background-color: #ffb3da;
  z-index: 99;
  transform: rotate(18deg);
}
.ear_right {
width: 24px;
  height: 52px;
  top: 150px;
  left: 280px;
  border: 6px solid #ef96c2;
  border-radius: 50% 50% 50% 50%/ 35% 40% 50% 50%;
  background-color: #ffb3da;
  z-index: 99;
  transform: rotate(36deg);
}

/*
 * make pig body
 */
.pig_body_bottom {
width: 215px;
  height: 197px;
  top: 305px;
  left: 108px;
  border: 6px solid #e33b32;
  border-radius: 50% 50% 50% 50%/ 100% 100% 0% 0%;
  background-color: #eb5b50;
  z-index: 99;
}


/*
 * make pig head
 */
.hand_left_middle {
width: 78px;
  height: 12px;
  top: 432px;
  left: 63px;
  border-radius: 100% 100% 100% 17%/ 100% 90% 16% 90%;
  background-color: #ffbadf;
  z-index: 99;
  transform: rotate(-35deg);
}
.hand_left_top {
width: 28px;
  height: 9px;
  top: 415px;
  left: 63px;
  border-radius: 100% 100% 100% 35%/ 100% 90% 16% 90%;
  background-color: #ffbadf;
  z-index: 99;
}
.hand_left_bottom {
    width: 20px;
  height: 9px;
  top: 420px;
  left: 93px;
  border-radius: 60% 59% 65% 90%/ 100% 90% 89% 90%;
  background-color: #ffbadf;
  z-index: 99;
  transform: rotate(98deg);
}

.hand_right_middle {
    width: 79px;
  height: 11px;
  top: 374px;
  left: 309px;
  border-radius: 100% 100% 15% 17%/ 99% 92% 90% 90%;
  background-color: #ffbadf;
  z-index: 99;
  transform: rotate(28deg);
}
.hand_right_top {
width: 28px;
  height: 10px;
  top: 397px;
  left: 350px;
  border-radius: 100% 100% 15% 17%/ 99% 92% 90% 90%;
  background-color: #ffbadf;
  z-index: 99;
  transform: rotate(-7deg);
}
.hand_right_bottom {
width: 28px;
  height: 11px;
  top: 395px;
  left: 356px;
  border-radius: 100% 100% 62% 17%/ 99% 92% 90% 90%;
  background-color: #ffbadf;
  z-index: 99;
  transform: rotate(69deg);
}

/*
 * make left foot
 */
.left_foot {
    width: 11px;
  height: 52px;
  top: 507px;
  left: 175px;
  border-radius: 100% 100% 100% 100%/ 50% 50% 21% 20%;
  background-color: #ffbadf;
  z-index: 99;
}
.left_shoes {
    width: 51px;
  height: 14px;
  top: 553px;
  left: 138px;
  border-radius: 58% 187% 180% 50%/ 130% 123% 113% 100%;
  background-color: #000;
  z-index: 99;
  transform: rotate(0deg);
}

/*
 * make right foot
 */
.right_foot {
left: 268px;
}
.right_shoes {
left: 230px;
}

/*
 * give a shadow
 */
.pig_shadow {
width: 240px;
  height: 47px;
  top: 535px;
  left: 101px;
  border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
  background-color: rgba(171, 171, 171, 0.7);
  transform: rotate(-1deg);
}


/*
 * tail
 */
.tail_left {
width: 19px;
  height: 8px;
  top: 472px;
  left: 330px;
  border-radius: 50% 50% 50% 50%/ 0% 0% 100% 100%;
  transform: rotate(-9deg);
  background-color: #ffbadf;
  z-index: 99;
}
.tail_left_blank {
width: 30px;
  height: 15px;
  top: 466px;
  left: 332px;
  border-radius: 50% 50% 50% 50%/ 0% 0% 100% 100%;
  transform: rotate(-36deg);
  background-color: #fff;
  z-index: 99;
}
.tail_right {
width: 21px;
  height: 5px;
  top: 451px;
  left: 343px;
  border-radius: 0% 0% 51% 50%/ 0% 0% 100% 100%;
  transform: rotate(31deg);
  background-color: #fff;
  z-index: 99;
  border: 8px solid #ffbadf;
  border-top-color: #fff;
}
.tail_blank {
width: 36px;
  height: 21px;
  top: 437px;
  left: 351px;
  transform: rotate(34deg);
  background-color: #fff;
  z-index: 99;
}
.tail_middle {
width: 7px;
  height: 11px;
  top: 450px;
  left: 336px;
  border: 8px solid #ffbadf;
  border-radius: 50% 50% 50% 50%/ 50% 50% 50% 50%;
  background-color: #fff;
  z-index: 99;
}
.tail_circle {
width: 17px;
  height: 8px;
  top: 475px;
  left: 358px;
  border-radius: 36% 37% 62% 63%/ 99% 92% 90% 90%;
  background-color: #ffbadf;
  z-index: 99;
  transform: rotate(-40deg);
}

/*
 * Ok, there is a peppa
 */
`

  writeCode('', code)
})()