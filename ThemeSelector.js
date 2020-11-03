// @flow
import React, { useState, useEffect } from 'react'

type Props = {
  themes: Array<{
    name: string,
    label: string
  }>
}

const DEFAULT_PROPS = {
  themes: [
    {
      name: 'light',
      label: 'Light'
    },
    {
      name: 'dark',
      label: 'Dark'
    }
    // {
    //   name: 'solarized-dark',
    //   label: 'Solarized Dark'
    // }
  ]
}


const ThemeSelector = (props: Props = DEFAULT_PROPS) => {
  const themeSelection = props.themes
  const [theme, setTheme] = useState('light')

  const handleChange = (e) => {
    setTheme(e.target.value)
  }

  // Run only once
  useEffect(() => {
    const getTheme = localStorage.getItem('Theme') || 'light'
    setTheme(getTheme)
  }, [])

  // Check for changes in theme state
  useEffect(() => {
    document.body.className = theme
    localStorage.setItem('Theme', theme)
  }, [theme])

  const handleToggleTwo = (e) => {
    setTheme(() => themeSelection.filter((t) => t.name !== theme)[0].name)
  }

  const twoSun = theme === 'dark' ? '🌞' : '🌙'

  const darkLightTheme = (
    <div className="toggle">
      <button onClick={(e) => handleToggleTwo(e)} className="toggle-button">
        {twoSun}
      </button>
    </div>
  )

  const multipleTheme = themeSelection.map(({ name, label }, index) => (
    <label key={index}>
      <input
        key={index}
        onChange={(e) => handleChange(e)}
        type="radio"
        value={name}
        name="theme"
        checked={theme === name}
      />
      {label}
    </label>
  ))

  // Show sun and moon if theres only 2 themes to pick
  const toggleButton = themeSelection.length > 2 ? multipleTheme : darkLightTheme

  return <div className="toggle">{toggleButton}</div>
}

ThemeSelector.defaultProps = DEFAULT_PROPS

export default ThemeSelector
