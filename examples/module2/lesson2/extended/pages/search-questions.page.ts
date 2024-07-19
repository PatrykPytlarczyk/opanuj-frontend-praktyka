import { Locator, Page } from '@playwright/test';
import { URLs } from '../utils/constants';

export class SearchQuestionsPage {
  private readonly page: Page;
  private searchInput: Locator;
  private searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    const searchingContainer = this.page.getByRole('cell', { name: 'Search the frequently asked' })

    this.searchInput = searchingContainer.getByRole('textbox');
    this.searchButton = searchingContainer.getByRole('button', { name: 'Search the frequently asked' })
  }

  async searchQuestionAroundFAQ(term:string) {
    await this.searchInput.fill(term)
    await this.searchButton.click()

    return this.page.waitForURL(URLs.getSearchingTermResultPageUrl(term))
  }


}
