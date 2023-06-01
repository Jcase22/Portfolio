import './index.css'
import TimelineNode from '../TimelineNode/index';
import CollegeNode from '../CollegeNode/index'
import resumePoints from '../../data/resume.ts'

const Timeline = () => {

  return (
    <div className='timeline-container'>
      <h1 className='timeline-title'>Timeline</h1>
      {resumePoints.map((node) => {
        return <TimelineNode nodeInfo={node}/>
      })}
      <CollegeNode />
    </div>
  )
}

export default Timeline