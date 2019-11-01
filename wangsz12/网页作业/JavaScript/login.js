function getAccount() {
    document.getElementById("get").innerHTML="获取成功";
    document.getElementById("account").value="guest";
    document.getElementById("pass").value="123456";
}

function login() {
    var username, userpassword, useridentity;
    username = document.getElementById("account").value;
    userpassword = document.getElementById("pass").value;
    useridentity = document.getElementsByName("iden");
    if (isEmpty(username)) {
        alert("请输入用户名！");
        return;
    }
    if (isEmpty(userpassword)) {
        alert("请输入密码！");
        return;
    }
    if (!isAccountAndPasswordCorrect(username, userpassword)) {
        alert("用户名或密码错误");
    }
    else if (!isIdentityCorrect(useridentity)) {
        alert("身份错误！请重新选择");
    }
    else {
        alert("欢迎访问！");
        window.location.href = "pages/index.html";
    }
}

//以下代码致敬陕西普通话成绩查询网 "HTMLSQL"
function isAccountAndPasswordCorrect(name, pwd) {
    if (name != "guest") return false;
    if (pwd != "123456") return false;
    return true;
}

function isIdentityCorrect(iden) {
    for (var i = 0; i < iden.length; i++) {
        if (iden[i].checked) {
            if (iden[i].value == "guest") return true;
            return false;
        }
    }
}

function isEmpty(a) {
    return a == "";
}