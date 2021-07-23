import '../styles/ParentComponent.css';

export const ParentComponent = (props) => {
    return (
        <div>
            <h2 className="title"> I'm the parent </h2>
            { props.children }
        </div>
    )
}