import {Col} from 'reactstrap';

const Loading = () => {
return (
    <Col>
    <i className='fa fa-spinner fa-pulse fw fa-3x text-primary'/>
    <p>Loading...</p>
    </Col>
);
};

export default Loading;