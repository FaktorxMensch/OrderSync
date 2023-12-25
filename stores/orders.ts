export const useOrdersStore = defineStore('orders', {
    state: () => ({
        bestellung: null,
        request_time: null,
    }),
    actions: {
        playClick() {
            const audio = new Audio('/click.mp3')
            audio.volume = 0.5
            audio.play()
        },
        openBestellung(bestellung: any) {
            this.bestellung = bestellung
        },
        closeBestellung() {
            this.bestellung = null
        }
    }
})
