// Tugas No 3. Percabangan if-else
// let tugas = 89;      
// let uts = 86;        
// let uas = 93;        

// let nilaiAkhir = (0.3 * tugas) + (0.3 * uts) + (0.4 * uas);
// let grade;

// if (nilaiAkhir >= 85 && nilaiAkhir <= 100) {
//     console.log('Nilai Akhir', nilaiAkhir, '= Grade', grade = 'A');
// } else if (nilaiAkhir >= 70 && nilaiAkhir <= 84) {
//     console.log('Nilai Akhir', nilaiAkhir, '= Grade', grade = 'B');
// } else if (nilaiAkhir >= 55 && nilaiAkhir <= 69) {
//     console.log('Nilai Akhir', nilaiAkhir, '= Grade', grade = 'C');
// } else if (nilaiAkhir >= 40 && nilaiAkhir <= 54) {
//     console.log('Nilai Akhir', nilaiAkhir, '= Grade', grade = 'D');
// } else if (nilaiAkhir < 40 && nilaiAkhir >= 0) {
//     console.log('Nilai Akhir', nilaiAkhir, '= Grade', grade = 'E');
// } else {
//     console.log('Invalid')
// };


// Tugas No. 4 Looping
let mahasiswa = ['Jejen','Jojon','Jujun', 'Jijan', 'Asep'];
let tugas = [64, 78, 50, 43, 90];
let uts = [70, 81, 58, 34, 81];
let uas = [53, 85, 52, 39, 95];

for (let i = 0; i < 5; i++) {
    let nilaiAkhir = (0.3 * tugas[i]) + (0.3 * uts[i]) + (0.4 * uas[i]);
    let grade;

    if (nilaiAkhir >= 85 && nilaiAkhir <= 100) grade = 'A';
    else if (nilaiAkhir >= 70 && nilaiAkhir <= 84) grade = 'B';
    else if (nilaiAkhir >= 55 && nilaiAkhir <= 69) grade = 'C';
    else if (nilaiAkhir >= 40 && nilaiAkhir <= 54) grade = 'D';
    else if (nilaiAkhir < 40 && nilaiAkhir >= 0) grade = 'E';
    else console.log('Invalid');

    console.log(`${i+1}. Nama Mahasiswa: ${mahasiswa[i]} \n\tNilai Akhir: ${nilaiAkhir.toFixed(1)} \n\tGrade = ${grade}\n`)
}