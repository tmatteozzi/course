import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// CREATE MATCH READER FROM CSV
const matchReader = MatchReader.fromCsv('football.csv');
// LOAD READER
matchReader.load();

// CREATE SUMMARY WITH WINS ANALYSIS AND CONSOLE REPORT
const summary = Summary.winsAnalysisWithHtmlReport('Man United');
// BUILD AND PRINT REPORT
summary.buildAndPrintReport(matchReader.matches);
