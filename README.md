# Theme selector component

Adds a dark or light in body class

## Usage

Without props it uses default light and dark

```jsx
import Layout from '../components/Layout'
import Blog from '../components/Blog'
import ThemeSelector from '../components/ThemeSelector'

const Blog = () =>(
  <>
    <ThemeSelector />
    <Layout>
      <Blog />
    </Layout>
  </>
)
```
![](https://media.giphy.com/media/Cz7sXegPQzMUe5V1JR/giphy.gif)


With props

```jsx
import Layout from '../components/Layout'
import Blog from '../components/Blog'
import ThemeSelector from '../components/ThemeSelector'

const themeSelections = {
  themes: [
  {
    name: 'light',
    label: 'Light'
  },
  {
    name: 'dark',
    label: 'Dark'
  },
  {
    name: 'solarized-dark',
    label: 'Solarized Dark'
  }
  ]
}

const Blog = () =>(
  <>
    <ThemeSelector themes={themeSelections}/>
    <Layout>
      <Blog />
    </Layout>
  </>
)
```

![](https://media.giphy.com/media/bHljCmwtwTUYZgG6Do/giphy.gif)