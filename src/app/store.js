import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  notificationsReducer,
  themeReducer,
  sidebarReducer,
  uiReducer,
  quizzesReducer,
  filieresReducer,
  authReducer,
  competencesSlice,
  scheduleReducer,
  profileSlice,
  documentsReducer,
  moduleReducer,
  profileSlice
} from '../features';

const rootReducer = combineReducers({
  notifications: notificationsReducer,
  theme: themeReducer,
  sidebar: sidebarReducer,
  ui: uiReducer,
  quizzes: quizzesReducer,
  filieres: filieresReducer,
  competences: competencesSlice,
  auth: authReducer,
  schedule: scheduleReducer,
  profile: profileSlice,
  documents: documentsReducer,
  modules: moduleReducer,
   });
  profile: profileSlice
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
