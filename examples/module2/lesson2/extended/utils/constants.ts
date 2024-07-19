export const URLs = {
  MAIN_PAGE: 'https://en.wikipedia.org/wiki/Main_Page',
  LOGIN_PAGE:
    'https://en.wikipedia.org/w/index.php?title=Special:UserLogin&returnto=Main+Page',
  HELPDESK_PAGE: 'https://en.wikipedia.org/wiki/Wikipedia:Help_desk',
  getSearchingTermResultPageUrl: (term:string) => {
    return `https://en.wikipedia.org/wiki/Special:Search?fulltext=Search+the+frequently+asked+questions&fulltext=Search&prefix=Wikipedia%3AFAQ&search=${term}&ns0=1`
  }
};
