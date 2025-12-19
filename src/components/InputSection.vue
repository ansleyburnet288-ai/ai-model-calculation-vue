<template>
    <section class="input-section section-with-header">
        <div class="section-header">
            <div class="section-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
                    <path d="M9 9H15M9 15H15M9 12H15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <circle cx="18" cy="6" r="2" fill="currentColor"/>
                    <path d="M16 6L12 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
            <div class="section-title-content">
                <h2 class="section-title">AI Calculation Interface</h2>
                <p class="section-subtitle">Enter your property values to run intelligent cost analysis and equity projections</p>
            </div>
        </div>
        <div v-if="isShowCommission" class="commission-banner">
            <h4>Your Estimated Commission: </h4>
            <div class="font-bold text-vdc-secondary-color">
                <span class="mx-2">{{commissionPercentage}}%</span> <span>{{commissionAmount}}</span>
            </div>
        </div>
        <div class="form-grid">
            <div class="input-group">
                <label for="total-area">Total House Area (sq ft)*</label>
                <input v-model="totalAreaInput" type="number" @input="validateTotalAreaInput()" id="total-area"
                    placeholder="Enter area..." min="0">
            </div>
            <div class="input-group">
                <label for="cost-per-sqft">Cost Per Square Foot ($)*</label>
                <input v-model="costPerSqftInput" type="number" @input="validateCostPerSqftInput()"
                    id="cost-per-sqft" placeholder="Enter cost..." min="0">
            </div>
            <div class="input-group">
                <label for="target-appraisal-per-sf">Target Appraisal Per SF*</label>
                <input type="number" v-model="targetAppraisalInput" id="target-appraisal-per-sf"
                    placeholder="Enter area..." min="0" value="1200">
            </div>
            <div class="input-group">
                <label>Guaranteed Insurance Recovery Payout*</label>
                <input type="number" v-model="totalInsurancePayoutInput" placeholder="Enter cost..." min="0"
                    value="0">
            </div>
        </div>
        <div class="input-group" style="margin-top: 1rem">
            <label>Estimated Extended Insurance Coverage</label>
            <input type="number" v-model="extendedInsuranceCoverageInput" placeholder="Enter cost..." min="0"
                value="0">
        </div>
        <button id="calculate-btn" @click="calculate" class="calculate-button">
            <svg class="button-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Run AI Calculation
        </button>
        <div class="info-box">
            <div class="info-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 16V12M12 8H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
            <div class="info-content">
                <p class="info-text">
                    <strong>Note:</strong> Our AI modal calculation system processes values based on a 5000 sf home with a $1000 per sf recommended cost to
                    maximize the appraised value of your home in the Pacific Palisades. The intelligent algorithm analyzes market trends, material costs, and construction methodologies to deliver precise projections.
                </p>
                <p class="info-text">
                    Our AI calculation engine incorporates 30 years of fireproof ICF construction data, continuously learning from successful projects to provide increasingly accurate predictions for high-value properties and family safety.
                </p>
            </div>
        </div>
    </section>
</template>

<script>
import { validationConfig } from '../config/validationConfig';
import { validateInput, formatCurrency } from '../lib/utils';
export default {
    props: [ 'defaultCostPerSqftInput' ],
    data() {
        return {
            totalAreaInput: 5000,
            costPerSqftInput: this.defaultCostPerSqftInput,
            targetAppraisalInput: 1200,
            totalInsurancePayoutInput: 0,
            extendedInsuranceCoverageInput: 0,
        }
    },
    computed: {
        isShowCommission() {
            return ['vdc_partner', 'spec_build_partnership', 'realtor'].includes(this.$store.state.user.userRole)
        },
        commissionPercentage() {
            return this.$root.sharedData.commissionPercentage;
        },
        commissionAmount() {
            return formatCurrency(this.totalAreaInput * this.costPerSqftInput * this.$root.sharedData.commissionPercentage / 100);
        }
    },
    mounted() {
        this.calculate();
    },
    methods: {
        validateTotalAreaInput() {
            return validateInput(document.getElementById('total-area'), validationConfig.totalArea);
        },
        validateCostPerSqftInput() {
            return validateInput(document.getElementById('cost-per-sqft'), validationConfig.costPerSqft);
        },
        calculate() {
            if (!this.validateTotalAreaInput() || !this.validateCostPerSqftInput()) {
                return;
            }
            const params = { 
                totalAreaInput: this.totalAreaInput,
                costPerSqftInput: this.costPerSqftInput || validationConfig.costPerSqft.defaultValue,
                targetAppraisalInput: this.targetAppraisalInput,
                totalInsurancePayoutInput: this.totalInsurancePayoutInput,
                extendedInsuranceCoverageInput: this.extendedInsuranceCoverageInput,
            }
            this.$emit('calculate', params)
        }
    }
}
</script>
<style lang="scss" scoped>
.input-section {
    h2 {
        width: 100%;
    }
}

.calculate-button {
    width: 100%;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #9333EA 0%, #A855F7 100%);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px rgba(147, 51, 234, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin: 2rem 0;
}

.calculate-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(147, 51, 234, 0.4);
}

.calculate-button:active {
    transform: translateY(0);
}

.button-icon {
    width: 24px;
    height: 24px;
}

.info-box {
    background: linear-gradient(135deg, rgba(147, 51, 234, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%);
    border: 2px solid rgba(147, 51, 234, 0.2);
    border-radius: 12px;
    padding: 1.5rem;
    margin-top: 1.5rem;
    display: flex;
    gap: 1.25rem;
    align-items: flex-start;
}

.info-icon {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    color: #9333EA;
    margin-top: 0.25rem;
}

.info-icon svg {
    width: 100%;
    height: 100%;
}

.info-content {
    flex: 1;
}

.info-text {
    margin: 0 0 1rem 0;
    color: #4a5568;
    line-height: 1.7;
    font-size: 0.95rem;
}

.info-text:last-child {
    margin-bottom: 0;
}

.info-text strong {
    color: #2d3748;
    font-weight: 600;
}

/* Form improvements */
.form-grid {
    .input-group {
        label {
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 0.5rem;
            font-size: 0.95rem;
        }

        input {
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            padding: 0.875rem;
            font-size: 1rem;
            transition: all 0.2s ease;
            background: white;
        }

        input:focus {
            outline: none;
            border-color: #9333EA;
            box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.1);
        }

        input::placeholder {
            color: #a0aec0;
        }
    }
}

@media (max-width: 768px) {
    .info-box {
        flex-direction: column;
        gap: 1rem;
    }

    .info-icon {
        margin-top: 0;
    }
}
</style>