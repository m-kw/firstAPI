import { connect} from 'react-redux';
import PricesPage from './PricesPage';
import { getRequest, getWorkshops, loadWorkshopsRequest } from '../../../redux/workshopsRedux';

const mapStateToProps = state => ({
    workshops: getWorkshops(state),
    request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
    loadWorkshops: () => dispatch(loadWorkshopsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PricesPage);