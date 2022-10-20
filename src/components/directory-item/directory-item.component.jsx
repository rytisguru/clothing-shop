import './directory-item.styles.scss';

const DirectoryItem = ({ category: { title, imageUrl } }) => {
    return (
        <div className="directory-item-container large">
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="body">
                <h2>{title}</h2>
                <p>Show Now</p>
            </div>
        </div>
    )
}

export default DirectoryItem;