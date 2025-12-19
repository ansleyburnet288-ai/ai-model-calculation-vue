// Validation configurations
export const validationConfig = {
    totalArea: {
      min: 100,
      max: 50000,
      required: true,
      errorMessages: {
        required: 'Total House Area is required',
        min: 'Total House Area must be at least 100 sq ft',
        max: 'Total House Area must be less than 50,000 sq ft',
        type: 'Total House Area must be a valid number'
      }
    },
    costPerSqft: {
      min: 50,
      max: 2000,
      required: false,
      defaultValue: 1000,
      errorMessages: {
        min: 'Cost Per Square Foot must be at least $50',
        max: 'Cost Per Square Foot must be less than $2,000',
        type: 'Cost Per Square Foot must be a valid number'
      }
    }
  };