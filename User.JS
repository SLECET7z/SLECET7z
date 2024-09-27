function getUserCredentials() {
    var correctUsername = « ZED7z»; // اسم المستخدم الصحيح
    var correctPassword = « +216»; // كلمة المرور الصحيحة

    while (true) {
        var username = prompt(« 𝘌𝘯𝘵𝘦𝘳 𝘜𝘴𝘦𝘳𝘯𝘢𝘮𝘦 : »);
        var password = prompt(« 𝘌𝘯𝘵𝘦𝘳 𝘗𝘢𝘴𝘴𝘸𝘰𝘳𝘥 : »);

        if (username && password) {
            if (username === correctUsername && password === correctPassword) {
                alert(« Walcom To  ZED7z Panel ⇰ (1 DAY ) « );
                break; // الخروج من الحلقة إذا كانت المدخلات صحيحة
            } else {
                alert(« The Passwoord Or Username is Error »);
            }
        } else {
            alert(« You Didn’t Enter Passwoord Or Username « );
        }
    }
}

getUserCredentials();
