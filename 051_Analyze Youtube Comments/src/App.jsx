import React, { useState } from 'react'
import CommentList from './components/CommentList'
import FilterSection from './components/FilterSection'
import StatsCard from './components/StatsCard'
import { analyzeComments } from './data/shadyKeywords'
import './index.css'

function App() {
  const [comments, setComments] = useState('')
  const [filteredData, setFilteredData] = useState(null)

  const handleAnalyze = () => {
    if (!comments.trim()) {
      alert('Please enter some comments to analyze!')
      return
    }
    
    const commentArray = comments.split('\n').filter(comment => comment.trim())
    const result = analyzeComments(commentArray)
    setFilteredData(result)
  }

  const handleClear = () => {
    setComments('')
    setFilteredData(null)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🔍 YouTube Comment Analyzer</h1>
        <p>Detect and filter shady comments automatically</p>
      </header>

      <div className="app-container">
        <div className="input-section">
          <div className="input-header">
            <h2>Enter YouTube Comments</h2>
            <div className="button-group">
              <button onClick={handleAnalyze} className="analyze-btn">
                🎯 Analyze Comments
              </button>
              <button onClick={handleClear} className="clear-btn">
                🗑️ Clear
              </button>
            </div>
          </div>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Paste YouTube comments here (one comment per line)..."
            className="comments-textarea"
            rows="10"
          />
          <div className="input-info">
            💡 Enter one comment per line. The analyzer will detect shady patterns automatically.
          </div>
        </div>

        {filteredData && (
          <div className="results-section">
            <div className="stats-grid">
              <StatsCard
                title="Total Comments"
                value={filteredData.totalComments}
                color="blue"
              />
              <StatsCard
                title="Shady Comments"
                value={filteredData.shadyComments.length}
                color="red"
              />
              <StatsCard
                title="Clean Comments"
                value={filteredData.cleanComments.length}
                color="green"
              />
              <StatsCard
                title="Shady Percentage"
                value={`${((filteredData.shadyComments.length / filteredData.totalComments) * 100).toFixed(1)}%`}
                color="orange"
              />
            </div>

            <FilterSection filteredData={filteredData} />
            
            <div className="comments-display">
              <CommentList
                title="🚨 Shady Comments"
                comments={filteredData.shadyComments}
                type="shady"
              />
              <CommentList
                title="✅ Clean Comments"
                comments={filteredData.cleanComments}
                type="clean"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App