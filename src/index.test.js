import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs'; //filesystem

describe('Our first test', () => {
  it('should pass', () => {
   expect(true).to.equal(true);
  });
});

describe('jsdom test', () => {
  it('should pass', (done) => {
    const indexHtml = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(indexHtml, function (err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello Calvimor!");
      done();
      window.close();
    });
  });
});
