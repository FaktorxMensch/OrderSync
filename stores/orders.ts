export const useOrdersStore = defineStore('orders', {
    state: () => ({
        bestellung: null,
        request_time: null,
    }),
    actions: {
        openBestellung(bestellung: any) {
            this.bestellung = bestellung
            console.log('bestellung', bestellung)
        },
        closeBestellung() {
            this.bestellung = null
        }
    }
})
