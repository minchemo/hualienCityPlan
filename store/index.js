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
    currentDetailTitle: ""
});

export const mutations = {
    openDetail(state, payload) {
        state.detailTab = payload.tab;
        state.currentDetailTab = payload.tab[0];
        state.currentDetailTitle = payload.title;

        state.detailOpen = true;
    },
    setCurrentDetailTab(state, payload) {
        state.currentDetailTab = payload;
    },
    closeDetail(state) {
        state.detailOpen = false;
    }
};