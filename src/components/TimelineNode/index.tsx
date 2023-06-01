import './index.css';

type TimelineNodeProps = {
  nodeInfo: {
    companyName: string;
    location: string;
    role?: string;
    summary: string;
    bullets?: string[];
  }
}

const TimelineNode = ({ nodeInfo }: TimelineNodeProps) => {

  return (
    <div className='node-container'>
      <div className='content-container'>
        <div className='node-header-container'>
          <h2 id='company-name'>{nodeInfo.companyName}</h2>
          <span id='location'>{nodeInfo.location}</span>
        </div>
        <div id='company-role'>{nodeInfo.role}</div>
        <h2 id='summary'>{nodeInfo.summary}</h2>
        <ul className='bullet-container'>
          {nodeInfo.bullets?.map((bullet) => {
            return <li>{bullet}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default TimelineNode;