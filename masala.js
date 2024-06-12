// masala 1
// uchta son berilgan. Shu sonlar orasidan nechta musbat va nechta manfiy son borligini aniqlovchi funksiya tuzilsin
function countPositiveNegative(a, b, c) {
    let musbatlarSoni = 0;
    let manfiylarSoni = 0;

    if (a > 0) {
        musbatlarSoni++;
    } else if (a < 0) {
        manfiylarSoni++;
    }

    if (b > 0) {
        musbatlarSoni++;
    } else if (b < 0) {
        manfiylarSoni++;
    }

    if (c > 0) {
        musbatlarSoni++;
    } else if (c < 0) {
        manfiylarSoni++;
    }

    return {
        musbat: musbatlarSoni,
        manfiy: manfiylarSoni,
    };
}

// masala 2
function kattasiniAniqla(a, b) {
    return a > b ? a : b;
}

// masala 3
function kichiginiAniqla(a, b) {
    return a < b ? a : b;
}

// masala 4
function avvalKattaKeyinKichik(a, b) {
    if (a > b) {
        console.log(a, b);
    } else {
        console.log(b, a);
    }
}

// masala 5
function kichikKatta(a, b) {
    if (a < b) {
        console.log(a, b);
    } else {
        console.log(b, a);
    }
}

// masala 6
function tengBoLmasaOzgartir(a, b) {
    if (a !== b) {
        let vaqtincha = a;
        a = b;
        b = vaqtincha;
    } else {
        a = 0;
        b = 0;
    }
    console.log(a, b);
}

// masala 7
function yigindiniOzgartir(a, b) {
    if (a !== b) {
        let yigindi = a + b;
        a = b = yigindi;
    } else {
        a = b = 0;
    }
    console.log(a, b);
}

// masala 8
function uchSonKichiginiAniqla(a, b, c) {
    return Math.min(a, b, c);
}

// masala 9
function ortachaniAniqla(a, b, c) {
    let sonlar = [a, b, c];
    sonlar.sort((x, y) => x - y);
    return sonlar[1];
}

// masala 10
function avvalKichikKeyinKatta(a, b, c) {
    let sonlar = [a, b, c];
    sonlar.sort((x, y) => x - y);
    console.log(sonlar[0], sonlar[2]);
}

// masala 11
function ikkitaEngKattasiniChiqaz(a, b, c) {
    let sonlar = [a, b, c];
    sonlar.sort((x, y) => y - x);
    console.log(sonlar[0] + sonlar[1]);
}

// masala 12
function oshiDavlatTartibda(a, b, c) {
    let sonlar = [a, b, c];
    if (sonlar[0] > sonlar[1] && sonlar[1] > sonlar[2]) {
        sonlar = sonlar.map((x) => -x);
    }
    console.log(sonlar);
}

// masala 13
function kamayishDavlatTartibda(a, b, c) {
    let sonlar = [a, b, c];
    if (sonlar[0] > sonlar[1] && sonlar[1] > sonlar[2]) {
        sonlar = sonlar.map((x) => 2 * x);
    }
    console.log(sonlar);
}

// masala 14
function tengJuftlikniTop(a, b, c) {
    if (a === b) return 1;
    if (a === c) return 1;
    if (b === c) return 1;
    return 2;
}

// masala 15
function uchTengJuftlikniTop(a, b, c, d) {
    if (a === b && b === c) return 1;
    if (a === b && b === d) return 1;
    if (a === c && c === d) return 1;
    if (b === c && c === d) return 1;
    return 2;
}

// masala 16
function engYaqinNuqtaniTop(A, B, C) {
    let masofaB = Math.sqrt(Math.pow(B.x - A.x, 2) + Math.pow(B.y - A.y, 2));
    let masofaC = Math.sqrt(Math.pow(C.x - A.x, 2) + Math.pow(C.y - A.y, 2));
    return masofaB < masofaC ? B : C;
}
