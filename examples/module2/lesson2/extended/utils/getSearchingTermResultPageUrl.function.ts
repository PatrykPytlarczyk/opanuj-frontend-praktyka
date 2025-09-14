export function getSearchingTermResultPageUrl(term: string): string {
  return `https://en.wikipedia.org/wiki/Special:Search?fulltext=Search+the+frequently+asked+questions&fulltext=Search&prefix=Wikipedia%3AFAQ&search=${term}&ns0=1`
}
