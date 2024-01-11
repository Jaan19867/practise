import React from "react"

function BusinessCards({ title, description, interest, link }) {
  return (
    <div className="business-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Interest: {interest}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        LinkedIn Profile
      </a>
    </div>
  )
}

export default BusinessCards
