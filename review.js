const allStar = document.querySelectorAll('.rating .star');
const ratingValue = document.querySelector('.rating input');
const form = document.getElementById('reviewForm');
const cancelBtn = document.querySelector('.btn.cancel');
const submitBtn = document.querySelector('.btn.submit');
const thankYouMessage = document.getElementById('thankYouMessage');

const openModalBtn = document.getElementById('openReviewModal');
const closeModalBtn = document.getElementById('closeModal');
const reviewModal = document.getElementById('reviewModal');

// Open modal
openModalBtn.addEventListener('click', function () {
	reviewModal.classList.add('show');
});

// Close modal
closeModalBtn.addEventListener('click', function () {
	reviewModal.classList.remove('show');
});

// Star rating functionality
allStar.forEach((item, idx) => {
	item.addEventListener('click', function () {
		let click = 0;
		ratingValue.value = idx + 1;

		allStar.forEach(i => {
			i.classList.replace('bxs-star', 'bx-star');
			i.classList.remove('active');
		});
		for (let i = 0; i < allStar.length; i++) {
			if (i <= idx) {
				allStar[i].classList.replace('bx-star', 'bxs-star');
				allStar[i].classList.add('active');
			} else {
				allStar[i].style.setProperty('--i', click);
				click++;
			}
		}
	});
});

// Form submission (submit button)
submitBtn.addEventListener('click', function (e) {
	e.preventDefault();  // Prevent form submission (to avoid page reload)

	// Show the thank-you message with smooth transition
	thankYouMessage.classList.add('show');

	// Optionally, you could clear the form after showing the thank-you message
	setTimeout(() => {
		// Hide the thank you message after 3 seconds
		thankYouMessage.classList.remove('show');
		reviewModal.classList.remove('show'); // Close the modal
		document.querySelector('textarea').value = ''; // Clear the textarea
		ratingValue.value = ''; // Reset the rating
		allStar.forEach(star => star.classList.replace('bxs-star', 'bx-star')); // Reset stars
	}, 3000); // Hide after 3 seconds
});

// Cancel button
cancelBtn.addEventListener('click', function () {
	document.querySelector('textarea').value = ''; // Clear the textarea
	ratingValue.value = ''; // Reset the rating
	allStar.forEach(star => star.classList.replace('bxs-star', 'bx-star')); // Reset stars
	thankYouMessage.classList.remove('show'); // Hide the thank you message if any
	reviewModal.classList.remove('show'); // Close the modal if canceled
});
