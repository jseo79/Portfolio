'use strict';

const navigationSmoothScroll = function () {
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			console.log(anchor);

			const targetId = this.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				const navbarHeight =
					document.querySelector('.navbar').offsetHeight;
				const targetOffset = targetElement.offsetTop - navbarHeight;

				window.scrollTo({
					top: targetOffset,
					behavior: 'smooth',
				});
			}
		});
	});
};

navigationSmoothScroll();
