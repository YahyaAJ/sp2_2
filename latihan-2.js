var dataSantri = [5, 9, 6, 7, 9, 8, 10, 7, 8]

// mean dari angka
var totalAngka = dataSantri.reduce(function (a, b) {
    return a + b
}, 0)

document.write('Data Nilai santri = ', dataSantri.join(' , '), '<br>')
document.write('Total = ', totalAngka, '<br>')
document.write('Mean  = ', (totalAngka / dataSantri.length).toFixed(2), '<br>')

// median dari angka
var angkaSorted = dataSantri.sort(function (a, b) {
    return a - b
}, 0)
var letakMedian = (dataSantri.length + 1) / 2
document.write('Angka sorted = ', angkaSorted.join(' , '), '<br>')
document.write('Letak Median = ke -  ', letakMedian, '<br>')
document.write('Median = ', angkaSorted[5], '<br>')

// modus dari angka
function cariModus() {
dataSantri.sort(function (a, b) {
    return a - b
})
var modus = [],
count = [],
maxIndex = 0,
i, number;
for (i = 0; i < dataSantri.length; i += 1) {

    number = dataSantri[i];
    count[number] = (count[number] || 0) + 1;
    if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
    for (i in count)
        if (count.hasOwnProperty(i)) {

            if (count[i] === maxIndex) {
                modus.push(Number(i));
            }
    }
    return modus;
}
document.write('Modus : ' + cariModus() + '<br>')

// Simpangan Baku

function simpanganBaku() {

const n = dataSantri.length
const mean = dataSantri.reduce((a, b) => a + b) / n
    return Math.sqrt(dataSantri.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
}

document.write('Simpangan Baku : ' + simpanganBaku().toFixed(2))