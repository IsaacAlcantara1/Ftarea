const fs = require('fs');
const path = require('path');

test('index.html exists and contains Hello World', () => {
    const filePath = path.join(__dirname, '..', 'index.html');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    expect(fileContent).toContain('<h1>Hello World</h1>');
});
