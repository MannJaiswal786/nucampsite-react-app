import {Col} from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentSlice';
import CommentForm from '../comments/CommentForm';

const CommentsList = ({campsiteId}) => {
const comments = selectCommentsByCampsiteId(campsiteId);

if (comments && comments.length > 0) {
    return (
        <Col md='5' className='m-1'>
        <h4>Comments</h4>
        {comments.map((comment)=> {
            return <Comment key={comment.id} comment={comment}></Comment>
        })}
        <CommentForm campsiteId={campsiteId}></CommentForm>
        </Col>
    );
}

return (
    <Col>
    There are no comments for this campsite yet.
    </Col>
);
};

export default CommentsList;