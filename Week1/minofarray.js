//find the smallest element in marks array
const marks=[90, 78, 65, 98];
let smallest=marks[0];
for (let i=0;i<marks.length;i++) {
    if (marks[i]<smallest) {
        smallest=marks[i];
    }
}
console.log("Smallest mark:",smallest);