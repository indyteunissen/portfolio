const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle?.addEventListener('click', () => {
	const isOpen = siteNav.classList.toggle('is-open');
	menuToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav?.querySelectorAll('a').forEach((link) => {
	link.addEventListener('click', () => {
		siteNav.classList.remove('is-open');
		menuToggle?.setAttribute('aria-expanded', 'false');
	});
});

document.querySelectorAll('.filter-button').forEach((button) => {
	button.addEventListener('click', () => {
		document.querySelectorAll('.filter-button').forEach((item) => item.classList.remove('is-selected'));
		button.classList.add('is-selected');

		const filter = button.dataset.filter;
		document.querySelectorAll('.project-card').forEach((card) => {
			card.hidden = filter !== 'all' && card.dataset.category !== filter;
		});
	});
});
