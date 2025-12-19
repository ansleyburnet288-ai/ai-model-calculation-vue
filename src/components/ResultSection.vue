<template>
    <section class="results-section section-with-header">
        <div class="section-header">
            <div class="section-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11L12 14L22 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 1V3M12 21V23M1 12H3M21 12H23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
            <div class="section-title-content">
                <h2 class="section-title">AI Calculation Results</h2>
                <p class="section-subtitle">The Pacific Palisades recommended bank appraisal goal is $1200+ per sf. Our intelligent calculation system demonstrates that positive equity is achievable with the Minitensor Design-Build strategy, uniquely optimized for your specific rebuilding goals through advanced predictive analytics.</p>
            </div>
        </div>

        <div class="comparison-summary">
            <div class="summary-cards">
                <div class="summary-card">
                    <div class="summary-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="summary-content">
                        <span class="summary-label">Banks Estimated Value</span>
                        <span class="summary-value" id="estimated-value">{{ formatCurrency(this.estimatedValue) }}</span>
                    </div>
                </div>
                <div class="summary-card">
                    <div class="summary-icon cost">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
                            <path d="M9 9H15M9 12H15M9 15H15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <div class="summary-content">
                        <span class="summary-label">Total Construction Cost</span>
                        <span class="summary-value" id="actual-total">{{ formatCurrency(this.actualTotal) }}</span>
                    </div>
                </div>
                <div class="summary-card" :class="{ 'positive': netEquity > 0, 'negative': netEquity < 0 }">
                    <div class="summary-icon equity">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 11L12 14L22 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="summary-content">
                        <span class="summary-label">Net Equity</span>
                        <span class="summary-value" id="net-equity">{{ formatCurrency(this.netEquity) }}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="results-info">
            <p>Our AI calculation system presents three optimized rebuilding pathways for your property with Minitensor. Each option is processed through our intelligent modal calculation engine, providing detailed cost breakdowns and equity projections. For the spec builder option, you will need an invitation to access the advanced AI cost analysis features. Please email <a
                    href="mailto:manager@vdc-bim.team">manager@vdc-bim.team</a> if you're a real estate developer seeking comprehensive calculation insights.</p>
        </div>

        <div class="tabs-container">
            <div class="tabs">
                <button v-if="this.$route.name === 'Home'" class="tab-btn" @click="tabButtonClicked('owner_rep')"
                    :class="{ 'active': actTab == 'owner_rep' }" data-tab="owner-rep">
                    <svg class="tab-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 11L12 14L22 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Owner Rep
                </button>
                <button v-if="this.$route.name === 'Home'" class="tab-btn" @click="tabButtonClicked('gc')" :class="{ 'active': actTab == 'gc' }"
                    data-tab="gc">
                    <svg class="tab-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    Traditional GC
                </button>
                <button v-if="this.$route.name === 'SpecBuilder'" class="tab-btn" @click="tabButtonClicked('spec_builder')"
                    :class="{ 'active': actTab == 'spec_builder' }"
                    data-tab="spec-builder">
                    <svg class="tab-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Spec Builder
                </button>
            </div>

            <div v-for="(key, index) in Object.keys(tabObj)" :key="index" v-show="actTab == key"
                class="tab-content active" id="owner-rep-tab">
                <div v-if="tabObj[key].result" class="tab-content-wrapper">
                    <h3 class="tab-content-title">{{ tabObj[key].title }}</h3>
                    <div class="result-list-container">
                        <ul class="result-list" id="owner-rep-results">
                            <li v-for="(item, itemIndex) in tabObj[key].result.lineItems" :key="itemIndex" 
                                class="result-item"
                                :class="{ 'no-access': isHomeowner && (key === 'owner_rep' && noAccessItems_OwnerRep.includes(itemIndex+1) || key === 'gc' && noAccessItems_Traditional.includes(itemIndex+1)) }">
                                <span class="result-item-label">{{`${itemIndex + 1}. ${item.item}`}}</span>
                                <span class="result-item-value" :class="{ 'negative': item.cost < 0, 'no-access': isHomeowner && (key === 'owner_rep' && noAccessItems_OwnerRep.includes(itemIndex+1) || key === 'gc' && noAccessItems_Traditional.includes(itemIndex+1)) }">
                                    {{isHomeowner && (key === 'owner_rep' && noAccessItems_OwnerRep.includes(itemIndex+1) || key === 'gc' && noAccessItems_Traditional.includes(itemIndex+1)) ? 'No Access' : item.cost_display || formatCurrency(item.cost)}}
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div class="totals">
                        <div class="totals-header">
                            <h4>Summary</h4>
                        </div>
                        <div class="totals-grid">
                            <div class="total-item">
                                <span class="total-label">Total Construction Cost</span>
                                <span class="total-value" id="owner-rep-total-cost">{{formatCurrency(tabObj[key].result.totalCost)}}</span>
                            </div>
                            <div class="total-item">
                                <span class="total-label">Cost per Sq. Foot</span>
                                <span class="total-value" id="owner-rep-cost-per-sqft">{{formatDecimal(tabObj[key].result.costPerSquareFoot)}}</span>
                            </div>
                            <div class="total-item">
                                <span class="total-label">Insurance Payout</span>
                                <span class="total-value" id="owner-rep-insurance-payout">{{ formatCurrency(totalInsurancePayoutAmout) }}</span>
                            </div>
                            <div class="total-item">
                                <span class="total-label">Extended Coverage</span>
                                <span class="total-value" id="owner-rep-extended-coverage">{{ formatCurrency(extendedInsuranceCoverageAmount) }}</span>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </section>
</template>

