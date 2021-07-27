var x = 0;
function themechange() {
    var body = document.getElementsByTagName('body');
    var test = document.getElementById('test');
    var git = document.getElementById('git');
    var code = document.getElementById('code');
    var chef = document.getElementById('chef');
    var hack = document.getElementById('hack');
    var fb = document.getElementById('fb');
    var insta = document.getElementById('insta');
    var linkedin = document.getElementById('linkedin');
    var devfolio = document.getElementById('devfolio');
    var cards = document.getElementsByClassName('card');
    var list_grp = document.getElementsByClassName('list-group-item');
    var theme = document.getElementById('themee');
    var dropdown = document.getElementsByClassName('dropdown-aa');
    var search = document.getElementsByClassName('form-control');
    var load = document.getElementById('loading');
    var button = document.getElementsByClassName('btn-outline-primary');
    var button2 = document.getElementsByClassName('btn-outline-success');
    var button3 = document.getElementsByClassName('btn-outline-danger');
    var button4 = document.getElementsByClassName('btn-outline-dark');
    // var m = document.getElementsByClassName('d-flex input:focus');
    if (x % 2 == 0) {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.backgroundColor = "#000";
            cards[i].style.border = "1px solid #383d40";
        }
        // Make theme Dark
        load.style.backgroundColor = "#000";
        theme.innerText = "Light Theme";
        test.style.backgroundColor = "#272a2c";
        test.style.color = "#d1cdc7";
        git.style.color = "#d1cdc7";
        code.style.color = "#d1cdc7";
        chef.style.color = "#d1cdc7";
        hack.style.color = "#d1cdc7";
        fb.style.color = "#d1cdc7";
        insta.style.color = "#d1cdc7";
        linkedin.style.color = "#d1cdc7";
        devfolio.style.color = "#d1cdc7";
        body[0].style.backgroundColor = "#000";
        body[0].style.color = "#e8e6e3";
        for (let i = 0; i < list_grp.length; i++) {
            list_grp[i].style.backgroundColor = "#272a2c";
            list_grp[i].style.color = "#d1cdc7";
        }
        for (let i = 0; i < dropdown.length; i++) {
            dropdown[i].style.backgroundColor = "#000";
            dropdown[i].style.color = "#e8e6e3";
        }
        for (let i = 0; i < search.length; i++) {
            const element = search[i];
            element.style.backgroundColor = "#000";
            element.style.border = "1px solid #3c4144";
        }
        for (let i = 0; i < button.length; i++) {
            const element = button[i];
            element.classList.remove('btn-primary');
            element.classList.add('btn-outline-primary');
        }
        for (let i = 1; i < button2.length; i++) {
            const element = button2[i];
            element.classList.add('btn-outline-success');
            if (x > 1)
                element.classList.remove('btn-success');
        }
        for (let i = 0; i < button3.length; i++) {
            const element = button3[i];
            element.classList.remove('btn-danger');
            element.classList.add('btn-outline-danger');
        }
        for (let i = 0; i < button4.length; i++) {
            const element = button4[i];
            element.classList.remove('btn-dark');
            element.classList.add('btn-outline-dark');
        }
    }
    else {
        // Make theme Light
        for (let i = 0; i < button.length; i++) {
            const element = button[i];
            element.classList.remove('btn-outline-primary');
            element.classList.add('btn-primary');
        }
        for (let i = 1; i < button2.length; i++) {
            const element = button2[i];
            element.classList.remove('btn-outline-success');
            element.classList.add('btn-success');
        }
        for (let i = 0; i < button3.length; i++) {
            const element = button3[i];
            element.classList.remove('btn-outline-danger');
            element.classList.add('btn-danger');
        }
        for (let i = 0; i < button4.length; i++) {
            const element = button4[i];
            element.classList.remove('btn-outline-dark');
            element.classList.add('btn-dark');
        }
        load.style.backgroundColor = "#fff";
        theme.innerText = "Dark Theme";
        test.style.backgroundColor = "#fff";
        test.style.color = "#212529";
        git.style.color = "#35393d";
        code.style.color = "#35393d";
        chef.style.color = "#35393d";
        hack.style.color = "#35393d";
        fb.style.color = "#35393d";
        insta.style.color = "#35393d";
        linkedin.style.color = "#35393d";
        devfolio.style.color = "#35393d";
        body[0].style.backgroundColor = "#fff";
        body[0].style.color = "#212529";
        for (let i = 0; i < list_grp.length; i++) {
            list_grp[i].style.backgroundColor = "#ffffff";
            list_grp[i].style.color = "#212529";
        }
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.backgroundColor = "#fff";
            cards[i].style.border = "1px solid #dfdfdf";
        }
        for (let i = 0; i < dropdown.length; i++) {
            dropdown[i].style.backgroundColor = "#fff";
            dropdown[i].style.color = "#212529";
        }
        for (let i = 0; i < search.length; i++) {
            const element = search[i];
            element.style.backgroundColor = "#fff";
            element.style.border = "1px solid #ced4da";
        }
    }

    x++;
}