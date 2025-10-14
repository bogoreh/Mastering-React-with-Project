import React from 'react'
import Card from '../Card/Card'
import './CardGrid.css'

const CardGrid = () => {
  const cardsData = [
    {
      id: 1,
      title: "Web Development",
      description: "Build modern, responsive websites with cutting-edge technologies",
      icon: "💻",
      color: "#4f46e5",
      features: ["React", "Vue", "Angular"]
    },
    {
      id: 2,
      title: "Mobile Apps",
      description: "Create cross-platform mobile applications for iOS and Android",
      icon: "📱",
      color: "#059669",
      features: ["React Native", "Flutter", "Swift"]
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Design beautiful and intuitive user interfaces and experiences",
      icon: "🎨",
      color: "#dc2626",
      features: ["Figma", "Adobe XD", "Sketch"]
    },
    {
      id: 4,
      title: "Cloud Services",
      description: "Deploy and scale your applications with cloud infrastructure",
      icon: "☁️",
      color: "#7c3aed",
      features: ["AWS", "Google Cloud", "Azure"]
    },
    {
      id: 5,
      title: "Data Analytics",
      description: "Transform data into insights with powerful analytics tools",
      icon: "📊",
      color: "#ea580c",
      features: ["Python", "SQL", "Tableau"]
    },
    {
      id: 6,
      title: "AI & Machine Learning",
      description: "Implement intelligent solutions with artificial intelligence",
      icon: "🤖",
      color: "#0891b2",
      features: ["TensorFlow", "PyTorch", "Scikit-learn"]
    }
  ]

  return (
    <div className="card-grid">
      {cardsData.map(card => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  )
}

export default CardGrid