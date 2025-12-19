<template>
    <div>
        <div class="main-container">
            <SectionTop />
            
            <section class="section section-with-header">
                <div class="section-header">
                    <div class="section-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="section-title-content">
                        <h2 class="section-title">AI-Powered Questions & Analysis</h2>
                        <p class="section-subtitle">Our AI modal calculation system answers these critical questions for you after a wildfire takes a property, providing intelligent insights through advanced computational analysis.</p>
                    </div>
                </div>
                <AccordionQueries />
            </section>
            
            <InputSection
                :defaultCostPerSqftInput="1000"
                @calculate="calculateAndDisplayResults"
            />

            <section class="section section-with-header">
                <div class="section-header">
                    <div class="section-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.27 6.96L12 12.01L20.73 6.96" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 22.08V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="section-title-content">
                        <h2 class="section-title">Structural Shell Packages</h2>
                        <p class="section-subtitle">Explore our Minitensor+ ICCF-ICF Structural Shell Packages designed for wildfire-prone areas</p>
                    </div>
                </div>
                <AccordionMiddle />
            </section>            

            <ResultSection
                :tabObj="tabObj"
                :activeTab="activeTab"
                :estimatedValue="estimatedValue"
                :actualTotal="actualTotal"
                :netEquity="netEquity"
                :totalInsurancePayoutAmout="totalInsurancePayoutAmout"
                :extendedInsuranceCoverageAmount="extendedInsuranceCoverageAmount"
                @tab-button-click="watchHighlight"
            />

            <SectionDesc />
            <RadioSection />
            <ScrollToTop />
        </div>
    </div>
</template>

<script>
import SectionTop from '../components/SectionTop.vue';
import SectionDesc from '../components/SectionDesc.vue';
import AccordionQueries from '../components/AccordionQueries.vue';
import AccordionMiddle from '../components/AccordionMiddle.vue';
import InputSection from '../components/InputSection.vue';
import ResultSection from '../components/ResultSection.vue';
import RadioSection from '../components/RadioSection.vue';
import ScrollToTop from '../components/ScrollToTop.vue';
import { calculateGCWorkflow, calculateOwnerRepWorkflow, calculateSpecBuilderWorkflow } from '../lib/utils';
export default {
  components: { SectionTop, SectionDesc, AccordionQueries, AccordionMiddle, InputSection, ResultSection, RadioSection, ScrollToTop },
  name: 'Home',
  data() {
    return {
        inputsObj: null,
        tabObj: {
            owner_rep: {
                result: null,
                title: 'Minitensor + Owner Rep Workflow',
            },
            gc: {
                result: null,
                title: 'Traditional GC with Architect'
            },
            spec_builder: {
                result: null,
                title: 'Minitensor + Owner Rep for Spec. Builders Partnership'
            }
        },
        activeTab: 'owner_rep',
        estimatedValue: 0,
        actualTotal: 0,
        netEquity: 0,
        totalInsurancePayoutAmout: 0,
        extendedInsuranceCoverageAmount: 0,
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
  },
  methods: {    
    watchHighlight(tabId) {
        this.activeTab = tabId;
        const totalHouseArea = this.inputsObj.totalAreaInput;
        const costPerSqft = this.inputsObj.costPerSqftInput;
        const targetAppraisalPerSF = this.inputsObj.targetAppraisalInput;
        const result = this.tabObj[tabId].result;
        if (tabId == 'owner_rep') {
            this.estimatedValue = totalHouseArea * targetAppraisalPerSF;
            this.actualTotal = result.totalCost;
            this.netEquity = totalHouseArea * targetAppraisalPerSF - result.totalCost;
        }
        if (tabId == 'gc') {
            this.estimatedValue = totalHouseArea * costPerSqft;
            this.actualTotal = result.totalCost;
            this.netEquity = totalHouseArea * costPerSqft - result.totalCost;
        }
        if (tabId == 'spec_builder') {
            this.estimatedValue = totalHouseArea * targetAppraisalPerSF;
            this.actualTotal = result.totalCost;
            this.netEquity = totalHouseArea * targetAppraisalPerSF - result.totalCost;
        }
        this.totalInsurancePayoutAmout = this.inputsObj.totalInsurancePayoutInput;
        this.extendedInsuranceCoverageAmount = this.inputsObj.extendedInsuranceCoverageInput;
        this.$store.dispatch('save_total_code', this.actualTotal);
        this.$root.sharedData.totalCost = totalHouseArea * costPerSqft;
    },
    calculateAndDisplayResults(params) {
        this.inputsObj = params;
        // Get input values
        const totalHouseArea = this.inputsObj.totalAreaInput;
        const costPerSqft = this.inputsObj.costPerSqftInput;
        // Calculate results
        this.tabObj['owner_rep'].result = calculateOwnerRepWorkflow(totalHouseArea, costPerSqft);
        this.tabObj['gc'].result = calculateGCWorkflow(totalHouseArea, costPerSqft);
        this.tabObj['spec_builder'].result = calculateSpecBuilderWorkflow(totalHouseArea, costPerSqft);
        this.watchHighlight(this.activeTab);
    }
  }
}
</script>
