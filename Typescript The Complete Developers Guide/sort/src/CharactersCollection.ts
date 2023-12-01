export class CharactersCollection {
    constructor(public data: string) {}

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        // TURN BOTH INTO LOWER CASE TO COMPARE
        return (
            this.data[leftIndex].toLowerCase() >
            this.data[rightIndex].toLowerCase()
        );
    }

    swap(leftIndex: number, rightIndex: number): void {
        // SPLIT STRING INTO AN ARRAY OF CHARACTERS
        const characters = this.data.split('');
        const temp = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = temp;
        // JOIN ARRAY BACK INTO A STRING AND UPDATE IT
        this.data = characters.join('');
    }
}
