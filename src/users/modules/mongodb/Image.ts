import mongoose from 'mongoose';
import { URL, DEFAULT_VALIDATION } from './defaultValidations';

const Image = new mongoose.Schema({
  url: { ...URL, required: true },
  alt: DEFAULT_VALIDATION,
});

export default Image;
