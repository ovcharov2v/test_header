document.addEventListener('DOMContentLoaded', () => {
	const subLinkList = document.querySelectorAll('.mobile-menu__elem--with-sub-menu');
	subLinkList.forEach((subLink) => {
		subLink.addEventListener('click', () => {
			subLink.classList.toggle('mobile-menu__elem--opened');
		})
	})
})
