function btn_swiper() {
	var id = $(this).prop("id")
	var id1 = parseInt(id)
	change_swiper(id1)
}

function auto_swiper() {
	change_swiper(swiper_num + 1)
}

function change_swiper(num) {
	// 去掉当前的 的current 属性
	change_current()
	if (num > 4) {
		num = 0;
	}
	swiper_num = num
	var distance = -swiper_num * 1920
	// var j = distance.toString()
	var k = "translate3d(" + distance.toString() + "px,0,0)"
	$(".swiper-wrapper").css("transform", k)

	change_current()
}

function change_current() {
	switch (swiper_num) {
		case 0:
			{
				$(".swiper-pagination-switch:eq(0)").toggleClass("current")
				break;
			}
		case 1:
			{
				$(".swiper-pagination-switch:eq(1)").toggleClass("current")
				break;
			}
		case 2:
			{
				$(".swiper-pagination-switch:eq(2)").toggleClass("current")
				break;
			}
		case 3:
			{
				$(".swiper-pagination-switch:eq(3)").toggleClass("current")
				break;
			}
		case 4:
			{
				$(".swiper-pagination-switch:eq(4)").toggleClass("current")
				break;
			}
		default:
			{
				break;
			}
	}
}
