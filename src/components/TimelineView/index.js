import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  console.log(timelineItemsList)

  return (
    <div className="timeline-container">
      <div className="timeline-internal">
        <div className="">
          <h1 className="timeline-heading-1">
            MY JOURNEY OF <br />
            <span className="timeline-heading-2">CCBP 4.0</span>
          </h1>
        </div>
        <div className="timeline-chrono-container">
          <Chrono
            items={timelineItemsList}
            mediaSettings={{align: 'center', fit: 'contain'}}
            mode="VERTICAL_ALTERNATING"
            theme={{
              primary: 'blue',
              secondary: 'white',
              cardForeColor: 'violet',
              titleColor: 'blue',
            }}
          >
            {timelineItemsList.map(item =>
              item.categoryId === 'PROJECT' ? (
                <ProjectTimelineCard data={item} key={item.id} />
              ) : (
                <CourseTimelineCard data={item} key={item.id} />
              ),
            )}
          </Chrono>
        </div>
      </div>
    </div>
  )
}

export default TimelineView
