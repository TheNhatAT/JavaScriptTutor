let bufferArray = new ArrayBuffer(16);
let int16view = new Int16Array(bufferArray);
let int32view = new Int32Array(bufferArray);
for (let i = 0; i < int16view.length; i++) {
    int16view[i] = i;
    console.log('Entry ' + i + ': ' + int16view[i]);
}
console.log('-----------------')
for (let i = 0; i < int32view.length; i++) {
    console.log('Entry ' + i + ': ' + int32view[i]);
}

/** little-endian */