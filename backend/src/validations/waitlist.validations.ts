import { z } from 'zod';

// Base schema with common fields
const waitlistBaseSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  feature: z.string().min(1, 'Please select a feature'),
  alternatives: z.string().min(1, 'Please select an alternative'),
  success: z.string().min(1, 'Please select a success metric'),
  country: z.string().min(1, 'Please select a country'),
  price: z.string().min(1, 'Please enter a price'),
});

// Conditional schema for when alternatives is "Other"
const withOtherFinancialApp = waitlistBaseSchema.extend({
  alternatives: z.literal('Other'),
  otherFinancialApp: z.string().min(1, 'Please specify the other financial app')
});

// Conditional schema for when success is "Other"
const withOtherSuccessMetric = waitlistBaseSchema.extend({
  success: z.literal('Other'),
  otherSuccessMetric: z.string().min(1, 'Please specify the other success metric')
});

// Combined schema that handles all cases
export const waitlistSchema = z.union([
  // Case 1: Both alternatives and success are "Other"
  waitlistBaseSchema
    .extend({
      alternatives: z.literal('Other'),
      success: z.literal('Other')
    })
    .extend({
      otherFinancialApp: z.string().min(1, 'Please specify the other financial app'),
      otherSuccessMetric: z.string().min(1, 'Please specify the other success metric')
    }),
  
  // Case 2: Only alternatives is "Other"
  withOtherFinancialApp,
  
  // Case 3: Only success is "Other"
  withOtherSuccessMetric,
  
  // Case 4: Neither is "Other"
  waitlistBaseSchema
]).superRefine((data, ctx) => {
  // Additional custom validation if needed
  if (data.alternatives === 'Other' && 'otherFinancialApp' in data && !data.otherFinancialApp) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['otherFinancialApp'],
      message: 'Please specify the other financial app'
    });
  }
  
  if (data.success === 'Other' && 'otherSuccessMetric' in data && !data.otherSuccessMetric) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['otherSuccessMetric'],
      message: 'Please specify the other success metric'
    });
  }
});