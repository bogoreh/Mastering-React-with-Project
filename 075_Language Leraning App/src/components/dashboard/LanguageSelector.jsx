import React from 'react'

const LanguageSelector = ({ currentLanguage, onLanguageChange }) => {
  const languages = [
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
    { code: 'it', name: 'Italian', flag: '🇮🇹' },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵' }
  ]

  return (
    <div className="language-selector">
      <h3>Choose Language</h3>
      <div className="language-grid">
        {languages.map(lang => (
          <div
            key={lang.code}
            className={`language-card ${currentLanguage === lang.code ? 'selected' : ''}`}
            onClick={() => onLanguageChange(lang.code)}
          >
            <span className="language-flag">{lang.flag}</span>
            <span className="language-name">{lang.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LanguageSelector