const app = {
    state: {
        searchWord: '',
        detailInfo: {}
    },
    mutations: {
        changeSearchWord(state, word) {
            state.searchWord = word;
        },
        updateDetailInfo(state, info) {
            state.detailInfo = Object.assign({}, info);
        }
    }
};

export default app;
