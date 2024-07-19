import { expect, test } from '../../../fixtures';
import { MainPage } from '../../../pages/main.page';
import { URLs } from '../../../utils/constants';
import { SearchQuestionsPage } from '../../../pages/search-questions.page';
import { ResultsListPage } from '../../../pages/results-list.page';

test('search term in faq section', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();
  await mainPage.goToCommunityPortalPage();

  //searching link to helpdesk
  await page.getByRole('link', { name: 'Help desk' }).first().click();
  await page.waitForURL(URLs.HELPDESK_PAGE);

  const searchPage = new SearchQuestionsPage(page);
  const searchingTerm = 'watchlist';
  await searchPage.searchQuestionAroundFAQ(searchingTerm);

  const resultListPage = new ResultsListPage(page);
  const allItemsIncludesTerm = await resultListPage.everyListItemIncludesTerm(searchingTerm);

  await expect(resultListPage.getInput()).toHaveValue(searchingTerm);
  await expect(allItemsIncludesTerm).toBeTruthy();


});
