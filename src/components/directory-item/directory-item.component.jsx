import { useNavigate } from 'react-router-dom';
import './directory-item.styles.scss';

const DirectoryItem = ({ category: { title, imageUrl, route } }) => {
    const navigate = useNavigate()

    const goToCategory = () => {
        navigate(`shop/${title}`)
    }

    return (
        <div className="directory-item-container large" onClick={goToCategory}>
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