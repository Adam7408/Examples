// 3) File package

const hisob = {};

hisob.kopaytirish = (a, b) => {
    return a * b;
}

hisob.bolish = (a, b) => {
    return a / b;
}

hisob.qoshish = (a, b) => {
    return a + b;
}

hisob.ayrish = (a, b) => {
    return a - b;
}

module.exports = hisob; // hisob objectimizni boshqa fileda require bilan chaqirib ishlatsa bo'ladi