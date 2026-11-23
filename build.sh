#!/bin/sh
# Копирует index.html в папку каждой страницы, чтобы прямые ссылки работали на GitHub Pages.
# Запускай после изменения index.html или списка кейсов в content.js.
cd "$(dirname "$0")"
CASES=$(grep -oE "\['[a-z0-9-]+','(brand|ads|print)'" content.js | cut -d"'" -f2)
for r in about work contact $CASES; do mkdir -p "$r" && cp index.html "$r/index.html"; done
cp index.html 404.html
echo "routes:" about work contact $CASES
