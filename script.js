'use strict';

//Could use e.target and event delegation for performance
const navigationSmoothScroll = function () {
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			const targetId = this.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				//Finding the distance to account for the fixed navigation bar
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
