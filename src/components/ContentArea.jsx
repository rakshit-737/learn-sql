import React, { useEffect, useRef } from 'react';
import './ContentArea.css';
import IntroTopic from './Topics/IntroTopic';
import DMLTopic from './Topics/DMLTopic';
import OperatorsTopic from './Topics/OperatorsTopic';
import FunctionsTopic from './Topics/FunctionsTopic';
import JoinsTopic from './Topics/JoinsTopic';
import SubqueriesTopic from './Topics/SubqueriesTopic';
import SequencesTopic from './Topics/SequencesTopic';
import PLSQLTopic from './Topics/PLSQLTopic';
import ProceduresTopic from './Topics/ProceduresTopic';
import TriggersTopic from './Topics/TriggersTopic';
import QuizTopic from './Topics/QuizTopic';
import QuickRefTopic from './Topics/QuickRefTopic';

const topicComponents = {
  intro: IntroTopic,
  dml: DMLTopic,
  operators: OperatorsTopic,
  functions: FunctionsTopic,
  joins: JoinsTopic,
  subqueries: SubqueriesTopic,
  sequences: SequencesTopic,
  plsql: PLSQLTopic,
  procedures: ProceduresTopic,
  triggers: TriggersTopic,
  quiz: QuizTopic,
  quickref: QuickRefTopic,
};

function ContentArea({ currentTopic }) {
  const TopicComponent = topicComponents[currentTopic] || IntroTopic;
  const areaRef = useRef(null);

  /* Scroll to top when topic changes */
  useEffect(() => {
    if (areaRef.current) {
      areaRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentTopic]);

  /* Scroll-reveal observer */
  useEffect(() => {
    const area = areaRef.current;
    if (!area) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { root: area, threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const revealEls = area.querySelectorAll('.reveal');
    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [currentTopic]);

  return (
    <main className="content-area" ref={areaRef} id="main-content">
      <div className="content-inner" key={currentTopic}>
        <TopicComponent />
      </div>
    </main>
  );
}

export default ContentArea;
