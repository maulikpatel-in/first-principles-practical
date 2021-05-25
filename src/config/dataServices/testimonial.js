import { DataService } from './index';
import { API } from '../api/index';

export const getTestimonialAPI = (requestBody) => {
  return DataService.get(API.testimonial.get, requestBody);
};
