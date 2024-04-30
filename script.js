const themeToggle = document.getElementById('themeToggle') // Получаем элемент переключателя

themeToggle.addEventListener('change', function () {
	// Добавляем обработчик события для изменения состояния переключателя
	Toggle() // Вызываем функцию Toggle при изменении состояния переключателя
})

const Toggle = () => {
	// Определяем функцию Toggle
	document.body.classList.toggle('DarkBody')
	// Если нужно, можно добавить следующие строки, чтобы переключать классы для других элементов:
	// document.getElementById('btnToggle').classList.toggle('DarkBtn');
	// document.getElementById('MoonAndSun').classList.toggle('Moon');
}
