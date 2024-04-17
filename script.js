document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting by default

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const validUsername = "28301"; // Set the valid username
        const validPassword = "28301"; // Set the valid password

        if (username === validUsername && password === validPassword) {
            loginSuccess();
        } else {
            loginError();
        }
    });
});

function loginSuccess() {
    let countdown = 3; // Countdown time in seconds

    Swal.fire({
        title: 'สำเร็จ!',
        html: 'เข้าสู่ระบบสำเร็จ! กำลังเปลี่ยนเส้นทางใน <strong id="countdown">' + countdown + '</strong> วินาที',
        icon: 'success',
        timer: countdown * 1000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timerInterval = setInterval(() => {
                countdown -= 1;
                document.getElementById('countdown').textContent = countdown;
                if (countdown <= 0) {
                    clearInterval(timerInterval);
                }
            }, 1000);
        },
        willClose: () => {
            window.location.href = 'main.html'; // Redirect to main page
        }
    });
}

function loginError() {
    Swal.fire({
        title: 'ข้อผิดพลาด!',
        text: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!',
        icon: 'error',
        confirmButtonText: 'ลองอีกครั้ง'
    });
}

// Additional functions can be added here as needed