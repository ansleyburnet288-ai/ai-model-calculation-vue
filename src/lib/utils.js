// Function to format currency
export function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Format decimal values
export function formatDecimal(amount) {
    return new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

// Error message display
function showError(inputElement, message) {
    // Remove any existing error message
    clearError(inputElement);
    
    // Create error message element
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    
    // Insert error message after the input element
    inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
    
    // Highlight the input field
    inputElement.style.borderColor = '#EA4335';
  }
  
  // Clear error message
  function clearError(inputElement) {
    // Remove error styling
    inputElement.style.borderColor = '';
    
    // Remove error message if it exists
    const errorElement = inputElement.parentNode.querySelector('.error-message');
    if (errorElement) {
      errorElement.parentNode.removeChild(errorElement);
    }
  }
  
  // Validate input field
  export function validateInput(inputElement, config) {
    const value = inputElement.value.trim();
    
    // Check if required
    if (config.required && value === '') {
      showError(inputElement, config.errorMessages.required);
      return false;
    }
    
    // If empty but not required, use default value
    if (value === '' && !config.required) {
      // inputElement.value = config.defaultValue;
      return true;
    }
    
    // Check if it's a valid number
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      showError(inputElement, config.errorMessages.type);
      return false;
    }
    
    // Check minimum value
    if (numValue < config.min) {
      showError(inputElement, config.errorMessages.min);
      return false;
    }
    
    // Check maximum value
    if (numValue > config.max) {
      showError(inputElement, config.errorMessages.max);
      return false;
    }
    
    // Clear any existing error
    clearError(inputElement);
    return true;
  }

  /**
 * Calculate the Traditional GC with Architect workflow
 * @param {number} totalHouseArea - Total house area in square feet
 * @param {number} costPerSqft - Cost per square foot
 * @returns {object} Object containing line items, total cost, and cost per square foot
 */
export function calculateGCWorkflow(totalHouseArea, costPerSqft = 1000) {
    const results = [];
    
    // Base construction cost
    const constructionCost = totalHouseArea * costPerSqft;
    
    // 1. Total Material Allowance - 12% of construction cost
    const C1 = constructionCost / 2;
    results.push({
        item: "Total Material Allowance",
        cost: C1,
        cost_display: '-'
    });
    
    // 2. Total Labor Cost - 15% of construction cost
    const C2 = constructionCost - C1
    results.push({
        item: "Total Labor Cost",
        cost: C2
    });
    
    // 3. GC Product Overhead - 6% of construction cost
    results.push({
        item: "GC Product Overhead",
        cost: 0,
        cost_display: '-'
    });
    
    // 4. Contingency, Tariffs, Inflation - Fixed cost
    results.push({
        item: "Contingency, Tariffs, Inflation",
        cost: 0,
        cost_display: '-'
    });
    
    // 5. Architecture/Engineering Allowance Ready to Start Construction - 4% of construction cost
    results.push({
        item: "Architecture/Engineering Allowance Ready to Start Construction",
        cost: 0.08 * (C1 + C2),
        cost_display: '-'
    });
    
    // 6. Estimated Permit Fee for Burned lots - 10% of construction cost
    results.push({
        item: "Estimated Permit Fee for Burned lots",
        cost: totalHouseArea * 8
    });
    
    // 7. Other Construction Documents, soils-civil Engineering Reports - Fixed cost
    const TotalPprojectCost = constructionCost
    results.push({
        item: "Other Construction Documents, soils-civil Engineering Reports",
        cost: 0.002 * TotalPprojectCost
    });
    
    // 8. Building Materials Procurement - 3% of construction cost
    results.push({
        item: "Building Materials Procurement",
        cost: 0,
        cost_display: '-'
    });
    
    // 9. Site Superintendent - Not applicable
    results.push({
        item: "Site Superintendent",
        cost: 0.03 * TotalPprojectCost
    });
    
    // 10. Reality Capture using Drones, Lidar, Photogrametry, Satellite data - Not applicable
    results.push({
        item: "Reality Capture using Drones, Lidar, Photogrametry, Satellite data",
        cost: 0,
        cost_display: '-'
    });
    
    // 11. 24/7 Job Site Support - Not applicable
    results.push({
        item: "24/7 Job Site Support",
        cost: 0,
        cost_display: 'No'
    });
    
    // 12. Minitensor+ Owner rep for Owner Builder Services
    results.push({
        item: "Minitensor+ Owner rep for Owner Builder Services",
        cost: 0,
        cost_display: '-'
    });
    
    // 13. 12.5% Anticipated Change Orders - Fixed cost
    results.push({
        item: "12.5% Anticipated Change Orders",
        cost: 0.125 * TotalPprojectCost
    });
    
    // Calculate total cost
    const totalCost = results.reduce((sum, item) => sum + item.cost, 0);
    
    // Calculate cost per square foot
    const costPerSquareFoot = totalHouseArea > 0 ? totalCost / totalHouseArea : 0;
    
    return {
        lineItems: results,
        totalCost: totalCost,
        costPerSquareFoot: costPerSquareFoot
    };
}

