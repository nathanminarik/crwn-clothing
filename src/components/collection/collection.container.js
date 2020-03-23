import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from './../../redux';
import { WithSpinner } from '../with-spinner';
import { Collection } from './collection.component';

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state)
});

export const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Collection);