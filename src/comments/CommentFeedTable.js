import React from 'react';
import { Table} from 'reactstrap'; 
//import APIURL froma

const CommentFeedTable = (props) => {

    const commentMapper = () => {
        return props.comment.map((comment, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{comment.id}</th>
                    <td>{comment.subject}</td>
                    <td>{comment.comment}</td>
                    <td>{comment.date}</td>
                </tr>
            )
        })
    }

    return(
        <>
        <h3>Comment Feed</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Subeject</th>
                    <th>Comment</th>
                    <th>Date</th>
                    
                </tr>
            </thead>
            <tbody>
                {commentMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default CommentFeedTable;