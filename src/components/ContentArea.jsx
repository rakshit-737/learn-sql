import React from 'react';
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
};

function ContentArea({ currentTopic }) {
  const TopicComponent = topicComponents[currentTopic] || IntroTopic;

  return (
    <div className="content-area">
      <TopicComponent />
    </div>
  );
}

export default ContentArea;
