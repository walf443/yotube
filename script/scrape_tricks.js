const client = require('cheerio-httpcli');
const yaml = require('js-yaml');

const categories = ['1a', '2a', '3a', '4a', '5a'];

(async () => {
  const result = [];
  for (const categoryName of categories) {
    const category = { id: categoryName, name: categoryName.toUpperCase() };
    category.levels = await new Promise((resolve, reject) => {
      client.fetch('http://yoyorewind.com/jp/video/trick/' + categoryName + '/', {}, (err, $, res, body) => {
        const levels = $('.tricklist').map((index, levelTable) => {
          const tricks = $(levelTable).find('tr').map((trickIndex, trickCol) => {
            if (trickIndex === 0) {
              return null;
            }
            const trick = {};
            const fields = $(trickCol).find('td');
            trick.id = `${categoryName}-level${index + 1}-trick${trickIndex}`;
            trick.name = {}
            trick.name.en = $(fields[1]).text();
            trick.name.ja = $(fields[2]).text();
            const note = $(fields[3]).text();
            trick.note = { ja: '', en: '' }
            if (note != '') {
              trick.note.en = '';
              trick.note.ja = note;
            }

            return trick;
          });

          return {
            id: `${categoryName}-level${index + 1}`,
            name: `level${index + 1}`,
            tricks: tricks.get().slice(0, tricks.get().length-1),
          };
        });

        resolve(levels.get());
      });
    });
    result.push(category);
  }

  console.log(yaml.safeDump(result));
})();
