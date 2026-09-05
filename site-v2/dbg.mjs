import { readFileSync } from "node:fs";
import { tokenize, comparableTokens, tokensToMarkup, applyDecorations } from "./tools/html-tokens.mjs";

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
const manifest = JSON.parse(readFileSync("packs/accounting/manifest.json","utf8"));
const {tokens, problems} = applyDecorations(sk, manifest.decorations);
console.log("problems:", problems);
const produced = tokensToMarkup(comparableTokens(tokens));
console.log("PRODUCED HEADER:", produced.slice(0, 900));
console.log("\n---ORIGINAL HEADER---");
const orig = readFileSync("accounting.html","utf8");
const ob = orig.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1].replace(/<!--[\s\S]*?-->/g,"").replace(/<script[\s\S]*?<\/script>/g,"");
console.log(tokensToMarkup(comparableTokens(tokenize(ob))).slice(0, 900));
