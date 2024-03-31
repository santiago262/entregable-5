
import { configureStore } from '@reduxjs/toolkit'
import trainer from './state/trainer.Slice'
export default configureStore({
  reducer:{
    trainer
    
  }
})