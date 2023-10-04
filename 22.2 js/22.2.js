function toggleImage() {
            var checkbox = document.getElementById('showImage');
            var image = document.getElementById('image');

            if (checkbox.checked) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        }