import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

// CREATE OBJECT THAT SATISFIES 'DATAREADER' INTERFACE
const csvFileReader = new CsvFileReader('football.csv');
// CREATE MATCH READER INSTANCE (SATISFYING 'DATAREADER')
const matchReader = new MatchReader(csvFileReader);
// LOAD READER
matchReader.load();

// ANALIZE HOW MANY TIMES DID MU WIN AT HOME
let manUnitedWins = 0;
for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United won: ${manUnitedWins} games`);
