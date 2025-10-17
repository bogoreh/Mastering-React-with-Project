import React from 'react'
import Section from './Section'

const ResumeForm = ({ resumeData, updateResumeData }) => {
  const updatePersonalInfo = (field, value) => {
    updateResumeData('personalInfo', {
      ...resumeData.personalInfo,
      [field]: value
    })
  }

  const addEducation = () => {
    const newEducation = {
      school: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      gpa: ''
    }
    updateResumeData('education', [...resumeData.education, newEducation])
  }

  const updateEducation = (index, field, value) => {
    const updatedEducation = resumeData.education.map((edu, i) =>
      i === index ? { ...edu, [field]: value } : edu
    )
    updateResumeData('education', updatedEducation)
  }

  const removeEducation = (index) => {
    const updatedEducation = resumeData.education.filter((_, i) => i !== index)
    updateResumeData('education', updatedEducation)
  }

  const addExperience = () => {
    const newExperience = {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ''
    }
    updateResumeData('experience', [...resumeData.experience, newExperience])
  }

  const updateExperience = (index, field, value) => {
    const updatedExperience = resumeData.experience.map((exp, i) =>
      i === index ? { ...exp, [field]: value } : exp
    )
    updateResumeData('experience', updatedExperience)
  }

  const removeExperience = (index) => {
    const updatedExperience = resumeData.experience.filter((_, i) => i !== index)
    updateResumeData('experience', updatedExperience)
  }

  const addSkill = () => {
    const newSkill = ''
    updateResumeData('skills', [...resumeData.skills, newSkill])
  }

  const updateSkill = (index, value) => {
    const updatedSkills = resumeData.skills.map((skill, i) =>
      i === index ? value : skill
    )
    updateResumeData('skills', updatedSkills)
  }

  const removeSkill = (index) => {
    const updatedSkills = resumeData.skills.filter((_, i) => i !== index)
    updateResumeData('skills', updatedSkills)
  }

  return (
    <div className="form-container">
      <Section title="Personal Information">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={resumeData.personalInfo.fullName}
            onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
            placeholder="John Doe"
          />
        </div>
        
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={resumeData.personalInfo.email}
            onChange={(e) => updatePersonalInfo('email', e.target.value)}
            placeholder="john.doe@example.com"
          />
        </div>
        
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            value={resumeData.personalInfo.phone}
            onChange={(e) => updatePersonalInfo('phone', e.target.value)}
            placeholder="+1 (555) 123-4567"
          />
        </div>
        
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            value={resumeData.personalInfo.address}
            onChange={(e) => updatePersonalInfo('address', e.target.value)}
            placeholder="New York, NY"
          />
        </div>
        
        <div className="form-group">
          <label>Professional Summary</label>
          <textarea
            value={resumeData.personalInfo.summary}
            onChange={(e) => updatePersonalInfo('summary', e.target.value)}
            placeholder="Experienced professional with expertise in..."
          />
        </div>
      </Section>

      <Section title="Education">
        {resumeData.education.map((edu, index) => (
          <div key={index} className="array-item">
            <div className="form-group">
              <label>School/University</label>
              <input
                type="text"
                value={edu.school}
                onChange={(e) => updateEducation(index, 'school', e.target.value)}
                placeholder="University of Example"
              />
            </div>
            
            <div className="form-group">
              <label>Degree</label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                placeholder="Bachelor of Science"
              />
            </div>
            
            <div className="form-group">
              <label>Field of Study</label>
              <input
                type="text"
                value={edu.field}
                onChange={(e) => updateEducation(index, 'field', e.target.value)}
                placeholder="Computer Science"
              />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div className="form-group">
                <label>Start Date</label>
                <input
                  type="text"
                  value={edu.startDate}
                  onChange={(e) => updateEducation(index, 'startDate', e.target.value)}
                  placeholder="Aug 2018"
                />
              </div>
              
              <div className="form-group">
                <label>End Date</label>
                <input
                  type="text"
                  value={edu.endDate}
                  onChange={(e) => updateEducation(index, 'endDate', e.target.value)}
                  placeholder="May 2022"
                />
              </div>
            </div>
            
            <button 
              className="btn btn-danger"
              onClick={() => removeEducation(index)}
            >
              Remove Education
            </button>
          </div>
        ))}
        
        <button className="btn btn-primary" onClick={addEducation}>
          Add Education
        </button>
      </Section>

      <Section title="Work Experience">
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="array-item">
            <div className="form-group">
              <label>Company</label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => updateExperience(index, 'company', e.target.value)}
                placeholder="Tech Company Inc."
              />
            </div>
            
            <div className="form-group">
              <label>Position</label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => updateExperience(index, 'position', e.target.value)}
                placeholder="Software Engineer"
              />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div className="form-group">
                <label>Start Date</label>
                <input
                  type="text"
                  value={exp.startDate}
                  onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                  placeholder="Jun 2022"
                />
              </div>
              
              <div className="form-group">
                <label>End Date</label>
                <input
                  type="text"
                  value={exp.endDate}
                  onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                  placeholder="Present"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={exp.description}
                onChange={(e) => updateExperience(index, 'description', e.target.value)}
                placeholder="Describe your responsibilities and achievements..."
              />
            </div>
            
            <button 
              className="btn btn-danger"
              onClick={() => removeExperience(index)}
            >
              Remove Experience
            </button>
          </div>
        ))}
        
        <button className="btn btn-primary" onClick={addExperience}>
          Add Experience
        </button>
      </Section>

      <Section title="Skills">
        {resumeData.skills.map((skill, index) => (
          <div key={index} className="array-item">
            <div className="form-group">
              <label>Skill {index + 1}</label>
              <input
                type="text"
                value={skill}
                onChange={(e) => updateSkill(index, e.target.value)}
                placeholder="JavaScript, React, Node.js"
              />
            </div>
            <button 
              className="btn btn-danger"
              onClick={() => removeSkill(index)}
            >
              Remove Skill
            </button>
          </div>
        ))}
        
        <button className="btn btn-primary" onClick={addSkill}>
          Add Skill
        </button>
      </Section>
    </div>
  )
}

export default ResumeForm