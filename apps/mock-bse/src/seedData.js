"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSeedData = generateSeedData;
// Simple Linear Congruential Generator for reproducible pseudo-random numbers
class SeededRandom {
    seed;
    constructor(seed) {
        this.seed = seed;
    }
    next() {
        this.seed = (this.seed * 9301 + 49297) % 233280;
        return this.seed / 233280;
    }
    intBetween(min, max) {
        return Math.floor(this.next() * (max - min + 1)) + min;
    }
    floatBetween(min, max) {
        return Number((this.next() * (max - min) + min).toFixed(2));
    }
    pick(arr) {
        return arr[Math.floor(this.next() * arr.length)];
    }
}
const STOCK_SYMBOLS = [
    'RELIANCE', 'TCS', 'INFY', 'HDFCBANK', 'ICICIBANK',
    'TATAMOTORS', 'BHARTIARTL', 'ITC', 'SBIN', 'LTIM'
];
const FIRST_NAMES = [
    'Aarav', 'Vivaan', 'Aditya', 'Vihaan', 'Arjun', 'Sai', 'Reyansh', 'Ayaan', 'Krishna', 'Ishaan',
    'Ananya', 'Diya', 'Priya', 'Kavya', 'Riya', 'Aadhya', 'Sanya', 'Neha', 'Pooja', 'Anushka'
];
const LAST_NAMES = [
    'Sharma', 'Verma', 'Patel', 'Mehta', 'Gupta', 'Joshi', 'Shah', 'Rao', 'Nair', 'Singh',
    'Chopra', 'Malhotra', 'Deshmukh', 'Kulkarni', 'Bhat', 'Reddy', 'Pillai', 'Saxena', 'Kapoor', 'Menon'
];
function generateSeedData(seedValue = 12345) {
    const rng = new SeededRandom(seedValue);
    // 1. Generate 20 Employees (EMP-001 & EMP-002 are MANAGEMENT, EMP-003..EMP-020 are EMPLOYEE RMs)
    const employees = [];
    for (let i = 1; i <= 20; i++) {
        const isMgmt = i <= 2;
        const name = `${rng.pick(FIRST_NAMES)} ${rng.pick(LAST_NAMES)}`;
        const empId = `EMP-${String(i).padStart(3, '0')}`;
        employees.push({
            id: empId,
            name: name,
            email: isMgmt ? `management.${i}@arhamfintech.com` : `employee.${i}@arhamfintech.com`,
            role: isMgmt ? 'MANAGEMENT' : 'EMPLOYEE',
            incentiveRate: isMgmt ? 0.15 : 0.10, // 10% standard employee incentive, 15% management
            createdAt: new Date(Date.now() - 365 * 86400000).toISOString()
        });
    }
    // 2. Generate 400 Clients
    const clients = [];
    for (let i = 1; i <= 400; i++) {
        const clientId = `CLI-${String(i).padStart(4, '0')}`;
        const firstName = rng.pick(FIRST_NAMES);
        const lastName = rng.pick(LAST_NAMES);
        clients.push({
            id: clientId,
            name: `${firstName} ${lastName}`,
            email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}.${i}@clientmail.com`,
            phone: `98765${String(10000 + i).slice(0, 5)}`,
            createdAt: new Date(Date.now() - rng.intBetween(30, 365) * 86400000).toISOString(),
            updatedAt: new Date().toISOString(),
            snapshotVersion: 1
        });
    }
    // 3. Generate UNEVEN Mappings across Relationship Managers (EMP-003 to EMP-020)
    // Exclude Management (EMP-001, EMP-002) from client ownership
    const relationshipManagers = employees.filter((e) => e.role === 'EMPLOYEE');
    // Define non-uniform weights for the 18 relationship managers
    const rmWeights = relationshipManagers.map((_, idx) => Math.pow(1.2, (idx % 6) + 1));
    const totalWeight = rmWeights.reduce((a, b) => a + b, 0);
    const mappings = [];
    const assignedCounts = new Array(relationshipManagers.length).fill(0);
    clients.forEach((client, idx) => {
        // Determine target RM using weighted distribution
        let r = rng.next() * totalWeight;
        let selectedRmIdx = 0;
        for (let i = 0; i < rmWeights.length; i++) {
            if (r < rmWeights[i]) {
                selectedRmIdx = i;
                break;
            }
            r -= rmWeights[i];
        }
        const assignedEmp = relationshipManagers[selectedRmIdx];
        assignedCounts[selectedRmIdx]++;
        mappings.push({
            id: `MAP-${String(idx + 1).padStart(4, '0')}`,
            employeeId: assignedEmp.id,
            clientId: client.id,
            createdAt: new Date(Date.now() - 30 * 86400000).toISOString()
        });
    });
    // 4. Generate 4,000 Trades with UNEVEN Distribution across 400 clients
    const trades = [];
    const nowMs = Date.now();
    // Give each client non-uniform trading activity weights
    const clientWeights = clients.map((_, idx) => Math.pow(rng.floatBetween(1, 4), 2));
    const totalClientWeight = clientWeights.reduce((a, b) => a + b, 0);
    // Guarantee at least 1 trade per client (400 baseline trades)
    let tradeCounter = 1;
    for (const client of clients) {
        const daysAgo = rng.intBetween(0, 90);
        const tradeDateStr = new Date(nowMs - daysAgo * 86400000 + rng.intBetween(0, 3600000)).toISOString();
        const symbol = rng.pick(STOCK_SYMBOLS);
        const quantity = rng.intBetween(10, 300);
        const price = rng.floatBetween(150, 3000);
        const brokerage = Number((quantity * price * 0.0025).toFixed(2));
        trades.push({
            id: `TRD-${String(tradeCounter++).padStart(6, '0')}`,
            clientId: client.id,
            tradeDate: tradeDateStr,
            symbol,
            quantity,
            price,
            brokerage,
            snapshotVersion: 1,
            createdAt: tradeDateStr
        });
    }
    // Distribute remaining 3,600 trades using weighted choice
    while (trades.length < 4000) {
        let r = rng.next() * totalClientWeight;
        let selectedClient = clients[0];
        for (let i = 0; i < clients.length; i++) {
            if (r < clientWeights[i]) {
                selectedClient = clients[i];
                break;
            }
            r -= clientWeights[i];
        }
        const daysAgo = rng.intBetween(0, 90);
        const tradeDateStr = new Date(nowMs - daysAgo * 86400000 + rng.intBetween(0, 3600000)).toISOString();
        const symbol = rng.pick(STOCK_SYMBOLS);
        const quantity = rng.intBetween(10, 500);
        const price = rng.floatBetween(100, 3500);
        const brokerage = Number((quantity * price * 0.0025).toFixed(2));
        trades.push({
            id: `TRD-${String(tradeCounter++).padStart(6, '0')}`,
            clientId: selectedClient.id,
            tradeDate: tradeDateStr,
            symbol,
            quantity,
            price,
            brokerage,
            snapshotVersion: 1,
            createdAt: tradeDateStr
        });
    }
    return { employees, clients, mappings, trades };
}
