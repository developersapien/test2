# Test Commitizien

1 - First install commitizien as global tool
npx commitizen init cz-conventional-changelog --save-dev --save-exact

npx husky install

3 - Install needed packages
`npm install -D husky @commitlint/{config-conventional, cli} prettier lint-staged`


check for husky https://github.com/conventional-changelog/commitlint#readme


npx husky add .husky/prepare-commit-msg "exec < /dev/tty && git cz --hook || true"

VSC code Extension https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits:


Hopss