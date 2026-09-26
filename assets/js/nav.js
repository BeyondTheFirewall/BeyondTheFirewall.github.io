// Accessible mobile nav toggle. No dependencies.
document.addEventListener('DOMContentLoaded', function () {
	var header = document.getElementById('header');
	var toggle = header ? header.querySelector('.nav-toggle') : null;
	var links = header ? header.querySelector('.header-links') : null;

	if (!header || !toggle || !links) {
		return;
	}

	function closeNav() {
		header.classList.remove('nav-open');
		toggle.setAttribute('aria-expanded', 'false');
	}

	function toggleNav() {
		var isOpen = header.classList.toggle('nav-open');
		toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
	}

	toggle.addEventListener('click', toggleNav);

	links.querySelectorAll('a').forEach(function (link) {
		link.addEventListener('click', closeNav);
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') {
			closeNav();
		}
	});

	document.addEventListener('click', function (e) {
		if (header.classList.contains('nav-open') && !header.contains(e.target)) {
			closeNav();
		}
	});
});
