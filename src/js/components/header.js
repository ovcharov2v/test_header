document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('.header');
	const showMenuBtn = document.querySelector('.js-show-menu');
	const mobileDrawer = document.querySelector('.mobile-drawer');
	const mobileDrawerBackdrop = document.querySelector('.mobile-drawer__backdrop');

	const hideMobileMenu = () => {
		document.body.classList.remove('mobile-menu-opened');
		header.classList.remove('header--hide-logo');
		showMenuBtn.classList.remove('header__show-menu-btn--cross');
		mobileDrawer.classList.remove('mobile-drawer--opened');
		setTimeout(() => {
			mobileDrawer.classList.remove('mobile-drawer--opening');
		}, 100);
	}

	mobileDrawerBackdrop.addEventListener('click', hideMobileMenu);

	showMenuBtn.addEventListener('click', () => {
		if (document.body.classList.contains('mobile-menu-opened')) {
			hideMobileMenu();
		}
		else {
			document.body.classList.add('mobile-menu-opened');
			header.classList.add('header--hide-logo');
			showMenuBtn.classList.add('header__show-menu-btn--cross');
			showMenuBtn.classList.add('header__show-menu-btn--cross');
			mobileDrawer.classList.add('mobile-drawer--opening');
			setTimeout(() => {
				mobileDrawer.classList.add('mobile-drawer--opened');
			}, 100);
		}
	});
})
