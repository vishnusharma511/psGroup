<template>
    <navbar btnBackground="bg-gradient-success" />
    <div
        class="page-header align-items-start min-vh-100"
        style="
            background-image: url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80');
        "
    >
        <span class="mask bg-gradient-dark opacity-6"></span>
        <div class="container my-auto">
            <div class="row">
                <div class="col-lg-4 col-md-8 col-12 mx-auto">
                    <div class="card z-index-0 fadeIn3 fadeInBottom">
                        <div
                            class="card-header p-0 position-relative mt-n4 mx-3 z-index-2"
                        >
                            <div
                                class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1"
                            >
                                <h4
                                    class="text-white font-weight-bolder text-center mt-2 mb-0"
                                >
                                    Sign in
                                </h4>
                                <div class="row mt-3">
                                    <div class="col-2 text-center ms-auto">
                                        <a
                                            class="btn btn-link px-3"
                                            href="javascript:;"
                                        >
                                            <i
                                                class="fab fa-facebook text-white text-lg"
                                            ></i>
                                        </a>
                                    </div>
                                    <div class="col-2 text-center px-1">
                                        <a
                                            class="btn btn-link px-3"
                                            href="javascript:;"
                                        >
                                            <i
                                                class="fab fa-github text-white text-lg"
                                            ></i>
                                        </a>
                                    </div>
                                    <div class="col-2 text-center me-auto">
                                        <a
                                            class="btn btn-link px-3"
                                            href="javascript:;"
                                        >
                                            <i
                                                class="fab fa-google text-white text-lg"
                                            ></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <form role="form" class="text-start mt-3">
                                <div class="mb-3">
                                    <vmd-input
                                        type="email"
                                        label="Email"
                                        name="email"
                                    />
                                </div>
                                <div class="mb-3">
                                    <vmd-input
                                        type="password"
                                        label="Password"
                                        name="password"
                                    />
                                </div>
                                <vmd-switch id="rememberMe"
                                    >Remember me</vmd-switch
                                >
                                <div class="text-center">
                                    <vmd-button
                                        class="my-4 mb-2"
                                        variant="gradient"
                                        color="success"
                                        fullWidth
                                        >Sign in</vmd-button
                                    >
                                </div>
                                <p class="mt-4 text-sm text-center">
                                    Don't have an account?
                                    <router-link
                                        :to="{ name: 'SignUp' }"
                                        class="text-success text-gradient font-weight-bold"
                                        >Sign up</router-link
                                    >
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import VmdInput from "@/components/VmdInput.vue";
import VmdSwitch from "@/components/VmdSwitch.vue";
import VmdButton from "@/components/VmdButton.vue";

export default {
    name: "sign-in",
    components: {
        Navbar,
        VmdInput,
        VmdSwitch,
        VmdButton,
    },
    beforeMount() {
        this.$store.state.hideConfigButton = true;
        this.$store.state.showNavbar = false;
        this.$store.state.showSidenav = false;
        this.$store.state.showFooter = false;
    },
    beforeUnmount() {
        this.$store.state.hideConfigButton = false;
        this.$store.state.showNavbar = true;
        this.$store.state.showSidenav = true;
        this.$store.state.showFooter = true;
    },
};
</script>
