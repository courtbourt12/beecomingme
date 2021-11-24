export const getSavedGoalIds = () => {
    const savedGoalIds = localStorage.getItem('saved_goal')
      ? JSON.parse(localStorage.getItem('saved_goal'))
      : [];
  
    return savedGoalIds;
  };
  
  export const saveGoalIds = (goalIdArr) => {
    if (goalIdArr.length) {
      localStorage.setItem('add_goal', JSON.stringify(goalIdArr));
    } else {
      localStorage.removeItem('add_goal');
    }
  };
  
  export const removeGoalId = (goalId) => {
    const savedGoalIds = localStorage.getItem('saved_goal')
      ? JSON.parse(localStorage.getItem('saved_goal'))
      : null;
  
    if (!savedGoalIds) {
      return false;
    }
  
    const updatedSavedGoalIds = savedGoalIds?.filter((savedGoalId) => savedGoalId !== goalId);
    localStorage.setItem('saved_goal', JSON.stringify(updatedSavedGoalIds));
  
    return true;
  };
  