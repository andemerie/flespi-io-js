import Connection from './index'
/* Main object of plugin */
let ConnectionPlugin = {}
/* install function of plugin */
ConnectionPlugin.install = function (Vue, config) {
    /* create of main connector */
    let connector = new Connection(config)
    /* setting main connector to Vue */
    if (config.connectorName) {
        Vue[config.connectorName] = connector
        Vue[`$${config.connectorName}`] = connector
    } else {
        Vue.connector = connector
        Vue.prototype.$connector = connector
    }
}

export default ConnectionPlugin