<template>
    <div
        class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
        id="sidenav-collapse-main"
    >
        <ul class="navbar-nav">
            <li class="nav-item">
                <sidenav-collapse
                    url="#"
                    :aria-controls="''"
                    v-bind:collapse="false"
                    collapseRef="dashboard"
                    navText="Dashboard"
                >
                    <template v-slot:icon>
                        <i class="material-icons-round opacity-10 fs-5"
                            >dashboard</i
                        >
                    </template>
                </sidenav-collapse>
            </li>
            <li class="nav-item">
                <sidenav-collapse
                    url="#"
                    :aria-controls="''"
                    v-bind:collapse="false"
                    collapseRef="tables"
                    navText="Employee"
                >
                    <template v-slot:icon>
                        <i class="material-icons-round opacity-10 fs-5"
                            >table_view</i
                        >
                    </template>
                </sidenav-collapse>
            </li>
            <li class="nav-item">
                <sidenav-collapse
                    url="#"
                    :aria-controls="''"
                    v-bind:collapse="false"
                    collapseRef="billing"
                    navText="Billing"
                >
                    <template v-slot:icon>
                        <i class="material-icons-round opacity-10 fs-5"
                            >receipt_long</i
                        >
                    </template>
                </sidenav-collapse>
            </li>
            <li class="nav-item">
                <sidenav-collapse
                    url="#"
                    :aria-controls="''"
                    v-bind:collapse="false"
                    collapseRef="notifications"
                    navText="Notifications"
                >
                    <template v-slot:icon>
                        <i class="material-icons-round opacity-10 fs-5"
                            >notifications</i
                        >
                    </template>
                </sidenav-collapse>
            </li>
            <!-- <li class="mt-3 nav-item">
                <h6
                    class="text-xs ps-4 text-uppercase font-weight-bolder text-white"
                    :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'"
                >
                    ACCOUNT PAGES
                </h6>
            </li>
            <li class="nav-item">
                <sidenav-collapse
                    url="#"
                    :aria-controls="''"
                    v-bind:collapse="false"
                    collapseRef="profile"
                    navText="Profile"
                >
                    <template v-slot:icon>
                        <i class="material-icons-round opacity-10 fs-5"
                            >person</i
                        >
                    </template>
                </sidenav-collapse>
            </li> -->
        </ul>
        <div class="sidenav-footer position-absolute w-100 bottom-0">
            <div class="mx-3">
                <button
                    class="btn mt-4 w-100"
                    :class="`bg-gradient-${this.$store.state.mcolor}`"
                    type="button"
                    v-on:click="logout()"
                >
                    Log Out
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import SidenavCollapse from "./SidenavCollapse.vue";
import store from "../../store";

export default {
    name: "SidenavList",
    props: {
        cardBg: String,
    },
    data() {
        return {
            title: "Soft UI Dashboard PRO",
            controls: "dashboardsExamples",
            isActive: "active",
        };
    },
    components: {
        SidenavCollapse,
    },
    methods: {
        logout() {
            store.state.user.token = null;
        },
    },
};
</script>
