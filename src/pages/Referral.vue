<template>
    <section class="about-section">
        <div class="max-w-2xl sm:px-6 lg:px-8 lg:py-8 mx-auto">
            <div class="bg-white rounded-xl shadow-xs mb-5 dark:bg-neutral-900">
                <div class="text-center mb-5">
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-neutral-200">
                        Referral
                    </h2>
                </div>
                <div>
                    <p>
                        You can refer a wildfire rebuilding project or a product and if the referral gets to a signed
                        contract you will be paid via this referral escrow app.
                    </p>
                    <p>
                        Register here to start referring wildfire rebuilding projects for maximum design-build
                        outcomes, powered by our AI modal calculation system.
                    </p>
                    <p>
                        Minitensor+ Owner Rep for Owner Builder Design-Build Package referral is .75% of the total package (see
                        home page for the example 5000 sf home at $1000 per sf calculation results and referral payout).
                    </p>
                    <p>
                        If your project referral is accepted by the Minitensor+ Team and the referred customer your escrow
                        account will have .75% of the total project cost.
                        Minitensor+ Products Referral, payout varies.
                    </p>
                </div>
            </div>

            <form @submit.prevent="hanldeSubmit">
                <div class="grid gap-3 lg:gap-3">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                        <div class="input-group">
                            <label for="hs-firstname-hire-us-2"
                                class="block mb-1 text-gray-700 font-medium dark:text-white">Referral Name</label>
                            <input v-model="referralName" type="text" required
                                name="hs-firstname-hire-us-2" id="hs-firstname-hire-us-2"
                                class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-purple-500 focus:ring-purple-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                        </div>

                        <div class="input-group">
                            <label for="referralEmail" class="block mb-1 text-gray-700 font-medium dark:text-white">Referral Email</label>
                            <input v-model="referralEmail" type="email" name="hs-work-email-hire-us-2" id="referralEmail"
                                autocomplete="email"
                                class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-purple-500 focus:ring-purple-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                        </div>
                    </div>

                    <div class="input-group">
                        <label for="hs-lastname-hire-us-2"
                            class="block mb-1 text-gray-700 font-medium dark:text-white">Project Name</label>
                        <input v-model="projectName" type="text" required
                            name="hs-lastname-hire-us-2" id="hs-lastname-hire-us-2"
                            class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-purple-500 focus:ring-purple-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                    </div>
                    
                    <label class="block text-gray-700 font-medium dark:text-white">Referral Type</label>
                    <div v-for="option in referralTypesOptions" :key="option.value" class="flex items-center">
                        <input
                            type="checkbox"
                            :id="'option-' + option.value"
                            :value="option.value"
                            v-model="referralTypes"
                            class="w-[18px] h-[18px] text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                        />
                        <label
                            :for="'option-' + option.value"
                            class="ml-3 text-sm text-gray-700"
                        >
                        {{ option.label }}
                        </label>
                    </div>
                    

                    <!-- <div class="input-group">
                        <label for="serviceType" class="block mb-1 text-gray-700 font-medium dark:text-white">Service Type</label>
                        <select id="serviceType" v-model="serviceType" required
                            class="py-1.5 sm:py-2 px-3 pe-9 block w-full border-gray-200 shadow-2xs rounded-lg sm:focus:border-purple-500 focus:ring-purple-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                            <option v-for="(option, index) in serviceTypesOptions" :key="index" :value="option.value">{{
                                option.label }}</option>
                        </select>
                    </div> -->

                    <div class="input-group">
                        <label for="address"
                            class="block mb-1 text-gray-700 font-medium dark:text-white">Location</label>
                        <input v-model="address" type="text" required
                            name="address" id="address"
                            class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-purple-500 focus:ring-purple-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                    </div>
                    

                    <!-- <div class="input-group">
                        <label for="location" class="block mb-1 text-gray-700 font-medium dark:text-white">Location</label>
                        <select id="location" v-model="location" required
                            class="py-1.5 sm:py-2 px-3 pe-9 block w-full border-gray-200 shadow-2xs rounded-lg sm:focus:border-purple-500 focus:ring-purple-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                            <option v-for="(option, index) in locationOptions" :key="index" :value="option.id">{{
                                option.name }}</option>
                        </select>
                    </div> -->
                </div>

                <div class="mt-5 flex justify-center gap-x-2">
                    <button type="submit"
                        class="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-md font-medium rounded-lg border border-transparent bg-purple-600 text-white focus:outline-hidden focus:bg-purple-700 disabled:opacity-50 disabled:pointer-events-none">
                        Submit Referral
                    </button>
                </div>
            </form>

            
        </div>
        

        <div v-if="isLoading" class="loading-overlay">
            Waiting...
        </div>

        <!-- Modal -->
        <div
        v-if="showModal"
        class="fixed inset-0 z-80 flex items-center justify-center bg-black bg-opacity-50"
        role="dialog"
        aria-labelledby="sign-out-modal-label"
        tabindex="-1"
        >
            <div class="bg-white rounded-xl shadow-lg dark:bg-neutral-900 sm:max-w-xs w-full m-3 p-4 sm:p-10 relative">
                <!-- Close Button -->
                <button
                @click="showModal = false"
                type="button"
                class="absolute top-2 right-2 size-8 inline-flex justify-center items-center rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600"
                aria-label="Close"
                >
                    &times;
                </button>

                <!-- Modal Content -->
                <div class="text-center">
                <span class="mb-4 inline-flex justify-center items-center size-15.5 rounded-full border-4 border-yellow-50 bg-yellow-100 text-yellow-500 dark:bg-yellow-700 dark:border-yellow-600 dark:text-yellow-100">
                    <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                </span>

                <div class="flex justify-center py-5">
                    <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="green" stroke-width="2" fill="none"/>
                        <path d="M7 12l3 3 7-7" stroke="green" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>               


                <h3 class="mb-2 text-2xl font-bold text-gray-800 dark:text-neutral-200">Referral Submitted Successfully</h3>
                <p class="text-gray-500 dark:text-neutral-500 text-sm">
                    Thanks for the connection — our team will reach out and keep you updated.
                </p>

                <div class="my-6 grid gap-y-2">
                    <button
                    type="button"
                    @click="handleNewReferral()"
                    class="py-2.5 px-4 w-full inline-flex justify-center items-center gap-x-2 text-md font-medium rounded-lg border border-transparent bg-purple-600 text-white hover:bg-purple-700"
                    >
                    Submit a New Referral
                    </button>

                    <button type="button" @click="handleGoReferrals()" class="py-2.5 px-4 w-full inline-flex justify-center items-center gap-x-2 text-md font-medium rounded-lg border border-gray-200 bg-gray-200 text-gray-800 shadow-2xs hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                        Go to Referrals
                    </button>
                    
                </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import axios from 'axios';
