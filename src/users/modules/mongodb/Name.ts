import mongoose from 'mongoose';
import { DEFAULT_VALIDATION } from './defaultValidations';

const Name = new mongoose.Schema({
  first: DEFAULT_VALIDATION,
  middle: {
    type: String,
    maxLength: 256,
    trim: true,
    lowercase: true,
    default: '',
  },
  last: DEFAULT_VALIDATION,
});

export default Name;
