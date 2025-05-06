document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('signin-form');
    form.addEventListener('submit', function (e) {
        const email = form.email.value.trim();
        const password = form.password.value.trim();

        if (!email || !password) {
            alert("請輸入 Email 與密碼");
            e.preventDefault();
        }
    });
});
