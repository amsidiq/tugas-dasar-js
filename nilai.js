// Tugas No 3
{
  let tugas = 89;      
  let uts = 86;        
  let uas = 93;        

  let nilaiAkhir = (0.3 * tugas) + (0.3 * uts) + (0.4 * uas);
  let grade;

  if (nilaiAkhir >= 85) grade = 'A';
  else if (nilaiAkhir >= 70) grade = 'B';
  else if (nilaiAkhir >= 55) grade = 'C';
  else if (nilaiAkhir >= 40) grade = 'D';
  else if (nilaiAkhir >= 0) grade = 'E';
  else grade = 'Invalid';

  console.log("Nilai Akhir:", nilaiAkhir.toFixed(1));
  console.log("Grade:", grade);
}

// Tugas No 4
{
  let mahasiswa = ['Jejen','Jojon','Jujun', 'Jijan', 'Asep'];
  let tugas = [64, 78, 50, 43, 90];
  let uts = [70, 81, 58, 34, 81];
  let uas = [53, 85, 52, 39, 95];

  for (let i = 0; i < mahasiswa.length; i++) {
    let nilaiAkhir = (0.3 * tugas[i]) + (0.3 * uts[i]) + (0.4 * uas[i]);
    let grade;

    if (nilaiAkhir >= 85) grade = 'A';
    else if (nilaiAkhir >= 70) grade = 'B';
    else if (nilaiAkhir >= 55) grade = 'C';
    else if (nilaiAkhir >= 40) grade = 'D';
    else if (nilaiAkhir >= 0) grade = 'E';
    else grade = 'Invalid';

    console.log(`${i+1}. ${mahasiswa[i]} - Nilai Akhir: ${nilaiAkhir.toFixed(1)}, Grade: ${grade}`);
  }
}

console.log("----------------");
// Tugas No 5
{
  function hitungNilaiAkhir(tugas, uts, uas) {
    return (0.3 * tugas) + (0.3 * uts) + (0.4 * uas);
  }

  function tentukanGrade(nilaiAkhir) {
    if (nilaiAkhir >= 85) return 'A';
    else if (nilaiAkhir >= 70) return 'B';
    else if (nilaiAkhir >= 55) return 'C';
    else if (nilaiAkhir >= 40) return 'D';
    else if (nilaiAkhir >= 0) return 'E';
    else return 'Invalid';
  }

  let namaMahasiswa = ['Jejen','Jojon','Jujun', 'Jijan', 'Asep'];
  let tugas = [64, 78, 50, 43, 90];
  let uts = [70, 81, 58, 34, 81];
  let uas = [53, 85, 52, 39, 95];

  for (let i = 0; i < namaMahasiswa.length; i++) {
    let nilaiAkhir = hitungNilaiAkhir(tugas[i], uts[i], uas[i]);
    let grade = tentukanGrade(nilaiAkhir);

    console.log(`${i+1}. ${namaMahasiswa[i]} - Nilai Akhir: ${nilaiAkhir.toFixed(1)}, Grade: ${grade}`);
  }
}
