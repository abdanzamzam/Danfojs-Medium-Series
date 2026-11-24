
import * as dfd from "danfojs-node";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const csvPathSalesCsv = path.resolve(__dirname, "data", "sales.csv");
const csvPathCustomerCsv = path.resolve(__dirname, "data", "customer.csv");

const salesRaw = await dfd.readCSV(csvPathSalesCsv);  // async
const sales = salesRaw.copy().replace([null, "null", "NULL", ""], NaN); // ganti NaN/null dengan 0
sales.head().print();
// sales.info()   // tipe kolom, jumlah non-null
sales.describe().print(); // ringkasan statistik numerik