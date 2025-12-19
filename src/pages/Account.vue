<template>
    <section class="section">
        <div class="max-w-2xl md:p-4 sm:p-1 lg:px-8 lg:py-8 mx-auto">
            <div class="bg-white rounded-xl shadow-xs p-4 sm:p-7 dark:bg-neutral-900">
                <div class="text-center mb-8">
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-neutral-200">
                        My Account
                    </h2>
                    <p class="text-sm text-gray-600 dark:text-neutral-400">
                        Manage your personal information
                    </p>
                </div>

                <form>
                    <div class="grid gap-3 lg:gap-3">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                            <div class="input-group">
                                <label for="hs-firstname-hire-us-2" class="block mb-1 text-gray-700 font-medium dark:text-white">First Name</label>
                                <input v-model="firstName" type="text" required :disabled="!isEditable" name="hs-firstname-hire-us-2" id="hs-firstname-hire-us-2" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-purple-500 focus:ring-purple-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                            </div>

                            <div class="input-group">
                                <label for="hs-lastname-hire-us-2" class="block mb-1 text-gray-700 font-medium dark:text-white">Last Name</label>
                                <input v-model="lastName" type="text" required :disabled="!isEditable" name="hs-lastname-hire-us-2" id="hs-lastname-hire-us-2" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-purple-500 focus:ring-purple-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                            </div>
                        </div>

                        <div class="input-group">
                            <label for="email" class="block mb-1 text-gray-700 font-medium dark:text-white">Email</label>
                            <input v-model="email" type="email" disabled name="hs-work-email-hire-us-2" id="email" autocomplete="email" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-purple-500 focus:ring-purple-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                        </div>

                        <div class="input-group">
                            <label for="phone" class="block mb-1 text-gray-700 font-medium dark:text-white">Phone</label>
                            <input v-model="phoneNumber" type="text" :disabled="!isEditable" name="hs-work-email-hire-us-2" id="phone" autocomplete="email" class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:focus:border-purple-500 focus:ring-purple-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                        </div>

                        <div class="input-group">
                            <label for="role" class="block mb-1 text-gray-700 font-medium dark:text-white">Role</label>

                            <select id="role" v-model="userRole" required :disabled="!isEditable" class="py-1.5 sm:py-2 px-3 pe-9 block w-full border-gray-200 shadow-2xs rounded-lg sm:focus:border-purple-500 focus:ring-purple-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                <option v-for="(option, index) in roleOptions" :key="index" :value="option.value">{{ option.label }}</option>
                            </select>
                        </div>
                    </div>
                </form>

                <div class="mt-5 flex justify-end gap-x-2">
                    <button type="button" @click="isEditable = !isEditable" class="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-gray-200 text-gray-800 shadow-2xs hover:bg-gray-300 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                       {{ isEditable ? 'Cancel' : 'Edit' }}
                    </button>
                    <button type="button" @click="hanldeSave" :disabled="!isEditable" class="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-purple-600 text-white focus:outline-hidden focus:bg-purple-700 disabled:opacity-50 disabled:pointer-events-none">
                        Save changes
                    </button>
                </div>
            </div>
        </div>

        <div v-if="isLoading" class="loading-overlay">
            Waiting...
        </div>
    </section>
</template>

<script>
import { rolesArray } from '../config/userRolesConfig';
export default {
    name: 'Account',
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            userRole: '',
            roleOptions: [{
                label: 'Select a role',
                value: ''
            }, ...rolesArray],
            isEditable: false,
            isLoading: false,
        }
    },
    created() {
        const userObj = this.$store.state.user;
        this.firstName = userObj.firstName;
        this.lastName = userObj.lastName;
        this.email = userObj.email;
        this.phoneNumber = userObj.phoneNumber;
        this.userRole = userObj.userRole || '';
    },
    methods: {
        async hanldeSave() {
            if (!this.isEditable) return;
            this.isLoading = true;
            // Simulate save without Firebase
            setTimeout(() => {
                const updatedData = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    phoneNumber: this.phoneNumber,
                    userRole: this.userRole
                };
                console.log("✅ User profile updated!");
                this.$store.dispatch('update', updatedData);
                this.isEditable = !this.isEditable;
                this.isLoading = false;
            }, 300);
        }
    }
}
</script>