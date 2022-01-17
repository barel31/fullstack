class Citizen {
    constructor(id, name, vote = 0) {
        if (vote === 0) {
            this.vote = Math.floor(Math.random() * 5) + 1;
        } else {
            this.vote = vote;
        }
        this.id = id;
        this.name = name;
    }
}

class PartyMembers extends Citizen {
    manager = false;

    constructor(id, name, primeManagerVoteId) {
        super(id, name);
        this.primeManagerVoteId = primeManagerVoteId;
    }

    changePrimeManagerVoteId(id) {
        if (this.primeManagerVoteId !== id) {
            this.primeManagerVoteId = id;
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

    setManagerOfMiflaga(PartyMembers) {
        this.managerId = PartyMembers;
    }
}

class Government {
    biggestMiflaga;
    primeMinisterId;

    constructor(miflagaArr) {
        this.miflagaArr = miflagaArr;
    }

    makeSense() {
        let biggest = 0,
            biggestMiflaga;
        for (let i = 0; i < this.miflagaArr.length; i++) {
            if (biggest < this.miflagaArr[i].totalPartyMembers()) {
                biggest = this.miflagaArr[i].totalPartyMembers();
                biggestMiflaga = this.miflagaArr[i];
            }
        }
        this.primeMinisterId = biggestMiflaga;
        this.biggestMiflaga = biggestMiflaga.managerId;
        return biggest;
    }
}

let c1 = new Citizen();
let c2 = new Citizen();
let c3 = new Citizen();
let c4 = new Citizen();

let p1 = new PartyMembers('barel', 1);
p1.manager = true;
let p2 = new PartyMembers('or', 2);
let p3 = new PartyMembers('shira', 3);

let shraga = new Miflaga(1, [p1, p2, p3], 1);
console.log(shraga);
