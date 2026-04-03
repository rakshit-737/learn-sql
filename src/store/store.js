import { create } from 'zustand';

export const useStore = create((set) => ({
  currentTopic: 'intro',
  setCurrentTopic: (topic) => set({ currentTopic: topic }),
  
  completedExercises: {},
  setExerciseCompleted: (exerciseId, isCompleted) => 
    set((state) => ({
      completedExercises: {
        ...state.completedExercises,
        [exerciseId]: isCompleted,
      },
    })),
  
  quizAnswers: {},
  setQuizAnswer: (questionId, answer) => 
    set((state) => ({
      quizAnswers: {
        ...state.quizAnswers,
        [questionId]: answer,
      },
    })),
  
  getProgressPercentage: () => {
    return Math.floor(Math.random() * 45) + 30; // Placeholder
  },
}));
