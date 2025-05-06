document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('signin-form');
    form.addEventListener('submit', function (e) {
        const email = form.email.value.trim();
        const password = form.password.value.trim();

        // 不管有沒有輸入，都顯示錯誤視窗
        alert("錯誤：請檢查您的 Email 和密碼！");

        // 阻止表單送出，網址不變
        e.preventDefault();
    });
});
