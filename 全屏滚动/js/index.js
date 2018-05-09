var onePage = $('.first');
var twoPage = $('.terrace');
var threePage = $('.sponsor');
var fourPage = $('.helper');
var fivePage = $('.user');
var sixPage = $('.datas');
$('#dowebok').fullpage({
	anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
	navigation: true,
	navigationPostion: 'right',
	scrollingSpeed: 1000,
	afterLoad: function(anchorLink, index) {
		if(index == 1) {
			onePage.find('.first-left').animate({
				bottom: '2%',
				right: '0%'
			}, 1000, 'easeOutExpo');
			onePage.find('.first-right').animate({
				bottom: '2%',
				left: '0%'
			}, 1000, 'easeOutExpo');
			onePage.find('.tuiguang').animate({
				top: '30%'
			}, 1000, 'easeOutQuad');
			onePage.find('.shijian').animate({
				bottom: '50%'
			}, 1200, 'easeOutQuad');
			onePage.find('.fabu').animate({
				bottom: '30%'
			}, 1200, 'easeOutQuad');
		}
		if(index == 2) {
			twoPage.find('.pingtai,.pingtai img').animate({
				opacity: 1
			}, 0, 'easeOutExpo').addClass('changeBig');
			twoPage.find('.terrace-left,.terrace-right').animate({
				opacity: 1,
				left: '50%'
			}, 2000, 'easeOutExpo');
		}
		if(index == 3) {
			threePage.find('.sponsor-h2').animate({
				opacity: 1,
				top: '20%'
			}, 2000, 'easeOutExpo');
			threePage.find('.sponsor-text').animate({
				opacity: 1,
				top: '30%'
			}, 2000, 'easeOutExpo');
			threePage.find('.sponsor-people').animate({
				opacity: 1,
				top: '8%'
			}, 2000, 'easeOutExpo');
		};
		if(index == 4) {
			fourPage.find('.helper-circle').addClass('changeBig');
			fourPage.find('.helper-zone').animate({
				opacity: 1,
				top: '8%'
			}, 2000, 'easeOutExpo');
			fourPage.find('.helper-sina').animate({
				opacity: 1,
				top: '8%'
			}, 2000, 'easeOutExpo');
			fourPage.find('.helper-h2').animate({
				top: '19%',
				opacity: 1,
			}, 1000, 'easeOutExpo');
			fourPage.find('.helper-text').animate({
				top: '30%',
				opacity: 1,
			}, 1000, 'easeOutExpo');
			fourPage.find('.helper-people').animate({
				opacity: 1,
				top: '8%'
			}, 2000, 'easeOutExpo');
		};
		if(index == 5) {
			fivePage.find('.sponsor-h2').animate({
				opacity: 1,
				top: '20%'
			}, 2000, 'easeOutExpo');
			fivePage.find('.sponsor-text').animate({
				opacity: 1,
				top: '30%'
			}, 2000, 'easeOutExpo');
			fivePage.find('.sponsor-people').animate({
				opacity: 1,
				top: '8%'
			}, 2000, 'easeOutExpo');
			fivePage.find('.sponsor-user,.sponsor-mouse').animate({
				opacity: 1,
				left: '10%'
			}, 2000, 'easeOutExpo');
			fivePage.find('.sponsor-circle').animate({
				opacity: 1
			}, 0, 'easeOutExpo').addClass('changeBig');
		};
		if(index == 6) {
			sixPage.find('.datas-left').animate({
				opacity: 1
			}, 0, 'easeOutExpo').addClass('changeBig');
			sixPage.find('.helper-h2').animate({
				top: '19%',
				opacity: 1,
			}, 1000, 'easeOutExpo');
			sixPage.find('.helper-text').animate({
				top: '28%',
				opacity: 1,
			}, 1000, 'easeOutExpo');
			sixPage.find('.datas-people').animate({
				opacity: 1,
				top: '10%'
			}, 2000, 'easeOutExpo');
		}
	},
	onLeave: function(index, direction) {
		if(index == 1) {
			onePage.find('.first-left,.first-right').delay(100).animate({
				bottom: '-50%'
			}, 1000, 'easeOutExpo');
			onePage.find('.tuiguang').delay(100).animate({
				top: '-10%'
			}, 1000, 'easeOutExpo');
			onePage.find('.shijian').delay(100).animate({
				bottom: '-10%'
			}, 900, 'easeOutExpo');
			onePage.find('.fabu').delay(10).animate({
				bottom: '-12%'
			}, 500, 'easeOutQuad');
		}
		if(index == 2) {
			twoPage.find('.pingtai,.pingtai img').animate({
				opacity: .3
			}, 0, 'easeOutExpo').removeClass('changeBig');
			twoPage.find('.terrace-left,.terrace-right').animate({
				opacity: 0,
				left: '45%'
			}, 1000, 'easeOutExpo');
		}
		if(index == 3) {
			threePage.find('.sponsor-h2').animate({
				opacity: 0,
				top: '2%'
			}, 1000, 'easeOutExpo');
			threePage.find('.sponsor-text').animate({
				opacity: 0,
				top: '12%'
			}, 1000, 'easeOutExpo');
			threePage.find('.sponsor-people').animate({
				opacity: 0,
				top: '2%'
			}, 1000, 'easeOutExpo');
		}
		if(index == 4) {
			fourPage.find('.helper-circle').removeClass('changeBig');
			fourPage.find('.helper-zone').animate({
				opacity: 1,
				top: '60%'
			}, 1000, 'easeOutExpo');
			fourPage.find('.helper-sina').animate({
				opacity: 1,
				top: '-40%'
			}, 1000, 'easeOutExpo');
			fourPage.find('.helper-h2').animate({
				top: '9%',
				opacity: 0,
			}, 1000, 'easeOutExpo');
			fourPage.find('.helper-text').animate({
				top: '20%',
				opacity: 0,
			}, 1000, 'easeOutExpo');
			fourPage.find('.helper-people').animate({
				opacity: 0,
				top: '15%'
			}, 1000, 'easeOutExpo');
		}
		if(index == 5) {
			fivePage.find('.sponsor-h2').animate({
				opacity: 0,
				top: '2%'
			}, 1000, 'easeOutExpo');
			fivePage.find('.sponsor-text').animate({
				opacity: 0,
				top: '12%'
			}, 1000, 'easeOutExpo');
			fivePage.find('.sponsor-people').animate({
				opacity: 0,
				top: '2%'
			}, 1000, 'easeOutExpo');
			fivePage.find('.sponsor-user,.sponsor-mouse').animate({
				opacity: 1,
				left: '70%'
			}, 1000, 'easeOutExpo');
			fivePage.find('.sponsor-circle').animate({
				opacity: 0
			}, 1000, 'easeOutExpo').removeClass('changeBig');
		};
		if(index == 6) {
			sixPage.find('.datas-left').animate({
				opacity: 0
			}, 0, 'easeOutExpo').removeClass('changeBig');
			sixPage.find('.helper-h2').animate({
				top: '9%',
				opacity: 0,
			}, 1000, 'easeOutExpo');
			sixPage.find('.helper-text').animate({
				top: '20%',
				opacity: 0,
			}, 1000, 'easeOutExpo');
			sixPage.find('.datas-people').animate({
				opacity: 1,
				top: '15%'
			}, 1000, 'easeOutExpo');
		}
	}

});

threePage.on('mousemove', function(e) {
	var offsetX = e.clientX || window.innerWidth - 0.5,
		offsetY = e.clientY || window.innerHeight - 0.5;
	console.log(offsetX)
	$('.sponsor .layer2').css('left', 80 + 55 * offsetX / 1000).css('top', 70 + 40 * offsetY / 1000);
	$('.sponsor .layer3').css('left', 60 + 40 * offsetX / 1000).css('top', 40 + 20 * offsetY / 1000);
	$('.sponsor .layer4').css('left', 60 + 60 * offsetX / 1000).css('top', 50 + 30 * offsetY / 1000);
});

//fourPage.on('mousemove', function(e) {
//	var offsetX = e.clientX || window.innerWidth - 0.5,
//		offsetY = e.clientY || window.innerHeight - 0.5;
//	console.log(offsetX)
//	$('.helper .layer2').css('left', 80 + 40 * offsetX / 1100).css('top', 70 + 40 * offsetY / 1000);
//	$('.helper .layer3').css('left', 60 + 30 * offsetX / 1100).css('top', 40 + 20 * offsetY / 1000);
//});