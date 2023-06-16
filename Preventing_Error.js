// function lowerIntial(word) {
//     return word[0].toLowerCase();
// }

// console.log(lowerIntial('Joe'))

// function lowerIntial(word) {
//     if (word.length === 0) {
//         return '-';
//     }
    
//     return word[0].toLowerCase()
// }

function parseJSON(data) {
    let result;

    try {
        result = JSON.parse(data);
    } catch (e) {
        console.log('there was a', e.name, 'parsing JSON data:', e.message);
        result = null;
    } finally {
        console.log('finished parsing data')
    }
    return result;
}

let data = 'not valid JSON';

console.log(parseJSON(data))