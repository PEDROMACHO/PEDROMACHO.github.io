document.addEventListener('DOMContentLoaded', function () {
	const fileSec = document.querySelector('.file-view-sec');
	fileSec.addEventListener('click', function () {
		let real = document.querySelector('.input-hide-sec');
		real.click();
	});

	const burger = document.querySelector('.nav-burger');
	burger.addEventListener('click', function () {
		let menu = document.querySelector('.nav-main-item');
		if (!menu.classList.contains('nav-menu-active')) {
			menu.classList.add('nav-menu-active');
			this.classList.add('burger-active');
		} else {
			menu.classList.remove('nav-menu-active');
			this.classList.remove('burger-active');
		}
	});
});