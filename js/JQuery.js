$(function () {

	/* Smooth scroll */
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;


		$("html, body").animate({
			scrollTop: blockOffset
		}, 1500);
	});


	/* Parallax */
	$(window).scroll(function () {

		var st = $(this).scrollTop();

		$(".intro-container").css({
			"transform": "translate(0%, " + st / 7 + "%"
		});

	});



	/* 3D карточки */
	const cards = document.querySelectorAll('.card');

	for (let i = 0; i < cards.length; i++) {
		const card = cards[i];
		card.addEventListener('mousemove', startRotate);
		card.addEventListener('mouseout', stopRotate);
	}


	function startRotate(event) {
		const cardItem = this.querySelector('.card_item');
		const halfHeight = cardItem.offsetHeight / 1;
		cardItem.style.transform = 'rotateX(' + -(event.offsetY -
			halfHeight) / 30 + 'deg) rotateY(' + -(event.offsetX -
			halfHeight) / 30 + 'deg)';
	}

	function stopRotate(event) {
		const cardItem = this.querySelector('.card_item');
		cardItem.style.transform = 'rotate(0)';

	}

	/* Header menu */
	$("#burger_menu").on("click", function (event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#menu_nav").toggleClass("active");
		$("body").toggleClass('no-scroll');

	});

	/* Remove Header menu */
	$(".menu-nav__inner").on("click", function (event) {
		event.preventDefault();

		$(".menu-nav").removeClass("active");
		$("body").removeClass('no-scroll');
		$("#burger_menu").removeClass("active");


	});


	/*bady-arrow*/
	const scrollBtn = $('.bady-arrow');

	/*По скролу скрываем или показываем кнопку*/
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1200) {
			scrollBtn.fadeIn();
		} else {
			scrollBtn.fadeOut();
		}
	})
	/*Клик по кнопке*/
	scrollBtn.click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
		return false;
	})





	/* Slider1*/
	const Slider1 = $(".slider");
	Slider1.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 9000,
		loop: true,
		dotsContainer: ('.dots-intro'),
		mouseDrag: false,
		touchDrag: false,
		animateOut: 'fadeOut',
		responsive: {
			0: {
				dotsEach: 2,
			},
			450: {

			},
		}

	});


	/* Slider2*/
	const Slider2 = $(".slider2");
	Slider2.owlCarousel({
		items: 1,
		smartSpeed: 1000,
		dots: true,
		autoplay: true,
		autoplayTimeout: 7000,
		autoplayHoverPause: true,
		loop: true,

	});
	$('#slider2_left').click(function () {
		console.log('Left');
		Slider2.trigger('prev.owl.carousel');
	})

	$('#slider2_right').click(function () {
		console.log('Right');
		Slider2.trigger('next.owl.carousel');
	});


	/* Slider 3*/
	const Slider3 = $(".slider3");
	Slider3.owlCarousel({
		items: 3,
		smartSpeed: 500,
		//		autoplay: true,
		//		autoplayTimeout: 8000,
		//		autoplayHoverPause: true,
		loop: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 25,
			},
			400: {
				items: 1,
                stagePadding: 40,
			},
            500: {
				items: 2,
			},
			750: {

			},
		}

	});
   $('#slider3_left').click(function () {
		console.log('Left');
		Slider3.trigger('prev.owl.carousel');
	});

	/* Modal-popup */
	const modalCall = $("[data-modal]");
	const modalClose = $("[data-close]");
	// открыть по кнопке
	modalCall.on("click", function (event) {
		event.preventDefault();
		let $this = $(this);
		let modalId = $this.data('modal');
		$(modalId).addClass('show');
		$("body").addClass('no-scroll');
	});

	// закрыть на крестик
	modalClose.on("click", function (event) {
		event.preventDefault();
		let $this = $(this);
		let modalParent = $this.parents('.forma-price');
		modalParent.removeClass('show');
		$("body").removeClass('no-scroll');
	});


	// закрыть по клику вне окна
	$(".forma-price").on("click", function (event) {
		let $this = $(this);
		$this.removeClass('show');
		$("body").removeClass('no-scroll');
	});
	$(".forma-modal").on("click", function (event) {
		event.stopPropagation();
	});



});