import { serviceTypesArray } from '../config/serviceTypesConfig';
import { countries } from '../config/locations';
import { referralTypesArray } from '../config/referralTypesConfig';
export default {
    name: 'Referral',
    data() {
        return {
            referralName: '',
            projectName: '',
            referralEmail: '',
            // serviceType: '',
            // serviceTypesOptions: [{
            //     label: 'Select a role',
            //     value: ''
            // }, ...serviceTypesArray],
            referralTypes: [],
            referralTypesOptions: referralTypesArray,
            address: '',
            location: 840,
            locationOptions: countries,
            showModal: false,
            isLoading: false,
        }
    },
    created() {
    },
    mounted() {
    },
    methods: {
        async hanldeSubmit() {
            if (!this.referralName || !this.projectName || !this.referralEmail || !this.referralTypes.length || !this.location) return;
            this.isLoading = true;
            try {
                const referralObj = {
                    referralName: this.referralName,
                    projectName: this.projectName,
                    referralEmail: this.referralEmail,
                    referralTypes: this.referralTypes,
                    address: this.address,
                    createdBy: this.$store.state.user.email || 'guest',
                    createdAt: new Date(),
                };
                // Store in localStorage as fallback (optional)
                const storedReferrals = JSON.parse(localStorage.getItem('referrals') || '[]');
                storedReferrals.push({ id: 'ref_' + Date.now(), ...referralObj });
                localStorage.setItem('referrals', JSON.stringify(storedReferrals));
                console.log("Referral saved locally");
                await this.sendEmail();
                this.showModal = true;
                this.isLoading = false;
            } catch (e) {
                console.error("Error saving referral: ", e);
                this.isLoading = false;
            }
        },
        async sendEmail() {
            const subject = 'Referral';
            const referralTypesTextArray = this.referralTypes.map(value => {
                return this.referralTypesOptions[this.referralTypesOptions.findIndex(e => e.value == value)].label
            })
            const text = `A referral was submitted by ${this.referralName}\n`
                + `Referral Email: ${this.referralEmail}\n`
                + `Project Name: ${this.projectName}\n`
                + `Address: ${this.address}\n`
                + `Referral Type: ${referralTypesTextArray.join(';')}\n`
                + `Refered by ${this.$store.state.user.email}`
            try {
                const response = await axios.post('https://sendemail-t6e3vsm3gq-uc.a.run.app/sendEmail', {
                    to: this.referralEmail,
                    cc: 'ticket@vdc-bim.team',
                    subject: subject,
                    text: text
                });

                console.log('✅ Email sent: ' + response.data);
            } catch (error) {
                console.error('❌ Error sending email:', error);
                console.log('Error sending email: ' + (error.response?.data || error.message));
            }
        },
        handleNewReferral() {
            this.referralName = ''
            this.referralEmail = ''
            this.address = ''
            this.referralTypes = []
            this.projectName = ''
            this.showModal = false
        },
        handleGoReferrals() {
            this.showModal = false
            this.$router.push('/escrow').catch(()=>{});
        }
    }
}
</script>