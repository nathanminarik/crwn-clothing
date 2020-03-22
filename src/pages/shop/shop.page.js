import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCollections } from './../../redux'


import { Collection, CollectionsOverview, WithSpinner } from './../../components';
import { firestore, convertCollectionSnapshotToMap } from './../../firebase/firebase.utils';

const CollectionWithSpinner = WithSpinner(Collection);
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

export class ShopPageNotConnected extends React.Component {
    unsubscribeFromSnapshot = null;
    state = {
        loading: true
    }
    
    componentDidMount() {
        const collectionsRef = firestore.collection('collections');
        const { updateCollections } = this.props;

        collectionsRef.get().then(snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            updateCollections(collectionsMap)
            this.setState({loading: false})
        });

        // The following is firebase specific and uses their observer pattern. It is the equivalent of using promises and redux-thunk
		// We do lose the power of streams though by moving to promises.
        // this.unsubscribeFromSnapshot = collectionsRef.onSnapshot(async snapshot => {
        //     const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap)
        //     this.setState({loading: false})
        // });
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>} />
                <Route exact path={`${match.path}/:collectionId`} render={(props) => <CollectionWithSpinner isLoading={loading} {...props}/>} />
            </div>
        )
    }
};

export const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
})

export const ShopPage = connect(null, mapDispatchToProps)(ShopPageNotConnected);
