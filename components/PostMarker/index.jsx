import React from 'react';

export default ({ Marker, post, navigate }) => (
  <Marker
    title={post.title}
    description={post.description}
    coordinate={{
      latitude: post.location.latitude,
      longitude: post.location.longitude,
    }}
    onCalloutPress={() => navigate('post-detail')}
  />
);
