class Citizen {
    constructor(id, name, vote = 0) {
        if (vote === 0) {
            this.vote();
        } else {
            this.vote = vote;
        }
        this.id = id;
        this.name = name;
    }
    vote() {
        this.vote = Math.floor(Math.random() * 5) + 1;
        return this.vote;
    }
}

class PartyMembers extends Citizen {
    manager = false;

    constructor(id, name) {
        super(id, name);
    }

    voteManager(id) {
        if (this.id !== id) {
            return true;
        }
        return false;
    }
}

class Miflaga {
    constructor(numberId, PartyMembers, managerId) {
        this.numberId = numberId;
        this.PartyMembers = PartyMembers;
        this.managerId = managerId;
    }

    totalPartyMembers() {
        return this.PartyMembers.length;
    }

    check() {
        for (let i = 0; i < this.PartyMembers.length; i++) {
            if (this.PartyMembers[i].manager) {
                this.managerId = this.PartyMembers[i].id;
                break;
            }
        }
    }
}

class Government {
    biggestMiflaga;
    primeMinisterId;

    constructor(miflagaArr) {
        this.miflagaArr = miflagaArr;
    }

    check() {
        let biggest = 0;
        for (let i = 0; i < this.miflagaArr.length; i++) {
            if (biggest < this.miflagaArr[i].totalPartyMembers()) {
                biggest = this.miflagaArr[i].totalPartyMembers();
                this.biggestMiflaga = this.miflagaArr[i];
            }
        }
        this.primeMinisterId = this.biggestMiflaga.managerId;
    }
}

let c1 = new Citizen();
let c2 = new Citizen();
let c3 = new Citizen();
let c4 = new Citizen();

let p1 = new PartyMembers(5, 'aaa');
p1.manager = true;
let p2 = new PartyMembers(2, 'bbb');
let p3 = new PartyMembers(3, 'ccc');
let mif = new Miflaga(1, [p1, p2, p3], 1);
mif.check();
console.log(mif);

let gov = new Government([mif]);
gov.check();
console.log(gov.primeMinisterId);
