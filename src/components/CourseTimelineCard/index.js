import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {data} = props

  return (
    <div className="course-container">
      <div className="course-heading-container">
        <h1 className="course-heading">{data.courseTitle}</h1>
        <div className="course-duration-container">
          <AiFillClockCircle />
          <p>{data.duration}</p>
        </div>
      </div>
      <p className="course-duration">{data.description}</p>
      <div className="course-tags-container">
        {data.tagsList.map(item => (
          <div key={item.id} className="course-tags">
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
