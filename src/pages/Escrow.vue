<template>
    <section class="section">
            <div class="bg-white rounded-xl shadow-xs md:p-4 sm:p-1 dark:bg-neutral-900">
                <div class="text-left mb-5 text-lg font-bold">
                    <h4>Two Types Of Referrals</h4>
                    <div>1. Projects</div>
                    <div>2. Products</div>
                </div>
                <ReferralsList :referrals="referrals"/>
                <br/>
                <SectionCommission :commissionPercentage="commissionPercentage" :commissionAmount="commissionAmount" />
                <div class="md:flex font-bold">
                    <h4 class="">Your Estimated Commission: </h4>
                    <div class="font-bold text-vdc-secondary-color">
                        <span class="mx-2">{{commissionPercentage}}%</span> <span>{{commissionAmount}}</span>
                    </div>
                </div>
            </div>
    </section>
</template>

<script>
import SectionCommission from '../components/SectionCommission.vue';
import ReferralsList from '../components/ReferralsList';
import { formatCurrency } from '../lib/utils';
export default {
    components: { SectionCommission, ReferralsList },
    data() {
        return {
            commissionPercentage: this.$root.sharedData.commissionPercentage,
            commissionAmount: null,
            referrals: [],
        }
    },
    created() {
        // Load referrals from localStorage if available
        try {
            const storedReferrals = JSON.parse(localStorage.getItem('referrals') || '[]');
            const userEmail = this.$store.state.user.email;
            if (userEmail) {
                this.referrals = storedReferrals.filter(ref => ref.createdBy === userEmail);
            } else {
                this.referrals = storedReferrals;
            }
        } catch (error) {
            console.error('Error loading referrals:', error);
            this.referrals = [];
        }
    },
    mounted() {
    },
    methods: {
        calculateCommission(totalCost) {
            this.commissionAmount = formatCurrency(totalCost * this.commissionPercentage / 100);
        }
    },
    beforeRouteEnter(to, from, next) {        
        next(vm => {
            vm.calculateCommission(vm.$root.sharedData.totalCost);
        })
    }
}
</script>