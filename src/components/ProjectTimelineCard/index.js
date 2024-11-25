import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {data} = props
  console.log(data)
  return (
    <div className="project-container">
      <img src={data.imageUrl} alt="project" className="project-image" />
      <div className="project-heading-container">
        <h1 className="project-heading">{data.projectTitle}</h1>
        <div className="project-duration-container">
          <AiFillCalendar />
          <p>{data.duration}</p>
        </div>
      </div>
      <p className="project-description">{data.description}</p>
      <a href={data.projectUrl} className="project-url">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
