<template>
    <div class="max-w-7xl mx-auto md:p-4">
        <h4 class="text-lg font-bold mb-4">Referrals</h4>
        <div class="overflow-x-auto bg-white shadow rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-100">
                <tr>
                    <th class="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
                    <th class="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Email</th>
                    <th class="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Project Name</th>
                    <th class="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Location</th>
                    <th class="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Created By</th>
                </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(referral, index) in referrals" :key="index">
                    <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{{ referral.referralName }}</td>
                    <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{{ referral.referralEmail }}</td>
                    <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{{ referral.projectName }}</td>
                    <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{{ referral.location?.name || referral.address || '' }}</td>
                    <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{{ referral.createdBy }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: ['referrals'],
    data() {
        return {
        }
    },
    mounted() {
    }
}
</script>