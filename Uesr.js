function getUserCredentials() {
    var correctUsername = "1DAYfree"; // اسم المستخدم الصحيح
    var correctPassword = "1DAYfree";  // كلمة المرور الصحيحة

    while (true) {
        var username = prompt("ENTER USERNAME:");
        var password = prompt("ENTER PASSWORD");

        if (username && password) {
            if (username === correctUsername && password === correctPassword) {
                alert(‘welcome to panel SLECET7z (1DAY)’);
                break; // الخروج من الحلقة إذا كانت المدخلات صحيحة
            } else {
                alert("PASSWORD OR USERNAME INCORRECT");
            }
        } else {
            alert("YOU DIDNT ENTER passwoord OR username");
        }
    }
}

getUserCredentials();
