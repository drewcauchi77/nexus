import { reactive } from 'vue';

let store = {
    debug: false,
    state: reactive({
        alerts: [],
    }),
    addAlertMessage(newValue, from) {
        if (this.debug) console.log(`%c addAlertMessage triggered from ${from}`, 'color: green');
        this.state.alerts = [...this.state.alerts, newValue];
    },
    removeAlertMessage(from) {
        if (this.debug) console.log(`%c removeAlertMessage triggered from ${from}`, 'color: green');
        this.state.alerts.shift();
    },
};

export default store;