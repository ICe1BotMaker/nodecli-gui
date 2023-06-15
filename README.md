# Node CLI GUI

Try using cli like gui.

### Installation

```
$ npm install nodecli-gui
```

### Todos App

```js
import chalk from 'chalk';

import { CLIApplication, CLIButton, CLICheckBox, CLILabel } from 'nodecli-gui';

const app = new CLIApplication();

app.setWindowTitle(`Test Application`);
app.setWindowIcon(`xampp-icon.ico`);


// Title
const title1 = new CLILabel({ text: `[ Todo List ]` });
app.addComponent(title1.return(), { x: 1, y: 1 });


// todos
let todosText = [`To complete all tasks`, `Finish handling exceptions.`, `Commit to git.`];

todosText.forEach((text, idx) => {
    const item = new CLICheckBox({ text: `- ${text}`, beforeText: `✅ `, bool: idx === 2 });
    item.on(`select`);
    app.addComponent(item.return(), { x: 1, y: 1 });
});


// modify button
const modify = new CLIButton({ text: chalk.bgBlueBright(` modify `) });
modify.on(`select`, () => {
    app.selectedItems().forEach(item => {
        app.modifyText(item, { text: `- test todo` });
    });
});

app.addComponent(modify.return(), { x: 1, y: 1 });


// remove button
const remove = new CLIButton({ text: chalk.bgRedBright(` remove `) });
remove.on(`select`, () => {
    app.selectedItems().forEach(item => {
        app.remove(item);
    });
});

app.addComponent(remove.return(), { x: 10, y: -1 });


app.show(10);
```