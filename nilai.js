// Tugas No 3. Percabangan if-else
// let tugas = 89;      
// let uts = 86;        
// let uas = 93;        

// let nilaiAkhir = (0.3 * tugas) + (0.3 * uts) + (0.4 * uas);
// let grade;

// if (nilaiAkhir >= 85 && nilaiAkhir <= 100) {
//     console.log('Nilai Akhir', nilaiAkhir, '\nGrade', grade = 'A');
// } else if (nilaiAkhir >= 70 && nilaiAkhir <= 84) {
//     console.log('Nilai Akhir', nilaiAkhir, '\nGrade', grade = 'B');
// } else if (nilaiAkhir >= 55 && nilaiAkhir <= 69) {
//     console.log('Nilai Akhir', nilaiAkhir, '\nGrade', grade = 'C');
// } else if (nilaiAkhir >= 40 && nilaiAkhir <= 54) {
//     console.log('Nilai Akhir', nilaiAkhir, '\nGrade', grade = 'D');
// } else if (nilaiAkhir < 40 && nilaiAkhir >= 0) {
//     console.log('Nilai Akhir', nilaiAkhir, '\nGrade', grade = 'E');
// } else {
//     console.log('Invalid')
// };


// Tugas No. 4 Looping For
// let mahasiswa = ['Jejen','Jojon','Jujun', 'Jijan', 'Asep'];
// let tugas = [64, 78, 50, 43, 90];
// let uts = [70, 81, 58, 34, 81];
// let uas = [53, 85, 52, 39, 95];

// for (let i = 0; i < 5; i++) {
//     let nilaiAkhir = (0.3 * tugas[i]) + (0.3 * uts[i]) + (0.4 * uas[i]);
//     let grade;

//     if (nilaiAkhir >= 85 && nilaiAkhir <= 100) grade = 'A';
//     else if (nilaiAkhir >= 70 && nilaiAkhir <= 84) grade = 'B';
//     else if (nilaiAkhir >= 55 && nilaiAkhir <= 69) grade = 'C';
//     else if (nilaiAkhir >= 40 && nilaiAkhir <= 54) grade = 'D';
//     else if (nilaiAkhir < 40 && nilaiAkhir >= 0) grade = 'E';
//     else console.log('Invalid');

//     console.log(`${i+1}. Nama Mahasiswa: ${mahasiswa[i]} \n\tNilai Akhir: ${nilaiAkhir.toFixed(1)} \n\tGrade = ${grade}\n`)
// };


// Tugas No. 5 Function
function hitungNilaiAkhir(tugas,uts,uas) {
    return (0.3 * tugas) + (0.3 * uts) + (0.4 * uas);
}

function tentukanGrade(nilaiAkhir) {
    if (nilaiAkhir >= 85 && nilaiAkhir <= 100) return 'A';
    else if (nilaiAkhir >= 70 && nilaiAkhir <=84) return 'B';
    else if (nilaiAkhir >= 55 && nilaiAkhir <= 69) return 'C';
    else if (nilaiAkhir >= 40 && nilaiAkhir <=54) return 'D';
    else if (nilaiAkhir < 40 && nilaiAkhir >= 0) return 'E';
    else return 'Invalid';
}

let namaMahasiswa = ['Jejen','Jojon','Jujun', 'Jijan', 'Asep'];
let tugas = [64, 78, 50, 43, 90];
let uts = [70, 81, 58, 34, 81];
let uas = [53, 85, 52, 39, 95];

for (let i = 0; i < namaMahasiswa.length; i++) {
    let nilaiAkhir = hitungNilaiAkhir(tugas[i],uts[i],uas[i]);
    let grade = tentukanGrade(nilaiAkhir)

    console.log(`${i+1}. Nama Mahasiswa: ${namaMahasiswa[i]} \n\tNilai Akhir: ${nilaiAkhir.toFixed(1)} \n\tGrade : ${grade}\n`)
}
