import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

// CREATE OBJECT THAT SATISFIES 'DATAREADER' INTERFACE
const csvFileReader = new CsvFileReader('football.csv');
// CREATE MATCH READER INSTANCE (SATISFYING 'DATAREADER')
const matchReader = new MatchReader(csvFileReader);
// LOAD READER
matchReader.load();

// CREATE SUMMARY WITH WINS ANALYSIS AND CONSOLE REPORT
const summary = new Summary(
    new WinsAnalysis('Man United'),
    new ConsoleReport()
);
// BUILD AND PRINT REPORT
summary.buildAndPrintReport(matchReader.matches);