<script>
import { formatCurrency, formatDecimal } from './../lib/utils';
export default {
    props: [
        'tabObj',
        'activeTab',
        'estimatedValue',
        'actualTotal',
        'netEquity',
        'totalInsurancePayoutAmout',
        'extendedInsuranceCoverageAmount'
    ],
    data() {
        return {
            actTab: this.activeTab,
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.state.user.uid
        },
        isHomeowner() {
            return ['homeowner', 'homeowner_3d_replacement'].includes(this.$store.state.user.userRole)
        },
        noAccessItems_OwnerRep() {
            return [1,3,4,6,7,9,10,12,13,14]
        },
        noAccessItems_Traditional() {
            return [1,3,4,6,7,9,10,12,13]
        },
    },
    methods: {
        formatCurrency(amount) {
            return formatCurrency(amount);
        },
        formatDecimal(amount) {
            return formatDecimal(amount);
        },
        tabButtonClicked(tabId) {
            this.actTab = tabId;
            this.$emit('tab-button-click', tabId)
        },
    }
}
</script>

<style scoped>
.comparison-summary {
  margin: 2rem 0;
}

.summary-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.summary-card {
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
}

.summary-card:hover {
  border-color: #9333EA;
  box-shadow: 0 4px 16px rgba(147, 51, 234, 0.15);
  transform: translateY(-2px);
}

.summary-card.positive {
  border-color: #34A853;
  background: linear-gradient(135deg, rgba(52, 168, 83, 0.1) 0%, rgba(46, 125, 50, 0.1) 100%);
}

.summary-card.negative {
  border-color: #EA4335;
  background: linear-gradient(135deg, rgba(234, 67, 53, 0.1) 0%, rgba(211, 47, 47, 0.1) 100%);
}

.summary-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
  border-radius: 10px;
  color: #9333EA;
  flex-shrink: 0;
}

.summary-icon.cost {
  background: linear-gradient(135deg, rgba(52, 168, 83, 0.1) 0%, rgba(46, 125, 50, 0.1) 100%);
  color: #34A853;
}

.summary-icon.equity {
  background: linear-gradient(135deg, rgba(234, 67, 53, 0.1) 0%, rgba(211, 47, 47, 0.1) 100%);
  color: #EA4335;
}

.summary-card.positive .summary-icon.equity {
  background: linear-gradient(135deg, rgba(52, 168, 83, 0.15) 0%, rgba(46, 125, 50, 0.15) 100%);
  color: #34A853;
}

.summary-icon svg {
  width: 24px;
  height: 24px;
}

.summary-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.summary-label {
  font-size: 0.875rem;
  color: #718096;
  font-weight: 500;
}

.summary-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a2e;
}

.summary-card.positive .summary-value {
  color: #34A853;
}

.summary-card.negative .summary-value {
  color: #EA4335;
}

.results-info {
  background: #f7fafc;
  border-left: 4px solid #9333EA;
  border-radius: 8px;
  padding: 1.25rem;
  margin: 2rem 0;
}

.results-info p {
  margin: 0;
  color: #4a5568;
  line-height: 1.7;
}

.results-info a {
  color: #9333EA;
  text-decoration: none;
  font-weight: 600;
}

.results-info a:hover {
  text-decoration: underline;
}

.tabs-container {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 2rem;
}

.tabs {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 0.5rem;
}

.tab-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  color: #718096;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 6px 6px 0 0;
}

.tab-btn:hover {
  color: #9333EA;
  background: rgba(147, 51, 234, 0.05);
}

.tab-btn.active {
  color: #9333EA;
  border-bottom-color: #9333EA;
  background: rgba(147, 51, 234, 0.1);
}

.tab-icon {
  width: 18px;
  height: 18px;
}

.tab-content-wrapper {
  padding-top: 1rem;
}

.tab-content-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 1.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

.result-list-container {
  background: #f7fafc;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  max-height: 500px;
  overflow-y: auto;
}

.result-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.result-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
}

.result-item:hover {
  border-color: #9333EA;
  box-shadow: 0 2px 8px rgba(147, 51, 234, 0.1);
}

.result-item.no-access {
  opacity: 0.6;
  background: #f7fafc;
}

.result-item-label {
  flex: 1;
  color: #2d3748;
  font-weight: 500;
  font-size: 0.95rem;
}

.result-item-value {
  font-weight: 600;
  font-size: 1rem;
  color: #1a1a2e;
  min-width: 120px;
  text-align: right;
}

.result-item-value.negative {
  color: #EA4335;
}

.result-item-value.no-access {
  color: #a0aec0;
  font-style: italic;
}

.totals {
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%);
  border: 2px solid rgba(147, 51, 234, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
}

.totals-header {
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid rgba(147, 51, 234, 0.2);
}

.totals-header h4 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #9333EA;
}

.totals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.total-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  border: 1px solid rgba(147, 51, 234, 0.1);
}

.total-label {
  font-size: 0.875rem;
  color: #718096;
  font-weight: 500;
}

.total-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a2e;
}

/* Responsive */
@media (max-width: 768px) {
  .summary-cards {
    grid-template-columns: 1fr;
  }

  .tabs {
    flex-direction: column;
    gap: 0.5rem;
  }

  .tab-btn {
    width: 100%;
    justify-content: center;
    border-bottom: none;
    border-left: 3px solid transparent;
    border-radius: 6px;
  }

  .tab-btn.active {
    border-left-color: #9333EA;
    border-bottom-color: transparent;
  }

  .totals-grid {
    grid-template-columns: 1fr;
  }

  .result-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .result-item-value {
    text-align: left;
    width: 100%;
  }
}
</style>