import {expect,test} from '../../../fixtures'
import { MainPage } from '../../../pages/main.page.ts';
import { URLs } from '../../../utils/constants.ts';
import { ArticlePage } from '../../../pages/article.page.ts';

test('searching article', async ({page}) => {
  await page.route('*/**/w/rest.php/v1/search/title**', async route => {
    const json = {
      "pages": [
        {
          "id": 74146978,
          "key": "Playwright_(software)",
          "title": "Playwright (software)",
          "excerpt": "Playwright (software)",
          "matched_title": null,
          "description": "End-to-end testing framework",
          "thumbnail": null
        }
      ]
    };
    await route.fulfill({ json });
  });

  await page.route('**/Playwright_(software)', async route => {
    await route.fulfill({
      contentType: 'text/html',
      body: `
        <html>
          <head><title>Playwright (software)</title></head>
          <body>
            <h1>Playwright (software)</h1>
            <p>End-to-end testing framework</p>
          </body>
        </html>`
    });
  });

  const mainPage = new MainPage(page);
  const searchingTerm = 'playwright soft'

  await mainPage.navigate();
  await mainPage.searchFor(searchingTerm)
  const firstResultTitle = await mainPage.getFirstSearchResult().getAttribute('title')
  await mainPage.goToFirstSearchResult()

  const resultTitleInUrl = firstResultTitle!.replace(' ', '_')
  const articlePage = new ArticlePage(page);

  await expect(page).toHaveURL(`${URLs.ARTICLE_PAGE_BASE_URL}${resultTitleInUrl}`)
  await expect(articlePage.getTitle()).toHaveText(firstResultTitle!)
})
