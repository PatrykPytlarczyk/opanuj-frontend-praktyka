import { expect, test } from '../../../fixtures';
import { MainPage } from '../../../pages/main.page';
import { URLs } from '../../../utils/constants';
import { HelpDeskPage } from '../../../pages/help-desk.page.ts';
import { SearchedValuePage } from '../../../pages/searched-value.page.ts';

test('search question from frequently asked questions', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();
  await mainPage.goToCommunityPortalPage();

  //searching link to helpdesk
  await page.getByRole('link', { name: 'Help desk' }).first().click();
  await page.waitForURL(URLs.HELPDESK_PAGE);

  const helpDeskPage = new HelpDeskPage(page);
  const searchingTerm = 'watchlist';
  await helpDeskPage.searchQuestionAroundFAQ(searchingTerm);

  const searchedValueResultsPage = new SearchedValuePage(page);
  const allItemsIncludesTerm = await searchedValueResultsPage.everyListItemIncludesTerm(searchingTerm);

  await expect(searchedValueResultsPage.getInput()).toHaveValue(searchingTerm);
  await expect(allItemsIncludesTerm).toBeTruthy();


});
