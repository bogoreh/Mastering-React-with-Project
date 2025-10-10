export const shadyKeywords = {
  'Fake Spiritual': [
    'tantrik', 'babaji', 'guruji', 'mahaguru', 'spiritual healing',
    'black magic', 'vashikaran', 'love spell', 'get your love back',
    'kala jadu', 'totka', 'mantra', 'yantra'
  ],
  'Attention Seekers': [
    'binod', 'like please', 'subscribe please', 'share this video',
    'comment below', 'first comment', 'like if you agree',
    'attention please', 'notice me', 'views please'
  ],
  'Fake Giveaways': [
    'free iphone', 'free laptop', 'giveaway', 'winner', 'cash prize',
    'free money', 'click link', 'telegram channel', 'whatsapp group',
    'free course', 'limited time'
  ],
  'Fake Health': [
    'weight loss guaranteed', 'get taller', 'fair skin', 'hair growth',
    'magic pill', 'ayurvedic secret', 'doctor shocked', 'miracle cure'
  ],
  'Suspicious Links': [
    'www.', 'http://', 'https://', '.com', 'click here', 'link in description',
    'download now', 'register now', 'sign up'
  ]
}

export const analyzeComments = (comments) => {
  const shadyComments = []
  const cleanComments = []
  const categoryBreakdown = {
    'Fake Spiritual': 0,
    'Attention Seekers': 0,
    'Fake Giveaways': 0,
    'Fake Health': 0,
    'Suspicious Links': 0
  }

  comments.forEach(comment => {
    const lowerComment = comment.toLowerCase()
    let isShady = false
    let detectedCategory = null
    let matchedKeywords = []

    // Check each category
    for (const [category, keywords] of Object.entries(shadyKeywords)) {
      for (const keyword of keywords) {
        if (lowerComment.includes(keyword.toLowerCase())) {
          isShady = true
          detectedCategory = category
          matchedKeywords.push(keyword)
          categoryBreakdown[category]++
          break // Stop checking this category once a match is found
        }
      }
      if (isShady) break // Stop checking other categories
    }

    const commentData = {
      text: comment,
      category: detectedCategory,
      matchedKeywords: matchedKeywords
    }

    if (isShady) {
      shadyComments.push(commentData)
    } else {
      cleanComments.push(commentData)
    }
  })

  return {
    totalComments: comments.length,
    shadyComments,
    cleanComments,
    categoryBreakdown
  }
}