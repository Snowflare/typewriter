const sentence = "hello there from lighthouse labs";
let n = 0;
let c = 0;
for (const char of sentence) {
  
  setTimeout(()=>{process.stdout.write(char)}, n);
  if (c === sentence.length - 1){
    setTimeout(()=>{process.stdout.write(`\n`)}, n);
  }
  n += 50;
  c++;
}