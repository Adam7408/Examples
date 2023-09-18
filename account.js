const moment = require('moment');

class Account {
    #amount;
    #account_id;

    constructor(name, amount, account_id){
        this.name = name;
        this.#amount = amount;
        this.#account_id = account_id;
    }
    
    // balanceni qoldigini aytuvchi method
    tellMeBalance() {
        console.log(`Sizning hisobingizdagi qoldiq: ${this.#amount}`);
        return this.#amount;
    }

    // pul yechidigon method
    wihtdrawMoney(money) {
        if(this.#amount > money) {
            this.#amount -= money; // this.#amount = this.#amount - amount
            console.log(`hisobdan ${money}$ yechildi va qoldiq ${this.#amount}$`);
        } else{
            console.log(`Sizning balansizdagi pul yetarli emas: ${this.#amount}$`);
        }
    }

    // pul kiritadigon method
    makeDeposit(money){
        this.#amount += money; // this.#amount = this.#amount + amount
        console.log(`hisobingiz to'ldirildi, hisobingiz ${this.#amount}$ tashkil etdi`);
    }

    // detailslarni beruvchi method
    giveMeDetails() {
        console.log(`Salom hurmatli ${this.name}, sizning hisobingiz ${this.#amount}$ ga teng`);
        console.log(`Hisob raqamingiz: ${this.#account_id}`);
    }

    // class haqida ma'lumot beruvchi static method
    static telMeAboutClass() {
        console.log('Bu class accountlarni yasash uchun hizmat qiladi')
    }

    // vaqtni ko'rsatuvchi static method
    static telMeTime() {
        console.log(`Hozirgi vaqt ${moment().format("YYYY MM DD HH:mm:ss")}`);
    }
}

module.exports = Account;