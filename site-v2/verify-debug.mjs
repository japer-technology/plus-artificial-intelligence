import { readFileSync, writeFileSync } from "node:fs";
import { tokenize, comparableTokens, tokensToMarkup, applyDecorations } from "./tools/html-tokens.mjs";

const code = process.argv[2];
const shell = readFileSync("src/shell.html","utf8");
const shellBody = shell.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1].replace(/<!--[\s\S]*?-->/g,"").replace(/<script[\s\S]*?<\/script>/g,"");
const engineOnlyIds = ["themeSelect","packFallbackNote","specFingerprint"];
const engineOnlyClasses = ["theme-control"];
const sk = [];
let skip=0;
for (const t of comparableTokens(tokenize(shellBody))) {
  if (skip>0){ if(t.t==="open"&&!t.selfClose)skip++; else if(t.t==="close")skip--; continue; }
  const id=t.attrs?.id; const cls=String(t.attrs?.class||"").split(/\s+/);
  if(t.t==="open"&&(engineOnlyIds.includes(id)||engineOnlyClasses.some(c=>cls.includes(c)))){skip=1;continue;}
  sk.push({...t, attrs:{...(t.attrs||{})}});
}
const manifest = JSON.parse(readFileSync(`packs/${code}/manifest.json`,"utf8"));
const {tokens, problems} = applyDecorations(sk, manifest.decorations);
console.log("problems:", JSON.stringify(problems));
const produced = tokensToMarkup(comparableTokens(tokens));
const orig = readFileSync(`${code}.html`,"utf8");
const ob = orig.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1].replace(/<!--[\s\S]*?-->/g,"").replace(/<script[\s\S]*?<\/script>/g,"");
const original = tokensToMarkup(comparableTokens(tokenize(ob)));
writeFileSync(`/tmp/produced-${code}.txt`, produced);
writeFileSync(`/tmp/original-${code}.txt`, original);
console.log("produced len:", produced.length, "original len:", original.length);
if (produced === original) { console.log("PASS"); }
else {
  let d=0; while(d<produced.length && d<original.length && produced[d]===original[d]) d++;
  console.log("first diff char:", d);
  console.log("PRODUCED:", JSON.stringify(produced.slice(Math.max(0,d-100), d+200)));
  console.log("ORIGINAL:", JSON.stringify(original.slice(Math.max(0,d-100), d+200)));
}
