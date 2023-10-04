function showCongrats() {
    alert('Congratulations! You successfully sent this form.');
    document.getElementById('userForm').reset();
    document.getElementById('confirmation').style.display = 'none';
}

function changeInfo() {
    document.getElementById('confirmation').style.display = 'none';
    document.getElementById('userForm').style.display = 'block';
}

document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    document.getElementById('confirmName').textContent = name;
    document.getElementById('confirmAge').textContent = age;
    document.getElementById('confirmEmail').textContent = email;

    document.getElementById('confirmation').style.display = 'block';
    document.getElementById('userForm').style.display = 'none';
});