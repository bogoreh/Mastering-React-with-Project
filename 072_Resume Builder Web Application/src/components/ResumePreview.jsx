import React from 'react'

const ResumePreview = ({ resumeData }) => {
  const { personalInfo, education, experience, skills } = resumeData

  return (
    <div className="preview-container">
      <div className="resume-preview">
        {/* Header */}
        <div className="resume-header">
          <h1 className="resume-name">{personalInfo.fullName || 'Your Name'}</h1>
          <div className="resume-contact">
            {personalInfo.email && <span>{personalInfo.email}</span>}
            {personalInfo.phone && <span>{personalInfo.phone}</span>}
            {personalInfo.address && <span>{personalInfo.address}</span>}
          </div>
        </div>

        {/* Professional Summary */}
        {personalInfo.summary && (
          <div className="resume-section">
            <h2 className="resume-section-title">Professional Summary</h2>
            <div className="resume-summary">
              {personalInfo.summary}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="resume-section">
            <h2 className="resume-section-title">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="resume-item">
                <div className="resume-item-title">{edu.school}</div>
                <div className="resume-item-subtitle">
                  {edu.degree} {edu.field && `in ${edu.field}`}
                  {edu.gpa && ` | GPA: ${edu.gpa}`}
                </div>
                <div className="resume-item-date">
                  {edu.startDate} {edu.endDate && ` - ${edu.endDate}`}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div className="resume-section">
            <h2 className="resume-section-title">Work Experience</h2>
            {experience.map((exp, index) => (
              <div key={index} className="resume-item">
                <div className="resume-item-title">{exp.position}</div>
                <div className="resume-item-subtitle">{exp.company}</div>
                <div className="resume-item-date">
                  {exp.startDate} {exp.endDate && ` - ${exp.endDate}`}
                </div>
                {exp.description && (
                  <div className="resume-item-description">
                    {exp.description.split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div className="resume-section">
            <h2 className="resume-section-title">Skills</h2>
            <div className="resume-skills">
              {skills.map((skill, index) => (
                <div key={index} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ResumePreview