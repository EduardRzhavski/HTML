document.addEventListener('DOMContentLoaded', function () {
    const introductionDiv = document.getElementById('introduction');

    function appendParagraph(text) {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        introductionDiv.appendChild(paragraph);
    }

    const name = 'Eduard';
    const yearsOfExperience = '3 years';

    appendParagraph(`Hello, I'm ${name}, a passionate full-stack developer with ${yearsOfExperience} of experience.`);
    appendParagraph(`My expertise includes front-end development using HTML, CSS, and JavaScript to build interactive and user-friendly interfaces.`);
    appendParagraph(`On the back-end, I am proficient in server-side programming languages such as Node.js and I have experience working with databases like MongoDB.`);
    appendParagraph(`If you'd like to connect, please feel free to reach out to me at emaster.eddie@gmail.com.`);
});