/**
 * Calculate the Minitensor + Owner Rep workflow
 * @param {number} totalHouseArea - Total house area in square feet
 * @param {number} costPerSqft - Cost per square foot
 * @returns {object} Object containing line items, total cost, and cost per square foot
 */
export function calculateOwnerRepWorkflow(totalHouseArea, costPerSqft = 1000) {
    const results = [];
    
    // Base construction cost
    const constructionCost = totalHouseArea * costPerSqft;
    
    // 1. Total Material Allowance
    const C1 = constructionCost / 2;
    const J2 = 1;
    results.push({
        item: "Total Material Allowance",
        cost: C1 * 0.55 * J2,
        cost_display: '-'
    });
    
    // 2. Total Labor Cost
    const C2 = constructionCost - C1
    results.push({
        item: "Total Labor Cost",
        cost: C2 * J2
    });
    
    // 3. GC Product Overhead
    results.push({
        item: "GC Product Overhead",
        cost: 0,
        cost_display: '-'
    });
    
    // 4. Contingency, Tariffs, Inflation
    results.push({
        item: "Contingency, Tariffs, Inflation",
        cost: 0.05 * (C1 * 0.55 * J2 + C2 * J2)
    });
    
    // 5. Architecture/Engineering Allowance Ready to Start Construction
    results.push({
        item: "Architecture/Engineering Allowance Ready to Start Construction",
        cost: 0,
        cost_display: '-'
    });
    
    // 6. Estimated Permit Fee for Burned lots
    results.push({
        item: "Estimated Permit Fee for Burned lots",
        cost: totalHouseArea * 8 * J2
    });
    
    // 7. Other Construction Documents, soils-civil Engineering Reports - 0.2% of construction cost
    const TotalPprojectCost = constructionCost
    results.push({
        item: "Other Construction Documents, soils-civil Engineering Reports",
        cost: 0.002 * TotalPprojectCost * J2
    });
    
    // 8. Building Materials Procurement
    results.push({
        item: "Building Materials Procurement",
        cost: 0,
        cost_display: '-'
    });
    
    // 9. Site Superintendent - 8% savings
    results.push({
        item: "Site Superintendent",
        cost: 0.05 * TotalPprojectCost * J2
    });
    
    // 10. Reality Capture using Drones, Lidar, Photogrametry, Satellite data
    results.push({
        item: "Reality Capture using Drones, Lidar, Photogrametry, Satellite data",
        cost: 0.001 * TotalPprojectCost * J2
    });
    
    // 11. 24/7 Job Site Support
    results.push({
        item: "24/7 Job Site Support",
        cost: 0,
        cost_display: 'Yes'
    });
    
    // 12. Minitensor+ Owner rep for Owner Builder Services
    results.push({
        item: "Minitensor+ Owner rep for Owner Builder Services",
        cost: 0.09 * TotalPprojectCost * J2
    });
    
    // 13. 2.5% Anticipated Change Orders
    const K24 = 0.025;
    results.push({
        item: "2.5% Anticipated Change Orders",
        cost: K24 * TotalPprojectCost * J2
    });

    // 14. 10 Year Warranties for Structural and Workmanship
    results.push({
        item: "10 Year Warranties for Structural and Workmanship",
        cost: 0.01 * totalHouseArea * 600
    });
    
    // Calculate total cost
    const totalCost = results.reduce((sum, item) => sum + item.cost, 0);
    
    // Calculate cost per square foot
    const costPerSquareFoot = totalHouseArea > 0 ? totalCost / totalHouseArea : 0;
    
    return {
        lineItems: results,
        totalCost: totalCost,
        costPerSquareFoot: costPerSquareFoot
    };
}

