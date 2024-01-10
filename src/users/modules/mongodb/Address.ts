import mongoose from 'mongoose';
import { DEFAULT_VALIDATION } from './defaultValidations';

const Address = new mongoose.Schema({
  state: {
    type: String,
    maxLength: 256,
    trim: true,
    lowercase: true,
    default: '',
  },
  country: DEFAULT_VALIDATION,
  city: DEFAULT_VALIDATION,
  street: DEFAULT_VALIDATION,
  houseNumber: {
    type: Number,
    required: true,
    trim: true,
    minLength: 1,
  },
  zip: {
    type: Number,
    trim: true,
    minLength: 4,
    default: 0,
  },
});

export default Address;
