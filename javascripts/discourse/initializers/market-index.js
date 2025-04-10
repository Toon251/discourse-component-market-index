import { apiInitializer } from 'discourse/lib/api';
import MarketIndex from '../components/market-index';

export default apiInitializer('1.14.0', (api) => {
    api.renderInOutlet(settings.plugin_outlet.trim(), MarketIndex);
});