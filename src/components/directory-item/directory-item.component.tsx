import { useNavigate } from 'react-router-dom';
import {
    DirectoryItemContainer,
    BackgroundImage,
    Body
} from './directory-item.styles';

type DirectoryItemProps = {
    category: {
        title: string;
        imageUrl: string;
        route: string;
    }
}

const DirectoryItem = ({ category: { title, imageUrl, route } }: DirectoryItemProps) => {
    const navigate = useNavigate()

    const goToCategory = () => {
        navigate(route)
    }

    return (
        <DirectoryItemContainer large={true} onClick={goToCategory}>
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Show Now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;