/**
 * Calculate the Minitensor + Owner Rep for Spec Builder workflow
 * @param {number} totalHouseArea - Total house area in square feet
 * @param {number} costPerSqft - Cost per square foot
 * @returns {object} Object containing line items, total cost, and cost per square foot
 */
export function calculateSpecBuilderWorkflow(totalHouseArea, costPerSqft = 1000) {
    const results = [];
    
    // Base construction cost
    const constructionCost = totalHouseArea * costPerSqft;
    
    // 1. Total Material Allowance
    const C1 = constructionCost / 2;
    // const J2 = 0.60621369032584;
    const J2 = 1;
    results.push({
        item: "Total Material Allowance",
        cost: C1 * 0.55 * J2
    });
    
    // 2. Total Labor Cost
    const C2 = constructionCost - C1
    results.push({
        item: "Total Labor Cost",
        cost: C2 * J2
    });
    
    // 3. GC Product Overhead
    results.push({
        item: "GC Product Overhead",
        cost: 0,
        cost_display: '-'
    });
    
    // 4. Contingency, Tariffs, Inflation
    results.push({
        item: "Contingency, Tariffs, Inflation",
        cost: 0.05 * (C1 * 0.55 * J2 + C2 * J2)
    });
    
    // 5. Architecture/Engineering Allowance Ready to Start Construction
    results.push({
        item: "Architecture/Engineering Allowance Ready to Start Construction",
        cost: 0,
        cost_display: '-'
    });
    
    // 6. Estimated Permit Fee for Burned lots
    results.push({
        item: "Estimated Permit Fee for Burned lots",
        cost: totalHouseArea * 8 * J2
    });
    
    // 7. Other Construction Documents, soils-civil Engineering Reports
    const K23 = constructionCost
    results.push({
        item: "Other Construction Documents, soils-civil Engineering Reports",
        cost: 0.002 * K23 * J2
    });
    
    // 8. Building Materials Procurement
    results.push({
        item: "Building Materials Procurement",
        cost: 0,
        cost_display: '-'
    });
    
    // 9. Site Superintendent
    results.push({
        item: "Site Superintendent",
        cost: 0.05 * K23 * J2
    });
    
    // 10. Reality Capture using Drones, Lidar, Photogrametry, Satellite data - 3% of construction cost
    results.push({
        item: "Reality Capture using Drones, Lidar, Photogrametry, Satellite data",
        cost: 0.001 * K23 * J2
    });
    
    // 11. 24/7 Job Site Support
    results.push({
        item: "24/7 Job Site Support",
        cost: 0,
        cost_display: 'Yes'
    });
    
    // 12. Minitensor+ Owner rep for Owner Builder Services
    results.push({
        item: "Minitensor+ Owner rep for Owner Builder Services",
        cost: 0.09 * K23 * J2
    });
    
    // 13. 2.5% Anticipated Change Orders
    const K24 = 0.025;
    results.push({
        item: "2.5% Anticipated Change Orders",
        cost: K24 * K23 * J2
    });

    // 14. 10 Year Warranties for Structural and Workmanship
    results.push({
        item: "10 Year Warranties for Structural and Workmanship",
        cost: 0.01 * totalHouseArea * 600
    });
    
    // Calculate total cost
    const totalCost = results.reduce((sum, item) => sum + item.cost, 0);
    
    // Calculate cost per square foot
    const costPerSquareFoot = totalHouseArea > 0 ? totalCost / totalHouseArea : 0;
    
    return {
        lineItems: results,
        totalCost: totalCost,
        costPerSquareFoot: costPerSquareFoot
    };
}