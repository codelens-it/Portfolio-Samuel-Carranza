import React, { useEffect, useRef } from 'react';
import './experience.css';

interface ExperienceItem {
  name: string;
  company: string;
  'start-date': string;
  'end-date': string;
  summary: string;
}

interface TimelineProps {
  experiences: ExperienceItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );
  
      const timelineItems = document.querySelectorAll('.timeline-item');
      timelineItems.forEach((item) => {
        observerRef.current?.observe(item);
      });
  
      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }, []);
  return (
    <div className="timeline">
      <div className="timeline-items">
        {experiences.map((experience, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">{experience.name}</h3>
              <p className="timeline-company">{experience.company}</p>
              <p className="timeline-date">
                {experience['start-date']} - {experience['end-date']}
              </p>
              <p className="timeline-description">{experience.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};