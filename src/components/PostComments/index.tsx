import { FormEvent, useState } from 'react';
import Comment from '../../models/Comment';
import styles from './PostComments.module.css';


const PostComments = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [tempComment, setTempComment] = useState('');

    function handleAddComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newComment = new Comment(comments.length, tempComment);
        setTempComment('');
        setComments([...comments, newComment])
    }

    return (
        <div>
            <ul className={styles['post-comments']} data-testid="comentario-postado">
                {comments.map(({ comment, id }) => (
                    <li className={styles['post-comment']} key={id} data-testid="comentario-postado">
                        <p className={styles['post-comment-content']}>
                            {comment}
                        </p>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleAddComment} className={styles['post-comments-form']}>
                <textarea value={tempComment} onChange={e => setTempComment(e.target.value)} required className={styles['post-comments-form-textarea']} />
                <button type="submit" className={styles['post-comments-form-button']}>
                    Comentar
                </button>
            </form>
        </div>
    );
}

export default PostComments;