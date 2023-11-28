interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const coke = {
    color: 'brown',
    carbonated: true,
    sugarContent: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};

const printSummary = (item: Reportable) => {
    console.log(item.summary());
};

printSummary(oldCivic);
printSummary(coke);
