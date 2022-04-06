export default function Blog(props) {

    return <div className='blog'>
        <h2>{props.title}</h2>
        <h3>Posted By: {props.author}</h3>
        <h3>Posted On: {props.createdAt}</h3>
        <p>{props.text}</p>
    </div>
}