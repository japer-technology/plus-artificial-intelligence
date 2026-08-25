#!/bin/bash
# usage: extract.sh FILE → prints CSS block, marker, then LAST inline <script> body
f="$1"
awk '/^  <style>$/{incss=1; next} incss && /^  <\/style>$/{incss=0; next} incss{print}' "$f"
echo "=====CSS_END_JS_START====="
awk '/^  <script>$/{last=NR} /^  <\/script>$/{if(last){start=last; last=0}} END{}' "$f" >/dev/null
# print body of the LAST top-level inline script (2-space indented <script> tag)
start=$(grep -n '^  <script>$' "$f" | tail -1 | cut -d: -f1)
end=$(grep -n '^  <\/script>$' "$f" | awk -F: -v s="$start" '$1>s{print $1; exit}')
[ -n "$start" ] && [ -n "$end" ] && sed -n "$((start+1)),$((end-1))p" "$f"
