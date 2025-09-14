// Tugas No 3. Implementasi javascript percabangan if-else
let tugas = 89;      
let uts = 86;        
let uas = 93;        

let nilaiAkhir = (0.3 * tugas) + (0.3 * uts) + (0.4 * uas);
let grade;

if (nilaiAkhir >= 85 && nilaiAkhir <= 100) {
    console.log('Nilai Akhir', nilaiAkhir, '= Grade', grade = 'A');
} else if (nilaiAkhir >= 70 && nilaiAkhir <= 84) {
    console.log('Nilai Akhir', nilaiAkhir, '= Grade', grade = 'B');
} else if (nilaiAkhir >= 55 && nilaiAkhir <= 69) {
    console.log('Nilai Akhir', nilaiAkhir, '= Grade', grade = 'C');
} else if (nilaiAkhir >= 40 && nilaiAkhir <= 54) {
    console.log('Nilai Akhir', nilaiAkhir, '= Grade', grade = 'D');
} else if (nilaiAkhir < 40 && nilaiAkhir >= 0) {
    console.log('Nilai Akhir', nilaiAkhir, '= Grade', grade = 'E');
} else {
    console.log('Invalid')
};