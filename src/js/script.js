document.addEventListener('DOMContentLoaded', function () {
	const navLink = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')

	navLink.forEach(link => link.addEventListener('click', () => navList.classList.toggle('show')))
})
