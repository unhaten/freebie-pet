import { useParams } from 'react-router-dom';
// import styles from './cardDetail.module.scss'

import data from '../../../components/Card/cardData';

const CardDetail = () => {
    const params = useParams()

    const detailedCard = data.map(item => Number(params.id) === item.id ?
        <>
        <h1>yes</h1>
        </>
        : null)

    return (<>
        {detailedCard}
    </>);
}

export default CardDetail;