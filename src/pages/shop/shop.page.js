import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    fetchCollectionsStartAsync,
    updateCollections
} from './../../redux'
import { CollectionContainer, CollectionsOverviewContainer } from './../../components';

export const ShopPageNotConnected = ({
    fetchCollectionsStartAsync,
    match
}) => {    
    useEffect(() => fetchCollectionsStartAsync(), [fetchCollectionsStartAsync]);
    
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            {/* Pre Container */}
            {/* <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionsFetching | !isCollectionsLoaded} {...props}/>} /> */}
            <Route exact path={`${match.path}/:collectionId`} component={CollectionContainer} />
        </div>
    )
};

export const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export const ShopPage = connect(null, mapDispatchToProps)(ShopPageNotConnected);

// Pre Hook
// Pre Container
// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

// export class ShopPageNotConnected extends React.Component {    
//     componentDidMount() {

//         const { fetchCollectionsStartAsync } = this.props

//         fetchCollectionsStartAsync();
//         // The following is firebase specific and uses their observer pattern. It is the equivalent of using promises and redux-thunk
// 		// We do lose the power of streams though by moving to promises.
//         // this.unsubscribeFromSnapshot = collectionsRef.onSnapshot(async snapshot => {
//         //     const collectionsMap = convertCollectionSnapshotToMap(snapshot);
//         //     updateCollections(collectionsMap)
//         //     this.setState({loading: false})
//         // });
//     }

//     render() {
//         const {
//             match
//         } = this.props;

//         return (
//             <div className='shop-page'>
//                 <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
//                 {/* Pre Container */}
//                 {/* <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionsFetching | !isCollectionsLoaded} {...props}/>} /> */}
//                 <Route exact path={`${match.path}/:collectionId`} component={CollectionContainer} />
//             </div>
//         )
//     }
// };

// export const mapDispatchToProps = (dispatch) => ({
//     fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
//     // Old code preredux-thunk
//     updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
// });

// export const ShopPage = connect(null, mapDispatchToProps)(ShopPageNotConnected);
