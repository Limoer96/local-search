# local-search

> A package for DOM lookup and markup. Based on any input from the user (keyword/DOM selector), regular expressions are supported.

- DOM search based on keywords or selectors.
- Result mark(optional).

## Install

```bash
$ yarn add local-search
```

## Usage

> Online demo [here](http://212.64.77.74:80/local-search/).

```js
// in react
let search = new LocalSearch({ useRegexp: true });
function App() {
  const [keywords, setKeywords] = useState("");
  useEffect(() => {
    search.setSearch(keywords);
  }, [keywords, search]);
  function handleClick() {
    search.begin().then(() => {
      search.next();
    });
  }
  function handleNext() {
    search.next();
  }
  return <div>...</div>;
}
```

## API

### `new LocalSearch(options: IOptions)`

```ts
export type KeywordsOrSelector =
  | string
  | keyof HTMLElementTagNameMap
  | keyof SVGElementTagNameMap;

interface IOption {
  input?: KeywordsOrSelector; // keywords or selector
  useRegexp?: boolean; // default: false
  scope?: HTMLElement | string; // rootDom, default: document.body
}
```

### _instance_ of `const instance = new LocalSearch(options)`

```ts
export interface IDomFormated {
  dom: HTMLElement;
  type: typeof TypeSelector | typeof TypeText;
}
class LocalSearch {
  setSearch(input: KeywordsOrSelector): void; // set keywords
  begin(): Promise<IDomFormated[]> | undefined; // begin to search
  next(): boolean; // mark one search result, returns has next search result or not
}
```

## ChangeLog

see from [CHANGELOG.md](./CHANGELOG.md)
