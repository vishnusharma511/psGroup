import { createStore } from "vuex";

export default createStore({
    state: {
        hideConfigButton: false,
        isPinned: true,
        showConfig: false,
        sidebarType: "bg-gradient-dark",
        isRTL: false,
        mcolor: "success",
        isNavFixed: false,
        isAbsolute: false,
        showNavs: true,
        showSidenav: true,
        showNavbar: true,
        showFooter: true,
        showMain: true,
        isDarkMode: false,
        user: {
            data: {
                name: "Vishnu Sharma",
                email: "vishnu.sharma@gmail.com",
                mobile: "+91 8934998410",
                avatar: require("@/assets/img/bruce-mars.jpg"),
            },
            token: "sdgf35fhg68765343242fy",
        },
    },
    mutations: {
        toggleConfigurator(state) {
            state.showConfig = !state.showConfig;
        },
        navbarMinimize(state) {
            const sidenav_show = document.querySelector(".g-sidenav-show");

            if (sidenav_show.classList.contains("g-sidenav-pinned")) {
                sidenav_show.classList.remove("g-sidenav-pinned");
                state.isPinned = true;
            } else {
                sidenav_show.classList.add("g-sidenav-pinned");
                state.isPinned = false;
            }
        },
        navbarFixed(state) {
            if (state.isNavFixed === false) {
                state.isNavFixed = true;
            } else {
                state.isNavFixed = false;
            }
        },
    },
    getters: {},
});
