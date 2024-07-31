import {expect,test} from '../../../fixtures'
import { MainPage } from '../../../pages/main.page.ts';
import { URLs } from '../../../utils/constants.ts';
import { ArticlePage } from '../../../pages/article.page.ts';
import { setupSearchArticleMocks } from '../../../mocks-playwright-api/handlers/search.ts';

test('searching article', async ({page}) => {
  await setupSearchArticleMocks(page)

  const mainPage = new MainPage(page);
  const searchingTerm = 'playwright software'

  await mainPage.navigate();
  await mainPage.searchFor(searchingTerm)
  const firstResultTitle = await mainPage.getFirstSearchResult().getAttribute('title')
  const resultTitleUrlVersion = firstResultTitle!.replace(' ', '_')
  await mainPage.goToFirstSearchedResult()

  const articlePage = new ArticlePage(page);

  await expect(page).toHaveURL(`${URLs.ARTICLE_PAGE_BASE_URL}/article/${resultTitleUrlVersion}`)
  await expect(articlePage.getTitle()).toHaveText(firstResultTitle!)
})
