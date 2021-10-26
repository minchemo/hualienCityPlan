export const state = () => ({
    detailOpen: false,
    detailTab: [],
    currentDetailTab: {
        name: "",
        enname: "",
        creator: "",
        info: ``,
        content: ``,
        warn: "",
        slides: [],
        links: []
    },
    currentDetailTitle: "",
    forceTabKeyId: 0,
    forceTabKeyName: '',
    mobileMenuOpen: false
});

export const mutations = {
    openDetail(state, payload) {
        state.detailTab = payload.tab;
        state.currentDetailTab = payload.tab[0];
        state.currentDetailTitle = payload.title;

        state.detailOpen = true;

        if (payload.forceTabKeyId) {
            state.forceTabKeyId = payload.forceTabKeyId;
            state.forceTabKeyName = payload.forceTabKeyName;
        }

        document.getElementsByTagName("html")[0].style.overflow = "hidden";
    },
    setCurrentDetailTab(state, payload) {
        state.currentDetailTab = payload;
    },
    closeDetail(state) {
        state.forceTabKeyId = 0;
        state.forceTabKeyName = '';
        state.detailOpen = false;
        document.getElementsByTagName("html")[0].style.overflow = "auto";
    },
    mobileMenuToggle(state) {
        state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    forceCloseMobileMenu(state) {
        state.mobileMenuOpen = false;
    }
};