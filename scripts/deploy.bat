rem cd into build dir
cd dist

rem make the CNAME for custom domain
echo "vortekacademy.com" > CNAME

rem setup git and push
git init

git add .

git commit -m "ci: deploy to github pages"

git push -f https://github.com/vorteka/va-site.git main:gh-pages

cd ../
