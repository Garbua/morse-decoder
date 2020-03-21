const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function converting(str) {
    let arrAbc = [];
    for(let i = 0; i < str.length; i += 10) {
        let abc = str.slice( i, (i + 10) );
        arrAbc.push(abc);
    }
      return  arrAbc; 
}


function decode(expr) {
    let abc = converting(expr).map((el) => {
        let symbol = el.replace(/00/gi, '');
        el = symbol;
        symbol = el.replace(/10/gi, '.');
        el = symbol;
        symbol = el.replace(/11/gi, '-');
        el = symbol;
        return el;
    })

    let letters = abc.map((item) => {
        if(item in MORSE_TABLE) {
            item = MORSE_TABLE[item];
        }
        if(item === '**********') {
            item = ' ';
        }
        return item;
    })

   let result = letters.join('');
    return result;
}

module.exports = {
    decode
};
