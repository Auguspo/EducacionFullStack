const fs = require('fs');

try {
    const contenidoStr = fs.readFileSync('package.json');
    const contenidoObj = JSON.parse(contenidoStr);
    const size = Buffer.from(contenidoStr).length + ' bytes';

    let info = {
        contenidoStr,
        contenidoObj,
        size
    };

    console.log(info);

    fs.writeFileSync('info.txt', JSON.stringify(info, null, '\t'));
} catch (error) {
    console.error('Error:', error.message);
}
