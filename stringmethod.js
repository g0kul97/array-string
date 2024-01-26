
//1.concat()-

const str = 'hellow';
const str1 = 'world';
const greet = str.concat(' ',str1);
console.log(greet);

//2.endsWith()-

const data = 'Dogs are the best';
const result= data.endsWith('best');
console.log(result);

//3.includes()-

const sen = 'The world ends here';
const world = sen.includes('ends');
console.log(world);

//4.indexOf()-

const a = 'code! undefined code error'
const code = a.indexOf('code');
console.log(code);

//5.lastIndexOf()-

const b = 'code! undefined code error'
const code1 = b.lastIndexOf('code')
console.log(code1);

//6.match()-

const c = 'I am Groot'
const code2 = c.match('oot')
console.log(code2);

//7.matchAll()-

const d = 'I am Groot? I am Groot! I am GROOT.'
const code3 = d.matchAll('oot');
console.log(Array.from(code3));

//8.padEnd()-
const e = "Allday";
const code4 = e.padEnd(10, "1234");
console.log(code4);

//9.padStart()-

const f = "Allday";
const code5 = f.padStart(10, "1234");
console.log(code5);

//10.repeat()-

const g = "Happy!";
const code6 = g.repeat(3);
console.log(code6);

//11.replace()-

const h = "Loot";
const code7 = h.replace('L','Sc');
console.log(code7);

//12.search()-

const i = "I could do this all day";
const code8 = i.search("uld");
console.log(code8);

//13.slice()-

const j = "The day is upon us";
const code9 = j.slice(11, 18);
console.log(code9);

//14.split()-

const k = "They don't know that we know they know we know";
const codeif = k.split("know");
console.log(codeif);

//15.startsWith()-

const data1 = 'Dogs are the best';

const res = data1.startsWith('Dog');
console.log(res);

//16.substr()-

const data2 = "Welcome to the real world";
const sub = data2.substr(0,7)
console.log(sub);


//17.substring()-

const data3 = "The day is upon us";
const inf = data3.substring(4,8);
console.log(inf);

//18.toLowerCase()-

const data4 = "Good morning";
const z = data4.toLowerCase();
console.log(z);


//19.toUpperCase()-

const data5 = "Good morning";
const y = data5.toUpperCase();
console.log(y);

//20.trim()-
const data6 = "     How you doing         "
const x = data6.trim();
console.log(x);


//21.trimEnd ()-

const data7 = "     How you doing         "
const w =data7.trimEnd();
console.log(w);

//22.trimStart ()-

const data8 = "     How you doing         "
const v =data8.trimStart();
console.log(v);

//23.charAt()-

const data9 = "code danger!"
const u = data9.charAt(5);
console.log(u);

//24.charCodeAt()-

const datainf = "code danger!"
const t = datainf.charCodeAt(5);
console.log(t);
