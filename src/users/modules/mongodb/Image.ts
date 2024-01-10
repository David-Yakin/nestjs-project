import mongoose from 'mongoose';
import { URL, DEFAULT_VALIDATION } from './defaultValidations';

const Image = new mongoose.Schema({
  url: URL,
  alt: {
    type: String,
    maxLength: 256,
    trim: true,
    lowercase: true,
    default: '',
  },
});

export default Image;
