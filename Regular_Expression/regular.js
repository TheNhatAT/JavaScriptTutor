/**
 * Use let reg = /ab+c/; when it is const
 * Use let reg = new RegExp('ab+c') when it is variable
 * */

/**
 * Special characters:
 Assertions:
    + Là cách ranh giới, chỉ sự bắt đầu hoặc kết thúc của các dòng hoặc từ,
 một số khác chỉ ra phù hợp với điều kiện nào đó (look-ahead, look-behind, conditional expressions)

 Character classes:
    + Phân biệt các loại khác nhau của ký tự (vd: số và chữ,..)

 Quantifiers:
    + Chỉ ra số lượng phù hợp (match)

 Unicode property escapes
    + Phân biệt dựa trên ký tự unicode (chữ hoa, thường, ký hiệu toán học, chấm câu,..)

 How to use:
    + Cần dùng dấu \ trước các ký tự đặc biệt nêu trên
        vd: C:\ -> /[A-Z]:\\/
 */
//
// var myRe = /d(b+)d/g;
// var myArray = myRe.exec('ssssdbdbbdasdsbdbsbz');

// console.log(myArray)
// console.log('ssssdbdbbdasdsbdbsbz'.replace(/d(b+)d/g, 'X'));
//
// //-- truy cập thuộc tính của RegExp
// var myRe = /d(b+)d/g;
// var myArray = myRe.exec('cdbbdbsbz');
// console.log('The value of lastIndex is ' + myRe.lastIndex);
// console.log('The value of lastIndex is ' + /d(b+)d/g.lastIndex);

// var re = /\w+\s/g;
// var str = 'fee fi fo fum';
// var myArray = str.replace(re, 'X');
// console.log(myArray);

// //-- verify input
// var re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
// function testInfo(phoneInput) {
//     var OK = re.exec(phoneInput);
//     if (!OK) {
//         console.error(phoneInput + ' isn\'t a phone number with area code!');
//     } else {
//         console.log('Thanks, your phone number is ' + OK[0]);
//     }
// }
// testInfo('21213');

let user = new Object();
let name = 'asd';
user.xxx =  name ;
console.log({name})
