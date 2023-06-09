tailwind.config = {
	theme: {
		extend: {
			colors: {
				whitegray: 'rgba(102, 102, 102, 1)',
				gray: ' rgba(102, 102, 102, 0.2)',
				black: 'rgba(30, 30, 30, 1)',
				'videos-1': "rgba(0, 0, 0, 0.5)",

			},
			padding: {
				'8': '32px',
			}
		},
		spacing: {
			'1': '10px',
			'1-2': '12px',
			'1-5': '15px',
			'2': '20px',
			'14': '50px',
		},
		fontSize: {
			sm: '12px',
			base: '14px',
			xl: '20px',
			xxl: '36px'
		},
		colors: {
			'main-bc': ' rgba(213, 230, 240, 0.2);',
		},
		backgroundImage: {
			'videos-1': "url('images/videos-main-1.png')",
			'videos-2': "url('images/videos-main-2.png')",
		}

	}
}

const openDropdown = document.querySelectorAll('.open-dropdown'),
	dropdown = document.querySelectorAll('.dropdown-box'),
	bottomArow = document.querySelectorAll('.bottom-arow');

openDropdown.forEach((btn, index) => {
	btn.addEventListener('click', (e) => {
		dropdown.forEach((item, itemIndex) => {
			if (itemIndex == index) {
				item.classList.toggle('active');
			} else {
				item.classList.remove('active');
			}
		})
		bottomArow.forEach((item, itemIndex) => {
			if (itemIndex == index) {
				item.classList.toggle('active');
			} else {
				item.classList.remove('active');
			}
		})
	})
})
console.log(openDropdown);
console.log(dropdown);
// openDropdown.forEach((btn, index) => {
// 	btn.addEventListener('click', (e) => {
// 		dropdown.forEach((item, itemIndex) => {
// 				item.classList.toggle('active')
// 		})
// 		bottomArow.forEach((item, itemIndex) => {
// 			if (itemIndex != index) {
// 				item.classList.toggle('active')
// 			}
// 		})
// 	})
// })