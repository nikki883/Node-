const {writeFileSync }= require('fs')

for(let i = 0 ; i < 100000 ; i++){
    //flag a for append if we dont write it we will only get hello world 9999 as other things get overwrite
    writeFileSync('./content/big.txt',`hello world ${i}\n `, {flag: 'a'}) 
}